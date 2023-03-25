import mongoose from 'mongoose';

export async function connect(URI: any): Promise<any> {
  try {
    return await mongoose.connect(URI ?? '');
  } catch (error) {
    throw new Error('There was an error trying to connect with the database');
  }
}

export async function disconnect(): Promise<any> {
  return await mongoose.disconnect();
}
