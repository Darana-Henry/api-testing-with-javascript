import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://gorest.co.in/public/v2/");
const TOKEN = "";

describe("Users", () => {
  it("GET /users", (done) => {
    request.get(`users?access-token=${TOKEN}`).end((err, res) => {
      expect(res.body).to.not.be.empty;
      done();
    });
  });
});

describe("Users#", () => {
  it("GET /users", () => {
    return request.get(`users?access-token=${TOKEN}`).then((res) => {
      expect(res.body).to.not.be.empty;
    });
  });

  it("GET /users/:id", () => {
    return request.get(`users/6947823?access-token=${TOKEN}`).then((res) => {
      expect(res.body.id).to.be.eq(6947823);
    });
  });

  it("GET /users with params", () => {
    const endpoint = `users/?access-token=${TOKEN}&page=7&gender=male&status=active`;
    return request.get(endpoint).then((res) => {
      expect(res.body).to.not.be.empty;
      res.body.forEach((element) => {
        expect(element.gender).to.be.eq("male");
        expect(element.status).to.be.eq("active");
      });
    });
  });
});
