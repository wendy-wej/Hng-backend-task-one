const assert = require('assert');
const request = require('supertest');
const app = require('./server'); 
const mongoose = require('mongoose')


describe('CRUD Operations', function () {
    let personId = 'Adrien Agreste';

    before(function (done) {
        this.timeout(2000); 
        mongoose.connect('mongodb+srv://admin:admin@hng-task-two.jjsfmiz.mongodb.net/hng-task-two?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true, 
            useFindAndModify: false,
        }).then(() => {
            app.listen(3000, function () {
                console.log('HNG API is connected to MongoDB and running on port 3000');
                done(); // Call done when the app is ready to start testing
            });
        }).catch(err => {
            console.error(err);
        });
    });
    

    it('should create a new person', async function () {
        const response = await request(app)
            .post('/api')
            .send({
                name: 'Adrien Agreste',
                age: 14,
                track: 'backend',
            });

        assert.strictEqual(response.status, 200);
        assert.strictEqual(response.body.name, 'Adrien Agreste');
        assert.strictEqual(response.body.age, 14); // Expect the age you sent in the request
        assert.strictEqual(response.body.track, 'backend'); // Expect the track you sent in the request
        assert.ok(response.body.name);
        //personId = response.body.name;
    });

    it('should fetch details of a person by ID', async function () {
        const response = await request(app).get(`/api/${personId}`);
        
        assert.strictEqual(response.status, 200);
        assert.strictEqual(response.body.name, personId);
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
        assert.strictEqual(response.body.message, `Person with name ${personId} has been deleted!`);
    });
});
