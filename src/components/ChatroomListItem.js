import { Link } from "react-router-dom";

export default function ChatroomListItem({ id, name, description }) {
    return (
        <Link key={id} to={`/chatrooms/${id}`}>
            <div className="ChatroomListItem">
                <div>{name}</div>
                <div>{description}</div>
            </div>
        </Link>
    );
}
