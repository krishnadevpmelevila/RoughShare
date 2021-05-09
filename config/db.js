require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
	// database connection
	mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true});
	const connection = mongoose.connection;
	connection.once('open',()=>{
		console.log("database ok da!");
	}).catch(err =>{
		console.log("DB connection entho pattiyada!");
	})
}

module.exports = connectDB;