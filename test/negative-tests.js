import dotenv from "dotenv";
dotenv.config();
import { expect } from "chai";
import { faker } from "@faker-js/faker";
import { createUser } from "./utils/user-util.js";
import request from "../test/properties/common.js";

const TOKEN = process.env.USER_TOKEN;

describe("Negative Tests", () => {
  let userID;
  let postID;

  before(async () => {
    userID = await createUser();
  });

  it("401 Authentication Failed", async () => {
    const data = {
      user_id: userID,
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraph(1),
    };

    const res = await request.post("posts").send(data);
    expect(res.body.message).to.be.eq("Authentication failed");
  });

  it("422 Data Validation Failed", async () => {
    const data = {
      user_id: userID,
      title: faker.lorem.sentence(),
    };

    const res = await request
      .post("posts")
      .set("Authorization", `Bearer ${TOKEN}`)
      .send(data);

    expect(res.body[0].field).to.be.eq("body");
    expect(res.body[0].message).to.be.eq("can't be blank");
  });
});
