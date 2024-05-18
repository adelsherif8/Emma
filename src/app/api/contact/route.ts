// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

// MongoDB connection URI and database name
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

// Create a MongoClient
let client: MongoClient;

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect();
  }
  return client.db(dbName);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const db = await connectToDatabase();
    const collection = db.collection('contacts');

    const result = await collection.insertOne({ name, email, message });

    if (result.acknowledged) {
      return NextResponse.json({ message: 'Thanks for your love!' });
    } else {
      throw new Error('Failed to save the message.');
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
  }
}
