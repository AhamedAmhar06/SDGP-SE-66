import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    undergradid: {
      type: String,
      required: true,
    },
    fName: {   //fname
      type: String,
      required: true,
    },
    lName: {
      type: String,
      required: true,
    },
    university: {
      type : String,  //university
    },
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      type: Array,
      default: [],
    },
    pin:{
      type:Array,
      default:[],
    }
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
