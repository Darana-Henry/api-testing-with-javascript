import supertest from "supertest";
import { expect } from "chai";
import { faker } from "@faker-js/faker";
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
    return request.get(`users/6946915?access-token=${TOKEN}`).then((res) => {
      expect(res.body.id).to.be.eq(6946915);
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

  it("POST /users", () => {
    const data = {
      email: faker.internet.email(),
      name: faker.person.fullName(),
      gender: "male",
      status: "inactive",
    };

    return request
      .post("users")
      .set("Authorization", `Bearer ${TOKEN}`)
      .send(data)
      .then((res) => {
        expect(res.body.name).to.eq(data.name);
        expect(res.body).to.deep.include(data);
      });
  });
});
