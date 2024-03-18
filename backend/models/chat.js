import mongoose from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
  chats: [
    {
      role: String,
      content: String,
    },
  ],
});

export default blogSchema;
