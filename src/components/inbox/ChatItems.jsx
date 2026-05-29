import ChatItem from "./ChatItem";
import {conversationsApi, useGetConversationsQuery} from '../../features/conversations/conversationsApi'
import { useDispatch, useSelector } from "react-redux";
import Error from "../ui/Error";
import Avatar from '../../assets/images/logo192.png'
import moment from "moment";
import getPartnerInfo from '../../utils/getPartnerInfo'
import gravatarUrl from "gravatar-url";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

export default function ChatItems() {
    const {user} = useSelector((state) => state.auth) || {};
    const {email, id: user_id} = user || {};
    // console.log('user :>> ', user_id);
    const {data, isLoading, isError, error} = useGetConversationsQuery({email, user_id})
    const { conversations, totalCount} = data || {};
    // console.log('conversations, totalCount :>> ', conversations, totalCount);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const dispatch = useDispatch();

    const fetchMore = () => {
        setPage((prevPage) => prevPage + 1);
        // fetchMoreConversations({email, user_id, page: page + 1, limit: 5})
    }

    useEffect(() => {
        // console.log('page :>> ', page);
        if (page > 1) {
            // need to fetch more conversations when page changes
            dispatch(conversationsApi.endpoints.getMoreConversations.initiate({email, user_id, page, limit: 10}))
        }
    }, [page, email, dispatch, user_id])

    useEffect(() => {
        // if (conversations?.length >= totalCount) {
        //     setHasMore(false);
        // }
        if(totalCount> 0) {
            const more = Math.ceil(totalCount / 10) > page; 
            setHasMore(more);
        }
    }, [page, totalCount])
    
    // decide what to renders
    let content = null;
    
    if (isLoading) {
        content = <li className="m-2 text-center">Loading...</li>
    } else if (!isLoading && isError) {
        content = (
            <li className="m-2 text-center">
                <Error message={error?.data} /> 
            </li>)
    } else if (!isLoading && !isError && data?.conversations?.length === 0) {
        content = (
            <li className="m-2 text-center">No Conversations Found.</li>)
    } else {
        const height = window.innerHeight - 220;
        const conversationCount = conversations?.length || 0;
        // console.log('height :>> ', height);
        content = <InfiniteScroll
                dataLength={conversationCount}
                hasMore={hasMore}
                next={fetchMore}
                // next={fetchMoreConversations}
                loader={<li className="m-2 text-center">Loading...</li>}
                endMessage={<li className="m-2 text-center">No more conversations.</li>}
                height={height}
            >{
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
        }</InfiniteScroll>
    }
    // console.log('conversations :>> ', conversations);
    return (
        <ul>
            {content}
        </ul>
    );
}
