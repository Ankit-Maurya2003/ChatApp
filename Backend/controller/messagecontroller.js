import Conversation from "../models/conversation.js";
import Message from "../models/message.js";
import { getReceiver } from "../socketIO/server.js";
import { io } from "../socketIO/server.js";
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id; // current logged in user
    let conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] }
     
    });
    if (!conversation) {
      conversation = await Conversation.create({
        members: [senderId, receiverId],
        messages: [],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

      conversation.messages.push(newMessage._id);
   
    // await conversation.save()
    // await newMessage.save();
    await Promise.all([conversation.save(), newMessage.save()]); // run parallel
    const receiverSocketId = getReceiver(receiverId)
    if(receiverSocketId){
      io.to(receiverSocketId).emit("newMessage",newMessage)
    } 
    res.status(201).json({
     
      newMessage,
    });
  } catch (error) {
    console.log("Error in sendMessage", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getMessage = async (req, res) => {
  try {
    const { id: ChatUser } = req.params;
    const senderId = req.user._id;
    let conversation = await Conversation.findOne({
      members: { $all: [senderId, ChatUser] },
     
    }).populate("messages");
       if (!conversation) {
      return res.status(200).json([]);
    }
    const message = conversation.messages;
    res.status(201).json(message);
  } catch (error) {
    console.log("Error in getMessage", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
