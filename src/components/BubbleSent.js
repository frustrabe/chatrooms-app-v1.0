import MeAvatar from "./MeAvatar";

export default function BubbleSent({ text }) {
  return (
    <div className="BubbleSent">
      <MeAvatar />
      <div className="sent-message">
        <div className="sent-message-text">{text}</div>
      </div>
    </div>
  );
}
