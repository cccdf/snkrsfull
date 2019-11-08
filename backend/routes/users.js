var express = require("express");
var Users = require("../models/users");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/cool", function(req, res, next) {
  res.send("you are so cool");
});

router.post("/login", (req, res) => {
  Users.findOne({ email: req.body.email }, (err, docs) => {
    if (!err) {
      if (docs === null) {
        res.status(404).send(); //email doesnt register
      } else {
        const passwordDb = docs.password;
        const passwordInput = req.body.password;
        if (passwordDb === passwordInput) {
          res.status(200).send();
        } else {
          res.status(204).send();
        }
      }
    } else {
      throw err;
    }
  });
});

router.post("/register", (request, response) => {
  const email = request.body.email;
  const name = request.body.name;
  const password = request.body.password;
  var newuser = new Users({ email: email, name: name, password: password });
  newuser.save(function(err) {
    if (err) return handleError(err);
    // saved!
  });
  response.send(request.body.email + request.body.name + request.body.password);

  // userInfo.save();
  // const post = request.body;
  // post.id = db.posts.length + 1;
});

module.exports = router;
