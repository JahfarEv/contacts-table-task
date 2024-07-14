const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique : [true, "Email already registred"]
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.pre(
      "save",
      async function (next) {
        const user = this;
        if (!user.isModified("password")) return next();
        try {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          user.password = hashedPassword;
          next();
        } catch (error) {
          console.error("Error hashing password:", error);
          next(error);
        }
      })
module.exports = mongoose.model("User", userSchema);