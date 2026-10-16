import mongoose from "mongoose";
import Message from "./message.js";
import User from "./user.js";
const conersationSchema = mongoose.Schema({
    members:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:User
        }
    ],
        
    messages
    :[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:Message,
            default:[]
        }
    ]

},{timestamps:true});
const Conversation = mongoose.model("conversation",conersationSchema);
export default Conversation;
