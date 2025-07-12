// ChatWrapper.js
import { useParams } from "react-router-dom";
import ChatUI from "./ChatUI";

function ChatWrapper() {
  const { id } = useParams(); // This is recipientId
  return <ChatUI recipientId={id} />;
}

export default ChatWrapper;
