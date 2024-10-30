import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from 'dotenv'
import { MongoClient, ServerApiVersion }from 'mongodb'
dotenv.config({});
const app=express();
const PORT=process.env.PORT || 3000

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

//mongoDb connection



const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


const corsOptions={
    origin:'http//localhost:5713',
    credentials:true
}
app.use(cors(corsOptions))


app.listen(PORT,()=>{
    console.log(`server running at port ${PORT}`)
})