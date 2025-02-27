import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});
const UserModel= mongoose.model("User", userSchema);
export default UserModel;