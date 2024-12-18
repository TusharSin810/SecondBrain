import mongoose, { model, Schema } from "mongoose";

mongoose.connect("")

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref:'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref:'User', required: true}
})

export const ContentModel = model("Content", ContentSchema);
export const UserModel = model("User", UserSchema);