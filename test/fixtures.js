import supertest from "supertest";
import { expect } from "chai";
const request = supertest("https://fantasy.premierleague.com/api/");

describe("Fantasy Premier League", () => {
  it("GET /fixtures", () => {
    return request.get("fixtures/").then((res) => {
      expect(res.body).to.not.be.empty;
    });
  });

  it("GET element-summary/:id/", () => {
    return request.get("element-summary/1/").then((res) => {
      expect(res.body.history).to.not.be.empty;
    });
  });

  it("GET bootstrap-static/", () => {
    return request.get("bootstrap-static/").then((res) => {
      expect(res.body).to.have.property("events");
      expect(res.body).to.have.property("teams");
      expect(res.body).to.have.property("element_types");
    });
  });

  it("GET bootstrap-static/teams-size", () => {
    return request.get("bootstrap-static/").then((res) => {
      expect(res.body.teams).to.have.length(20);
    });
  });

  it("GET bootstrap-static/total_players", () => {
    return request.get("bootstrap-static/").then((res) => {
      expect(res.body.total_players).to.be.eq(10905021);
    });
  });

  it("GET bootstrap-static/elements", () => {
    return request.get("bootstrap-static/").then((res) => {
      expect(res.body.elements[0].first_name).to.be.eq("Folarin");
    });
  });
});
