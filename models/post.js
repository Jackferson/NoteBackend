import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: { type: String, default: "none" },
  content: { type: String, required: true },
  group: { type: String, default: "other" },
  email: { type: String, required: true},
});

export default mongoose.model("Post", schema);
