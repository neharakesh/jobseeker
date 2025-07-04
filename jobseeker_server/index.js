import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv';
import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS Configuration
app.use(cors({
    origin: ['http://localhost:5173', 'https://jobseeker-murex.vercel.app'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// MongoDB connection
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectDB() {
    try {
        await client.connect();
        const db = client.db("mernjobseeker");
        const jobCollections = db.collection("demoJobs");

        // Routes
        app.get("/", (req, res) => {
            res.send({
                activeStatus: true,
                error: false
            });
        });

        app.get("/all-jobs", async (req, res) => {
            const jobs = await jobCollections.find().toArray();
            res.send(jobs);
        });

        app.get("/all-jobs/:id", async (req, res) => {
            const id = req.params.id;
            const job = await jobCollections.findOne({ _id: new ObjectId(id) });
            res.send(job);
        });

        app.get("/my-jobs/:email", async (req, res) => {
            const email = req.params.email;
            const jobs = await jobCollections.find({ postedBy: email }).toArray();
            res.send(jobs);
        });

        app.post("/post-job", async (req, res) => {
            const body = req.body;
            body.createAt = new Date();
            const result = await jobCollections.insertOne(body);
            if (result.insertedId) {
                res.status(200).send(result);
            } else {
                res.status(500).send({ message: "Insertion failed", status: false });
            }
        });

        app.patch("/update-job/:id", async (req, res) => {
            const id = req.params.id;
            const jobData = req.body;
            const result = await jobCollections.updateOne(
                { _id: new ObjectId(id) },
                { $set: { ...jobData } },
                { upsert: true }
            );
            res.send(result);
        });

        app.delete("/job/:id", async (req, res) => {
            const id = req.params.id;
            const result = await jobCollections.deleteOne({ _id: new ObjectId(id) });
            res.send(result);
        });

        // Catch-all 404 route
        app.use("*", (req, res) => {
            res.status(404).json({ message: "Route not found", url: req.originalUrl });
        });

        // ✅ Start server after all routes are defined
        app.listen(PORT, () => {
            console.log(`✅ Server running at http://localhost:${PORT}`);
        });

        console.log("✅ Connected to MongoDB successfully.");
    } catch (error) {
        console.error("❌ Failed to connect to MongoDB:", error);
    }
}

connectDB();
