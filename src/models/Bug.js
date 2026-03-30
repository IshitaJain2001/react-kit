import mongoose from "mongoose";

const bugSchema = new mongoose.Schema({
  title: String,
  code: String,
  solution: String,
  hint: String,
});

export default mongoose.models.Bug ||
  mongoose.model("Bug", bugSchema);