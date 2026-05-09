import { useSelector } from "react-redux";
import { useAddConversationMutation, useEditConversationMutation } from "../../../features/conversations/conversationsApi";
import { useState } from "react";

export default function Options({participant}) {
    // console.log('participant :>> ', participant);
    const [message, setMessage] = useState("");
    const [editConversation, {isSuccess: isAddConversationSuccess}] = useEditConversationMutation();
    const { email: senderEmail, name: senderName, id: senderId } = useSelector((state) => state.auth.user) || {};

// {
//     "id": 78,
//     "conversationId": 28,
//     "sender": {
//         "id": 1,
//         "name": "Mohammad Naim Uddin Rahi",
//         "email": "mdnaimuddinrahi@gmail.com"
//     },
//     "receiver": {
//         "id": 6,
//         "name": "Mango Andrew",
//         "email": "mango.andrew@gmail.com"
//     },
//     "message": "thi sdsdf dddf",
//     "timestamp": 1777520374000
// }
    const handleSubmit = (e) => {
        e.preventDefault();
         const data = {
            user_id: participant.receiver.id,
            senderId,
            message,
            senderEmail: participant.sender.email,
            receiverEmail: participant.receiver.email,
            timestamp: new Date().getTime(),
            users: [
                {
                    email: senderEmail,
                    id: senderId,
                    name: senderName
                },
                {
                    email: participant.receiver.email,
                    id: participant.receiver.id,
                    name: participant.receiver.name
                }
            ]
        }
        editConversation({conversationId: participant.conversationId, data})
    }

    return (
        <form  onSubmit={handleSubmit} className="flex items-center justify-between w-full p-3 border-t border-gray-300">
            <input
                type="text"
                placeholder="Message"
                className="block w-full py-2 pl-4 mx-3 bg-gray-100 focus:ring focus:ring-violet-500 rounded-full outline-none focus:text-gray-700"
                name="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">
                <svg
                    className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
            </button>
        </form>
    );
}
