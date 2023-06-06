// //TTD Test for HTTP POST
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const async = require('async');

// var assert = chai.assert;
// var expect = chai.expect;
// var should = chai.should();

// var http = require('http');
// chai.use(chaiHttp);


// describe('Create a new ForumPost', function () {

//     var requestResult;
//     var response;
//     var newForumPost = {
//         title: 'Textbook inquiry',
//         author: 'edoe',
//         description: 'Are there any recommendations for which supplementary textbook to read for clinicals?',
//         isAnonymous: false,
//         isEdited: false
//     };

//     before(function (done) {
//         chai.request("http://localhost:8080")
//             .post("/forumposts")
//             .send(newForumPost)
//             .end(function (err, res) {
//                 response = res;
//                 requestResult = res.body;
//                 expect(err).to.be.null;
//                 expect(res).to.have.status(201); // Assuming 201 is the expected status code for successful creation
//                 done();
//             });
//     });

//     after(function (done)  {
//         chai.request("http://localhost:8080")
//             .delete("/forumposts/" + requestResult._id)
//             .end(function (err, res) {
//                 var responseOfDelete = res.body.status;
//                 console.log("deleted response");
//                 console.log(responseOfDelete);
//                 expect(err).to.be.null;
//                 expect(responseOfDelete).to.equal("deleted");
//                 done();
//             });
//     });

//     it('Should return the created ForumPost object', function () {
//         expect(response).to.have.status(201);
//         expect(response.headers['content-type']).to.include('application/json');

//         expect(requestResult).to.have.property('_id').that.is.a('string');
//         expect(requestResult).to.have.property('id').that.is.a('string');
//         expect(requestResult).to.have.property('accountId').that.is.a('string');
//         expect(requestResult).to.have.property('title').that.is.a('string');
//         expect(requestResult).to.have.property('author').that.is.a('string');
//         expect(requestResult).to.have.property('isAnonymous').that.is.a('boolean');
//         expect(requestResult).to.have.property('isEdited').that.is.a('boolean');
//         expect(requestResult).to.have.property('description').that.is.a('string');
//         expect(requestResult).to.have.property('dateTime').that.is.a('string');
//         expect(requestResult).to.have.property('likes').that.is.a('number');
//         expect(requestResult).to.have.property('dislikes').that.is.a('number');
//         expect(requestResult).to.have.property('comments').that.is.an('array');
//     });
// });