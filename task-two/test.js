const assert = require('assert');
const request = require('supertest');
const app = require('./server'); // Import your Express app

describe('CRUD Operations', function () {
    let personId;

    it('should create a new person', async function () {
        const response = await request(app)
            .post('/api')
            .send({
                name: 'John Doe',
                age: 30,
                track: 'Backend Developer',
            });

        assert.strictEqual(response.status, 200);
        personId = response.body._id;
    });

    it('should fetch details of a person by ID', async function () {
        const response = await request(app).get(`/api/${personId}`);
        
        assert.strictEqual(response.status, 200);
        assert.strictEqual(response.body._id, personId);
    });

    it('should update the details of a person by ID', async function () {
        const response = await request(app)
            .put(`/api/${personId}`)
            .send({
                age: 31,
            });

        assert.strictEqual(response.status, 200);
        assert.strictEqual(response.body.age, 31);
    });

    it('should delete a person by ID', async function () {
        const response = await request(app).delete(`/api/${personId}`);
        
        assert.strictEqual(response.status, 200);
        assert.strictEqual(response.body.message, 'Person has been deleted!');
    });
});
