const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchem = mongoose.Schema(
    {
        name: { type: String, require: true },
        email: { type: String, require: true, unique: true },
        password: { type: String, require: true },
        pic: {
            type: String,
            default:
                "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },

    },
    {
        timestamps: true,
    }
);

userSchem.methods.matchPassword = async function (enteredPassowrd) {
    return await bcrypt.compare(enteredPassowrd, this.password);
}

userSchem.pre('save', async function (next) {
    if (!this.isModified) {
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchem);

module.exports = User;