import 'colors';
import 'dotenv/config';
import './src';
import { connect, CallbackError } from 'mongoose';

connect(`${process.env.MONGO_URI}`, (error: CallbackError) => {
	if (error) throw error;
	else console.log('Connected to MongoDB!'.blue);
});
