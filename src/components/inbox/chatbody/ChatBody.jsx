// import Blank from "./Blank";
import { useParams } from "react-router-dom";
import { useGetMessagesQuery } from "../../../features/messages/messagesApi";
import ChatHead from "./ChatHead";
import Messages from "./Messages";
import Options from "./Options";
import Error from "../../ui/Error";

export default function ChatBody() {
    const {id} = useParams()
    const {data: messages, isLoading, isError} = useGetMessagesQuery(id)

    let content = null;
        
    if (isLoading) {
        content = <h1 className="m-2 text-center">Loading...</h1>
    } else if (!isLoading && isError) {
        content = (
            <h1 className="m-2 text-center">
                <Error message={error?.data} /> 
            </h1>)
    } else if (!isLoading && !isError && messages.length === 0) {
        content = (
            <h1 className="m-2 text-center">No Conversatins Found.</h1>)
    } else {
        content = (
            <div className="w-full grid conversation-row-grid">
                <ChatHead
                    avatar="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
                    name="Akash Ahmed"
                    message={messages[0]}
                />
                <Messages messages={messages}/>
                <Options />
                {/* <Blank /> */}
            </div>
        )
    }

    return (
        <div className="w-full lg:col-span-2 lg:block">
            {content}
        </div>
    );
}
