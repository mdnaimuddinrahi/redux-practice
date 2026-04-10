import ChatItem from "./ChatItem";
import {useGetConversationsQuery} from '../../features/conversations/conversationsApi'
import { useSelector } from "react-redux";
import Error from "../ui/Error";
import Avatar from '../../assets/images/logo192.png'
import moment from "moment";
import getPartnerInfo from '../../utils/getPartnerInfo'
import gravatarUrl from "gravatar-url";

export default function ChatItems() {
    const {user} = useSelector((state) => state.auth) || {};
    const {email, id: user_id} = user || {};
    console.log('user :>> ', user_id);
    const {data, isLoading, isError, error} = useGetConversationsQuery({email, user_id})
    // decide what to renders
    let content = null;
    
    if (isLoading) {
        content = <li className="m-2 text-center">Loading...</li>
    } else if (!isLoading && isError) {
        content = (
            <li className="m-2 text-center">
                <Error message={error?.data} /> 
            </li>)
    } else if (!isLoading && !isError && data.conversations.length === 0) {
        content = (
            <li className="m-2 text-center">No Conversatins Found.</li>)
    } else {
        
        content = (
            data.conversations.map((chat, index) => {
                const {email} = user || {}
                const {name, email: partnerEmail} = getPartnerInfo(chat.users, email)
                return (<li key={index}>
                    <ChatItem
                        avatar={gravatarUrl(partnerEmail, {
                            size: 80,
                        })}
                        name={name}
                        lastMessage={chat.message}
                        lastTime={moment(chat.timestamp).fromNow()}
                        chatId={chat.id}
                    />
                </li>)
            })
        )
    }
    // console.log('conversations :>> ', conversations);
    return (
        <ul>
            {content}
        </ul>
    );
}
