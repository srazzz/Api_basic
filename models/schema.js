// each row = document ..all documents are under collection
const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
   name: {
    type : String,
    required : true
   } ,

   college : {
    type : String,
    required : true
   },

   is_working :{
    type :  Boolean,
    required :true,
    default:false
   }
})

module.exports = mongoose.model('Data',dataSchema)