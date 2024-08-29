import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Your Email is required"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "Your username is required"]
    },
    password: {
        type: String,
        required: [true, "Your password is required"]
    },
    createdAt: {
        type: Date,
        default: () => new Date() // Corrected to use ES module syntax
    }
});

// Hash the password before saving the user
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

const User = mongoose.model("User", userSchema);

export default User; // Use export default for ES module syntax
