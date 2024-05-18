const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

// Ensure dotenv loads the .env.local file correctly
dotenv.config({ path: '.env.local' });

// Debugging output to check environment variables
console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('MONGODB_DB:', process.env.MONGODB_DB);

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!uri || !dbName) {
  throw new Error('Please define the MONGODB_URI and MONGODB_DB environment variables inside .env.local');
}

const client = new MongoClient(uri);

async function testConnection() {
  try {
    console.log("Attempting to connect to the database...");
    await client.connect();
    const db = client.db(dbName);
    console.log(`Successfully connected to database: ${db.databaseName}`);
  } catch (error) {
    console.error('Connection failed', error);
  } finally {
    await client.close();
  }
}

testConnection();
