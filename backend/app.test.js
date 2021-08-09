const request = require("supertest");
const app = require("./app.js");

describe("GET /", () => {
  describe("dummy test with default endpoint", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/");
      console.log(response);
      expect(response.statusCode).toBe(200);
    });
  });
});
