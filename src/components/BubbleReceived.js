import UserAvatar from "./UserAvatar";

export default function BubbleReceived({ text }) {
  return (
    <div className="BubbleReceived">
      <UserAvatar />
      <div className="received-message">
        <div className="received-message-text">{text}</div>
      </div>
    </div>
  );
}
