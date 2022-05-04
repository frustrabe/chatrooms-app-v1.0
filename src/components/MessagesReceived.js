import BubbleReceived from "./BubbleReceived";
import UserAvatar from "./UserAvatar";

export default function MessagesReceived() {
    return (
        <div className="MessagesReceived">
            <UserAvatar /> <BubbleReceived />
        </div>
    );
}