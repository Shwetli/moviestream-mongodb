const { MongoClient } = require('mongodb');
const insertData = require('./insert');
const runQueries = require('./queries');

async function main() {
  const client = new MongoClient('mongodb+srv://shwetli:Svetli_0744@cluster0.ahzvjws.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  try {
    await client.connect();
    const db = client.db('moviestream');

    // Първо вмъкни данните
    await insertData(db);

    // После стартирай заявките
    await runQueries(db);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
  }
}

main();
