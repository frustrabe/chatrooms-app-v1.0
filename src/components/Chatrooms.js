import ChatroomListItem from "./ChatroomListItem";
import { getChatrooms } from "../data/chatrooms";
import { Outlet } from "react-router-dom";

export default function Chatrooms() {
    const chatrooms = getChatrooms()

    return (
        <div className="Chatrooms">
            {
                chatrooms.map((chatroom) => {
                    return <ChatroomListItem key={chatroom.id} id={chatroom.id} name={chatroom.name} description={chatroom.description} />
                })
            }
            <Outlet />
        </div>
    );
}