const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 100,
        validate: {
            validator: function(v) {
                return /^[A-Za-z]+$/.test(v);
            },
            message: props => `${props.value} is not a valid first name! Only alphabetical characters are allowed.`
        }
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 100,
        validate: {
            validator: function(v) {
                return /^[A-Za-z]+$/.test(v);
            },
            message: props => `${props.value} is not a valid last name! Only alphabetical characters are allowed.`
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    }
});

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;