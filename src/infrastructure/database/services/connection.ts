import mongoose from 'mongoose';

export async function connect(): Promise<any> {
  try {
    return await mongoose.connect(
      'mongodb+srv://estebanari29:MlpWkqJDbxXs46dM@fastkart.qd07av9.mongodb.net/?retryWrites=true&w=majority'
    );
  } catch (error) {
    throw new Error('There was an error trying to connect with the database');
  }
}

export async function disconnect(): Promise<any> {
  return await mongoose.disconnect();
}
