const request = require('supertest');
require('dotenv').config();

describe("Public API lists", ()=>{

    beforeAll(async () => {
        this.response = await request(process.env.URL).get("/entries");
    });

    test("should retrieve the list of all public APIs with success", async ()=> {
        expect(this.response.statusCode).toBe(200);
    });
});