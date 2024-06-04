import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://fantasy.premierleague.com/api/");

describe("Fixtures", () => {
  it("GET /fixtures", () => {
    request.get("fixtures/").end((err, res) => {
      expect(res.body).to.not.be.empty;
    });
  });
});
