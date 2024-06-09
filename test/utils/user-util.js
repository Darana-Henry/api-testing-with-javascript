import dotenv from "dotenv";
dotenv.config();
import supertest from "supertest";
import { faker } from "@faker-js/faker";
const request = supertest("https://gorest.co.in/public/v2/");

const TOKEN = process.env.USER_TOKEN;

export const createUser = async () => {
  const data = {
    email: faker.internet.email(),
    name: faker.person.fullName(),
    gender: "male",
    status: "inactive",
  };

  const res = await request
    .post("users")
    .set("Authorization", `Bearer ${TOKEN}`)
    .send(data);

  return res.body.id;
};
