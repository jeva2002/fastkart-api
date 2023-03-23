import mongoose from 'mongoose';

export async function database() {
  //TODO dotenv
  await mongoose.connect(
    'mongodb+srv://estebanari29:MlpWkqJDbxXs46dM@fastkart.qd07av9.mongodb.net/?retryWrites=true&w=majority'
  );
}
