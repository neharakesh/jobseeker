import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv';
import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS options
const corsOptions = {
    origin: 'http://localhost:5713',
    credentials: true
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// MongoDB connection
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectDB() {
    try {
        // Connect the client to the server
        await client.connect();

        // Create database and collection references
        const db = client.db("mernjobseeker");
        const jobCollections = db.collection("demoJobs");

        // Define routes
        app.get("/", async (req, res) => {
            res.send("Hi!");
        });

        // Get all jobs
        app.get("/all-jobs", async (req, res) => {
            const jobs = await jobCollections.find().toArray();
            res.send(jobs);
        });

        //get job by email
        app.get("/my-jobs/:email",async(req,res)=>{
          const jobs=await jobCollections.find({postedBy:req.params.email}).toArray()

          //console.log(req.params.email)
          res.send(jobs)
        })
        console.log("neha")



        //delete a job
        app.delete("/job/:id",async(req,res)=>{
          const id=req.params.id;
          const filter={_id:new ObjectId(id)}
          const result=await jobCollections.deleteOne(filter)
          res.send(result)
        })


        
        // Post a job
        app.post("/post-job", async (req, res) => {
            const body = req.body;
            body.createAt = new Date();
            console.log(body);
            const result = await jobCollections.insertOne(body);
            if (result.insertedId) {
                res.status(200).send(result);
            } else {
                res.status(404).send({
                    message: "Cannot insert. Try Again.",
                    status: false
                });
            }
        });

        console.log("Connected to MongoDB successfully.");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}

connectDB();

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
