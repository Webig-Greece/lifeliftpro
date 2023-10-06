const { MongoMemoryServer } = require("mongodb-memory-server");
const { connectDB, closeDatabase } = require("../config/database");

const mongod = new MongoMemoryServer();

module.exports = async () => {
  const uri = await mongod.getUri();
  await connectDB(uri);
};

module.exports.teardown = async () => {
  await closeDatabase();
  await mongod.stop();
};
