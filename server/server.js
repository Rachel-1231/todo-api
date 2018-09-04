var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
    console.log(req.body);
});
app.listen(3000,() => {
    console.log('Started on port 3000');
});

// var newTodo = new Todo({
//     text: 'Cook Lunch for party'
// });

// newTodo.save().then((doc)=>{
//     console.log('save todo', doc);
// }, (e) => {
//     console.log('Unable to save todo');
// });


// var user = new User({
//     email: 'tomhanks@forrestgump.com'
// });

// user.save().then((doc) => {
//     console.log('User Saved',doc);
// }, (e) => {
//     console.log('unable to save user', e)
// });