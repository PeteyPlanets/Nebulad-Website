import { Schema, model } from "mongoose";
import validator from "validator";

const { isEmail } = validator;

const emailSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please provide a valid email"],
  },
  name: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[a-zA-Z\u00C0-\u024F\s]+$/g.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid name. Only letters, spaces, and accented characters are allowed.`,
    },
  },
  phoneNumber: {
    type: String,
    validate: {
      validator: function (v) {
        return /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    required: false,
  },
  unsubscribed: {
    type: Boolean,
    default: false,
  },
  timestamp: Number,
  formattedDate: String,
});

const Email = model("Email", emailSchema);

export default Email;
