import app from '../src/index'
import * as supertest from 'supertest'

describe('app',()=>{

    let request:any;
    beforeEach(()=>{
        request=supertest.agent(app);
    });
    it("Should Return a Succefull status code for GET /",done=>{

        request.get("/api/features").expect(200,done);
    })


});