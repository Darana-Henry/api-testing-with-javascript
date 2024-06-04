import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://gorest.co.in/public-api/");
const TOKEN = "";

describe("Users", () => {
  it("GET /users", () => {
    request.get("users").end((err, res) => {
      expect(res.body.data).to.not.be.empty;
    });
  });
});
