const { MongoClient, ServerApiVersion } = require('mongodb');

const connect = async (uri) => {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  return await client.connect();
}

const getDb = async (client, databaseName) => {
  return await client.db(databaseName);
}

const getCollection = async (db, collectionName) => {
  return await db.collection(collectionName);
}

const closeConnect = async (client) => {
  return await client.close();
}

module.exports = {
  connect,
  getDb,
  getCollection,
  closeConnect
}
