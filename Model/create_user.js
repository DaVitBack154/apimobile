const mongoose = require('mongoose');
const CreateUserSchema = mongoose.Schema(
  {
    gent_name: {
      type: String,
    },
    name: String,
    surname: String,
    id_card: {
      type: String,
      unique: true,
    },
    email: String,
    phone: String,
    pin: {
      type: String,
    },
    type_customer: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('create_user', CreateUserSchema);