const { expect } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
let sinon = require('sinon');
let should = require('should');
let postController = require('../controllers/post');

chai.use(chaiHttp);

describe('test test', () => {
    it('should test', (done) => {
        const req = {body: { content: 'abc'} };
        const res = { status: sinon.spy(), json: sinon.spy() };
        postController.post(req, res)
        .then(() => {
            console.log('then');
        })
        .finally(() => {
            console.log('finally');
            expect(res.status.calledWith(200)).equals(true);
            expect(res.status.calledOnce).equals(true);
            done();
        });
    });
})