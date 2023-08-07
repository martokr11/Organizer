const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://WatsUPBG:1234Mk@cluster0.uh374bp.mongodb.net/";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('test');

    // const collection = db.collection('blogs');

    // Find the first document in the collection
    const first = await collection.findOne();
    console.log(first);
  } finally {
    // Close the database connection when finished or an error occurs
    await client.close();
  }
}
run().catch(console.error);