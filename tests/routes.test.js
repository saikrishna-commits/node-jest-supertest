const request = require('supertest')
var server = request.agent("http://localhost:3300");

describe("SAMPLE unit test", () => {
    it("should return home page", (done) => {
        server
            .get("/api/posts")
            .expect("Content-type", /json/)
            .expect(200) // THis is HTTP response
            .end((err, res) => {
                expect(res.statusCode).toBe(200);
                expect(res.body.posts).toHaveLength(2);
                done();
            });
    });

});