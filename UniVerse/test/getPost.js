//Get (Get List of Posts)
const chai = require('chai');
const chaiHttp = require('chai-http');
const async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test posts result', function () {
	this.timeout(15000);

	var requestResult;
	var response;
	var postId = "2edb8e72-8f55-46ec-a937-57fdb4759f9d";
    before(function (done) {

        chai.request("http://localhost:8080")
			.get("/post/" + postId)
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                console.log(res.request.url);
				done();
			});
	});
	
	it('Should return an object with the expected properties', function(){
		expect(response).to.have.status(200);
		expect(response.headers['content-type']).to.have.string('application/json; charset=utf-8');
		expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
					expect(body[i]).to.have.property('_id').that.is.a('string');
                    expect(body[i]).to.have.property('id').that.is.a('string');
                    expect(body[i]).to.have.property('accountId').that.is.a('string');
                    expect(body[i]).to.have.property('title').that.is.a('string');
					expect(body[i]).to.have.property('author').that.is.a('string');
                    expect(body[i]).to.have.property('isAnonymous').that.is.a('Boolean');
					expect(body[i]).to.have.property('isEdited').that.is.a('Boolean');
                    expect(body[i]).to.have.property('description').that.is.a('string');
                    expect(body[i]).to.have.property('dateTime').that.is.a('string');
                    expect(body[i]).to.have.property('likes').that.is.a('Number');
                    expect(body[i]).to.have.property('dislikes').that.is.a('Number');
                    expect(body[i]).to.have.property('comments').that.is.a('Array');
				}
				return true;
			});
	});	
	
});