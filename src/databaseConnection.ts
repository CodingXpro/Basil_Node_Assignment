import mongoose, { ConnectOptions } from 'mongoose';


mongoose.Promise = global.Promise;


const connectToDatabase = async (): Promise<void> => {
  const options: ConnectOptions = { };

  await mongoose.connect("mongodb://127.0.0.1:27017/testuser");
};

export { connectToDatabase };
