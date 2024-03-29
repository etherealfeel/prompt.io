import mongoose from 'mongoose';
let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log('mongodb connected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'prompt_db',
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        isConnected = true;
        console.log('mongodb connected');
    } catch (error) {
        console.log(error);
    }
};
