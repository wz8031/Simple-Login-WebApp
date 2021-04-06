const express = require('express')
const mongoose = require('mongoose');
const Route = express.Router();
// const { check, validationResult } = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

Route.post('/', async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    try {
        const user = await User.findOne({ username: req.body.username });
        console.log(user);
        if (user) {
          const cmp = await bcrypt.compare(req.body.password, user.password);
          if (cmp) {
            //   ..... further code to maintain authentication like jwt or sessions
            res.send("Auth Successful");
          } else {
            res.send("Wrong username or password.");
          }
        } else {
          res.send("Wrong username or password.");
        }
      } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server error Occured");
      }
})

module.exports=Route;