import Input from "./Input";
import Send from "./Send";

export default function Toolbox({ chatroomId = null }) {
  return (
    <div className="Toolbox">
      <Input />
      <Send chatroomId={chatroomId} />
    </div>
  );
}
