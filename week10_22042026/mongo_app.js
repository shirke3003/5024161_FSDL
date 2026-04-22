const { MongoClient } = require('mongodb');

const url = "mongodb+srv://resume_user:fcritru12345@cluster0.vpqwj7a.mongodb.net/ai_resume_db?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db("college");
        const collection = db.collection("students");

        // INSERT
        await collection.insertOne({
            Name: "Anushka",
            Age: 20
        });

        // READ
        const data = await collection.find().toArray();
        console.log("Students:", data);

    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

main();