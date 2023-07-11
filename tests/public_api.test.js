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

    

    test("should filter entries by category ls to the number of listed entries", async () => {
        const filtered = this.response.body.entries.filter(item => item.Category.includes("Authentication & Authorization"));
        
        expect(filtered.lenght).toBe(7);

        filtered.forEach(element => {
            expect(element.Category).toBe("Authentication & Authorization");
        });
    });
});