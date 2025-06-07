import mongoose , {Schema} from "mongoose";
import bcrypt from "bcrypt"


const options = {discriminatorKey:"role",timestamps:true}
const userSchema = new Schema({
    email: {
        type: String,
        required :[true,"Email is required"],
        unique: true,
        lowercase: true,
        trim: true,

    },
    password: {
        type: String,
        required:[true,"Password is required"],
        minlength: 6,
        maxlength:[20,"Max length can not exceed 20 characters"]
    }
}, options);

// saved into database in hashed form (for password only) 
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")){
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt)
    } catch (error) {
        next(err);
        console.log("Error while hashing password.")
    }
    
})

// compare with stored hash password
userSchema.methods.comparePassword = async (candidatePassword) => {
    return bcrypt.compare(candidatePassword,this.password)
}
bcrypt.compare(this.password, userSchema.password)

const userModel = mongoose.model("user", userSchema);

export default userModel;