const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.get("/", (req, res) => {
  res.send("hello word");
});

// midlleware
app.use(cors());
app.use(express.json());

// mongodb

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://ahfayouness:Q0ShtJBF38cViFSo@cluster1.r4xvd0b.mongodb.net/bookInventory?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // create a collection  of document
    const bookCollections = client.db("bookInventory").collection("books");

    // insert a book to the db : post method
    app.post("/uplaod-book", async (req, res) => {
      const data = req.body;
      const result = await bookCollections.insertOne(data);
      res.send(result);
    });
    // get all from the database
    app.get("/all-books", async (req, res) => {
      const books = bookCollections.find();
      const result = await books.toArray();
      res.send(result);
    });
    // patch a book data or patch method

    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          ...updateBookData,
        },
      };

      // update
      const result = await bookCollections.updateOne(
        filter,
        updateDoc,
        options
      );
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// connect to db
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

//code : Q0ShtJBF38cViFSo;
