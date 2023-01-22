import mongoose from "mongoose";

// creating model for post
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    location: String,
    contact: String,
    image: String,
});

// creating schema to model
const PostMessage = mongoose.model('PostMessage', postSchema);
// exporting mongoose model
export default PostMessage;