const server = require('./api/server.js');

var mongoose = require('mongoose');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  // we're connected!
  console.log("We are connected!")
});


// define our schema
const userSchema = new mongoose.Schema({
    username: String
});

// compiling our schema into a Model.

// A model is a class with which we construct documents with properties and behaviors as declared in our schema.

userSchema.methods.speak = function () {
    var greeting = this.username
    ? "My name is " + this.username
    : "I don't have a name";
    console.log(greeting);
}

var Spartan = mongoose.model('users', userSchema);
let linda = new Spartan({username: "Linda"})

let jorge = new Spartan({username: "Jorge"})
// jorge.speak()

// We have talking Spartans! But we still haven't saved anything to MongoDB. 
// Each document can be saved to the database by calling its save method. 
// The first argument to the callback will be an error if any occurred.
// linda.save(function (err, linda) {
//     if (err) return console.error(err);
//     // jorge.speak();
//   });

Spartan.find((err, users) => {
    if (err) return console.log(err)
    console.log(users)
})


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`\n** Running on port: ${PORT} **\n`));
