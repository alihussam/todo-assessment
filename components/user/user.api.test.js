//This file will be used for in-process API testing.
const superagent = require('superagent');
superagent
    .post('/users/signIn')
    .send({ "email": "hussam@yopmail.com", "password": "123456" })
    .set('accept', 'json')
    .end((err, res) => {
        if (err) {
            console.log(res)
        }
        else {
            console.log(res);
        }
    });