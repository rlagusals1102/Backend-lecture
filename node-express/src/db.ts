import mongoose from "mongoose";

const password = "mXUFpUa7a6LAGDki";
const rawConnectString =
  "mongodb+srv://rlagusals1102:<password>@cluster0.opqtw3j.mongodb.net/?retryWrites=true&w=majority";

const connectString = rawConnectString.replace("<password>", password);

async function connectDB(): Promise<void> {
  await mongoose.connect(connectString);
  console.log("Mongo Atlas is ready!");
}

export { connectDB };
//Mongo Atlas New : mXUFpUa7a6LAGDki
