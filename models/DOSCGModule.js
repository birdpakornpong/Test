var mongoose = require('mongoose');
var Schema = mongoose.Schema({
    name : {type : String,required: true}
});

module.exports = mongoose.model('DOSCG',Schema);