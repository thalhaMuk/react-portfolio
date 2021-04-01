// This will outline the structure of the tinder cards
import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  name: String,
  imgurl: String,
});

export default mongoose.model("cards", cardSchema);
