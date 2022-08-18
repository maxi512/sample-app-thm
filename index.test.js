const request = require("supertest");

const app = require("./index");

describe("Test example", () => {
    test("GET /", async () => {
        const res = await request(app).get('/');
        expect(res.body.name).toBe('Ahora se va a deployar');
    });
});

afterAll(() => {
    app.close();
});
