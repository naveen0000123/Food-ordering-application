var mongoose = require('mongoose')
var orderSchema = mongoose.Schema({
    whichuser: {
        type: String,
    },
    pizza: {
        type  :Array,
        default:[]
    },
    total:{
        type:Number,
    },
    address:{
        type:String,
    },
    createdAt: {type: Date, default: Date.now}
})
module.exports = mongoose.model('order',orderSchema)

