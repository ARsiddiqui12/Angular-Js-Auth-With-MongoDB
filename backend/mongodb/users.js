var mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Users = new Schema({
    username: {
       type: String
    },
    email: {
       type: String
    },
    password: {
       type: String
    },
    status: {
       type: Number
    }
 }, {
    collection: 'users'
 })
 
 module.exports = mongoose.model('Users', Users)