//TTD Test for HTTP POST
const chai = require('chai');
const chaiHttp = require('chai-http');
const async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test forumposts CRUD operations', function () {
	this.timeout(15000);

	var createdPostId = "";
	var createdPostData = {
		id: "",
		accountId: "12345",
		title: "Test Post",
		author: "John Doe",
		isAnonymous: false,
		isEdited: false,
		description: "This is a test post.",
		dateTime: "2023-06-05T12:00:00Z",
		likes: 0,
		dislikes: 0,
		comments: []
	};

	// Test creating a new post
	it('Should create a new post', function (done) {
		chai.request("http://localhost:8080")
			.post("/forumposts/")
			.send(createdPostData)
			.end(function (err, res) {
				expect(err).to.be.null;
				expect(res.body).to.have.property('id').that.is.a('string');
				createdPostId = req.body.id;
				createdPostData.id = createdPostId;
				done();
			});
	});
	

	// Test getting the created post
	it('Should get the created post', function (done) {
		chai.request("http://localhost:8080")
			.get("/forumpost/" + createdPostId)
			.end(function (err, res) {
				expect(err).to.be.null;
				expect(res.body).to.deep.equal(createdPostData);
				done();
			});
	});

	// Test deleting the created post
	it('Should delete the created post', function (done) {
		chai.request("http://localhost:8080")
			.delete("/forumpost/" + createdPostId)
			.end(function (err, res) {
				expect(err).to.be.null;
				done();
			});
	});
});
