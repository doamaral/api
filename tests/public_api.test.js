const request = require('supertest');
require('dotenv').config();

describe("Public API lists", ()=>{

    beforeAll(async () => {
        this.response = await request(process.env.URL).get("/entries");
    });

    test("should retrieve the list of all public APIs with success", async ()=> {
        expect(this.response.statusCode).toBe(200);
    });

    test("should return entries count equals to the number of listed entries", async ()=> {
        const count = this.response.body.count;
        const entries = this.response.body.entries.length;
        expect(count).toBe(entries);
    });
});