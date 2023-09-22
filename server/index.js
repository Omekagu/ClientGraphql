const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const schema = require('./schema/schema');
require('dotenv').config();
const port = process.env.PORT || 8000;
const colors = require('colors');
const connectDB = require('./config/db');

connectDB();
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);
app.listen(port, console.log(`server  running on: ${port}`));
