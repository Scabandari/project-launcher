import { describe, it } from "mocha";
import chai from "chai";
import chaiHttp from "chai-http";

import app from "../src/index";

chai.should();
chai.use(chaiHttp);

describe("Example of a basic test", () => {
  it("should return home route", () => {
    chai
      .request(app)
      .get("/")
      .then((res) => {
        res.should.have.status(200);
      });
  });
});
