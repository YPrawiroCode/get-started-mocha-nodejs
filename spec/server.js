const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../app/server");

chai.should();

chai.use(chaiHttp);

describe("GET /", () => {
  it("it should return API is live...", (done) => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("success").eql(true);
        res.body.should.have.property("message").eql("API is live...");
        done(err);
      });
  });
});

describe("GET /date", () => {
  it("it should return the current data", (done) => {
    const currentDate = new Date();
    const gmtDate = currentDate.toGMTString();
    chai
      .request(server)
      .get("/date")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("message").eql(gmtDate);
        done(err);
      });
  });
});

describe("PUT /date", () => {
  it("it should 404 error because the endpoint is invalid", (done) => {
    chai
      .request(server)
      .put("/date")
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property("message").eql("Invalid route");
        done(err);
      });
  });
});
