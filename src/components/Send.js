import { saveMessage } from "../data/chatrooms";

export default function Send({ chatroomId }) {
  return (
    <div className="Send" onClick={() => saveMessage("aaa", chatroomId)}>
      Send
    </div>
  );
}
