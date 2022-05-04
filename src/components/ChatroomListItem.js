import { Link } from "react-router-dom";

export default function ChatroomListItem({ id, name, description }) {
    return (
        <Link key={id} to={`/chatrooms/${id}`}>
            <div className="ChatroomListItem">
                <div className="chatroom-name-text">{name}</div>
                <div className="description-text">{description}</div>
            </div>
        </Link>
    );
}
