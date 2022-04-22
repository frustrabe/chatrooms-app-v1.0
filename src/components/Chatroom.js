import Messages from "./Messages";
import Toolbox from "./Toolbox";
import { useParams } from "react-router-dom";
import { getChatrooms } from "../data/chatrooms";
import NotFound from "./NotFound";

export default function Chatroom({ id }) {
    //We find current opened chatroom id from route parameters
    let params = useParams();
    const { chatroomId } = params

    //We filter the chatroom data by current chatroom id
    const chatrooms = getChatrooms()
    //We are comparing two different types here. Thats why we use parseInt -
    // to change the type of params.chatroomId from a string to a number (int).
    const chatroom = chatrooms.find(chatroom => chatroom.id === parseInt(chatroomId))

    if (!chatroom) return <NotFound />

    const { name } = chatroom

    return (
        <div className="Chatroom">
            <h2> {name} </h2>
            <Messages />
            <Toolbox />
        </div>
    );
}