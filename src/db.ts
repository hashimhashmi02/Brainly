import mongoose, { model , Schema} from "mongoose";
import { MONGO_URL } from "./config";

mongoose.connect("mongodb+srv://Hashim:CzYMftAtFIwzAgG3@cluster0.1owig.mongodb.net/Brainly")
// scehma
const UserSchema = new Schema({
    username: {type:String, unique :true},
     password : String,

},)
 
 export  const UserModel =  model ("User", UserSchema);

const ContentSchema = new Schema({
    title:String,
    link:String,
    tags:[{type:mongoose.Types.ObjectId,ref:'Tag'}],
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref:'User',required:true}
})

export const ContentModel = model("Content",ContentSchema);


const ShareSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  shareLink: { type: String, unique: true },
  content: [{ type: Schema.Types.ObjectId, ref: "Content" }],
});

export const ShareModel = model("Share", ShareSchema);



const LinkSchema = new Schema({

    hash:String,
    userId: {type: mongoose.Types.ObjectId, ref:'User',required:true,unique:true}
})

export const LinkModel = model("Links",LinkSchema);

export async function connectDB() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
}






