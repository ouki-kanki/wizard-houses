import mongoose, { ConnectOptions } from "mongoose";


const connectDB = async (): Promise<void> => {
  try {
    mongoose.set('strictQuery', false);

    const conn = await mongoose.connect(process.env.MONGODB_URI || '')
    console.log(`database connected: ${conn.connection.host}`)
  } catch (error) {
    console.error("error on db connection", error)
  }
}

export default connectDB;


// TODO refactor to this
// mongoose.Promise = Promise;
// mongoose.connect(process.env.MONGODB_URI || '')
// mongoose.connection.on('error', (error: Error) => console.log(error))