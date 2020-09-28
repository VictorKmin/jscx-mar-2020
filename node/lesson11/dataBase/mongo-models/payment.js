const {Schema, model} = require('mongoose');

const logsSubScheme = {
  username: {
    type: String,
    ref: 'users',
    default: "dimas_karabas"
  },
  email: {
    type: String
  }
}

const PaymentSchema = new Schema({
  currency: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true,
    default: 777
  },
  logs: [logsSubScheme]
});

module.exports = model('peymants', PaymentSchema);