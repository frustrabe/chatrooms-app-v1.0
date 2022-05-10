import Toolbox from "./Toolbox";
import { useParams } from "react-router-dom";
import { getChatroom } from "../data/chatrooms";
import NotFound from "./NotFound";
import BubbleReceived from "./BubbleReceived";
import BubbleSent from "./BubbleSent";
import { useEffect, useState } from "react";
import { auth } from "../firebase";

export default function Chatroom() {
  //We find current opened chatroom id from route parameters
  let params = useParams();
  const { chatroomId } = params;

  const [chatroom, setChatroom] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const chatroom = await getChatroom(chatroomId);
      setChatroom(chatroom);
    };
    fetchData();
  }, [chatroomId]);

  if (!chatroom) return <NotFound />;

  const currentUserId = auth.currentUser.uid;

  const { name, messages } = chatroom;

  console.log(chatroom);

  return (
    <div className="Chatroom">
      <h2> {name} </h2>
      <div className="messages-window">
        {messages &&
          messages.map((message) => {
            if (message.uid === currentUserId) {
              return <BubbleSent text={message.text} name={message.name} />;
            } else {
              return <BubbleReceived text={message.text} name={message.name} />;
            }
          })}
      </div>
      <Toolbox chatroomId={chatroomId} />
    </div>
  );
}
