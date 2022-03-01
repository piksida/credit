const mongoose  = require('mongoose');

const paymentSchema = mongoose.Schema({
  paymentData: { type: Object, required:  true },

});

module.exports = mongoose.model("Payment", paymentSchema);
