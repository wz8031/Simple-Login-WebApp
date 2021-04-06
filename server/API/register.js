const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const Route = express.Router();
const bcrypt = require("bcryptjs");


const saltRounds = 10;

Route.post('/', async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    //hashing password
    try {
        const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
        const insertResult = await User.create({
            username: req.body.username,
            password: hashedPwd,
        });
        let userModel = new User(insertResult);
        await userModel.save();
        res.json(userModel);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server error Occured");
    }
})

module.exports = Route;