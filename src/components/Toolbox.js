import { useState } from "react";
import { saveMessage } from "../data/chatrooms";

export default function Toolbox({ chatroomId = null }) {
  const [inputText, setInputText] = useState("");

  return (
    <div className="Toolbox">
      <div className="Input">
        <input
          placeholder="Start typing here..."
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <div className="Send" onClick={() => saveMessage(inputText, chatroomId)}>
        Send
      </div>
    </div>
  );
}
