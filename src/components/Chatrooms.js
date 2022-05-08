import ChatroomListItem from "./ChatroomListItem";
import { getChatrooms } from "../data/chatrooms";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Chatrooms() {
  const [chatrooms, setChatrooms] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const chatrooms = await getChatrooms();
      setChatrooms(chatrooms);
    };

    fetchData();
  }, []);

  if (!chatrooms) {
    return <>Loading</>;
  }

  return (
    <div className="Chatrooms">
      {chatrooms.map((chatroom) => {
        return (
          <ChatroomListItem
            key={chatroom.id}
            id={chatroom.id}
            name={chatroom.name}
            description={chatroom.description}
          />
        );
      })}
      <Outlet />
    </div>
  );
}
