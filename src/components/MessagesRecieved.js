import BubbleRecieved from "./BubbleRecieved";
import UserAvatar from "./UserAvatar";

export default function MessagesRecieved() {
    return (
        <div className="MessagesRecieved">
            <UserAvatar />
            <BubbleRecieved />
        </div>
    );
}