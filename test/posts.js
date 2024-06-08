import supertest from "supertest";
import { expect } from "chai";
import { faker } from "@faker-js/faker";
import { TOKEN } from "./properties/properties.js";
import { createUser } from "./utils/user-util.js";
const request = supertest("https://gorest.co.in/public/v2/");

describe("Posts", () => {
  let userID;
  let postID;

  before(async () => {
    userID = await createUser();
  });

  describe("POST", () => {
    it("POST /posts", async () => {
      const data = {
        user_id: userID,
        title: faker.lorem.sentence(),
        body: faker.lorem.paragraph(1),
      };

      const res = await request
        .post("posts")
        .set("Authorization", `Bearer ${TOKEN}`)
        .send(data);

      expect(res.body).to.deep.include(data);
      postID = res.body.id;
    });
  });

  describe("GET", () => {
    it("GET /posts/:id", async () => {
      const res = await request
        .get(`posts/${postID}`)
        .set("Authorization", `Bearer ${TOKEN}`);

      expect(res.body.id).to.be.eq(postID);
    });
  });
});
