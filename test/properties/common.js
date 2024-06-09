import supertest from "supertest";
import env from "./env.js";
const request = supertest(env.baseURL);

export default request;
