const PaymentModel = require('../dataBase/mongo-models/payment');

class PaymentService {
  getAllPayments() {
    return PaymentModel.find({});
  }

  cratePayment(objectToCreate) {
    return new PaymentModel(objectToCreate).save()
  }

  deleteById(id) {
    return PaymentModel.findByIdAndDelete(id)
  }
}

module.exports = new PaymentService()