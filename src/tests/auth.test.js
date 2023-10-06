const request = require("supertest");
const app = require("../../server");
const User = require("../models/User");
const mongoose = require("mongoose");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

beforeEach(async () => {
  await User.deleteMany({});
});

it("should create a new user", async () => {
  const res = await request(app).post("/auth/signup").send({
    username: "testuser",
    email: "testuser@gmail.com",
    password: "password123",
  });
  expect(res.statusCode).toEqual(201);
  expect(res.body).toHaveProperty("token");
}, 10000);

it("should authenticate an existing user", async () => {
  const user = new User({
    username: "testuser",
    email: "testuser@gmail.com",
    password: "password123",
  });
  await user.save();

  const res = await request(app).post("/auth/login").send({
    email: "testuser@gmail.com",
    password: "password123",
  });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toHaveProperty("token");
}, 10000);
