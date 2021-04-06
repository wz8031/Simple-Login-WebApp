const mongoose = require('mongoose');

const user = mongoose.Schema({
    username:{
        type: String
    },
    password:{
        type: String
    }
});

module.exports = User = mongoose.model('user', user);