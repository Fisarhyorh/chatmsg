import { useEffect, useState } from "react";
import { addDoc, collection,serverTimestamp,onSnapshot,query,where, doc, orderBy } from "firebase/firestore";
import { async } from "@firebase/util";
import { auth, db } from "../firebase-config";
import "../styles/Chat.css";

export const Chat = (props) => {

    const {room} = props


const [newMessage, setNewMessage] = useState("")
const [messages, setMessages] = useState([])

const messageRef = collection(db, 'messages')


useEffect(() => {
    const queryMessages = query(messageRef,where("room", "==", room),orderBy("createdAt"));
   const unsuscribe= onSnapshot(queryMessages, (snapshot) => {
        let messages = [];
        snapshot.forEach((doc) => {
          messages.push({...doc.data(), id: doc.id});
        });
       setMessages(messages)
    });
    return () => unsuscribe()
},[])


    const handleSubmit = async (e) =>{
      e.preventDefault();
      if(newMessage === "") return;

       await addDoc(messageRef, {
        text: newMessage,
        createdAt: serverTimestamp(),
        user: auth.currentUser.displayName,
        img: auth.currentUser.photoURL,
        room,
       })
       setNewMessage("");

    }
    return (
    <div className="chat-app">
        <div className="container">
            
        <div className="header">
            <h1>Welcome to: {room}</h1>
        </div>
       
    <div className="messages">
            {messages.map((message) => <div>
                <span className="user"> <img src={message.img} alt="" /> <span className="usr-name">{message.user}</span> <span  className="usr-msg">{message.text}</span> </span> 
               </div> 
                     )}
    </div>
        <form onSubmit={handleSubmit} className="new-message-form">
            <div className="form-msg">
                <input className="new-message-input" placeholder="Type your Message Here...."
            onChange={(e) => setNewMessage(e.target.value)} value={newMessage}
            />
            <button className="send-button" type="submit">Send</button>
            </div>
        </form>
    </div> 
        </div>
    
    )
}