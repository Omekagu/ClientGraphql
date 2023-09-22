const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI);

  console.log(
    `Database is connected to:  ${conn.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDB;
