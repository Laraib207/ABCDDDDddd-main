// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;
// if (!MONGODB_URI) throw new Error("Add MONGODB_URI to .env.local");

// let cached = global._mongoose;
// if (!cached) cached = global._mongoose = { conn: null, promise: null };

// export async function dbConnect() {
//   if (cached.conn) return cached.conn;
//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI, {
//       // optional options
//       dbName: "veerbharat",
//     }).then((m) => m);
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }



// lib/mongoose.js  (example)
import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) throw new Error('Please define MONGODB_URI in .env.local')

let cached = global.mongoose
if (!cached) cached = global.mongoose = { conn: null, promise: null }

async function dbConnect() {
  if (cached.conn) return cached.conn
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect   // <-- DEFAULT export