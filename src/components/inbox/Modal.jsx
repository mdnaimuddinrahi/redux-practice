import { useEffect, useState } from "react";
import isValidEmail from "../../utils/isValidEmail";
import { useGetUsersQuery } from "../../features/user/userApi";
import Error from "../ui/Error";
import { useDispatch, useSelector } from "react-redux";
import { conversationsApi, useAddConversationMutation, useEditConversationMutation } from "../../features/conversations/conversationsApi";

export default function Modal({ open, control }) {
    const [to, setTo] = useState("");
    const [message, setMessage] = useState("");
    const [debouncedTo, setDebouncedTo] = useState("");
    const [conversation, setConversation] = useState(undefined);

    const dispatch = useDispatch();
    const { email: myEmail, id: senderId } = useSelector((state) => state.auth.user) || {};

    const [editConversation, {isSuccess: isEditConversationSuccess}] = useEditConversationMutation();
    const [addConversation, {isSuccess: isAddConversationSuccess}] = useAddConversationMutation();

    // ✅ Debounce input (IMPORTANT FIX)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedTo(to);
        }, 900);

        return () => clearTimeout(timeout);
    }, [to]);

    // ✅ Validate debounced value
    const isValid = isValidEmail(debouncedTo);

    // ✅ Fetch users with debounced value
    const {
        data: users,
        isLoading,
        isError,
        error,
    } = useGetUsersQuery(debouncedTo, {
        skip: !isValid,
    });

    // ✅ Trigger conversation when valid user found
    useEffect(() => {
        if (
            isValid &&
            users?.data?.length > 0 &&
            users.data[0]?.email === debouncedTo &&
            !conversation // ✅ prevent repeat call
        ) {
            dispatch(
                conversationsApi.endpoints.getConversation.initiate({
                    userEmail: myEmail,
                    participantEmail: debouncedTo,
                })
            )
            .unwrap()
            .then((data) => {
                setConversation(data?.conversations?.[0] || null);
            })
            .catch(console.error);
        }
    }, [users, debouncedTo, isValid, dispatch, myEmail, conversation]);

    // ✅ Handle input change
    const handleChange = (e) => {
        setTo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const participantId = users?.data[0]?.id;
        // console.log('participantId :>> ', participantId);
        // console.log('conversation found :>> ', conversation);
        // If conversation already exists, we can edit it to add the new message
        const data = {
            user_id: participantId,
            senderId,
            message,
        }
        if (conversation.id) {
            // console.log('found conversatin');
            editConversation({
                conversationId: conversation.id,
                data})
        } else {
            addConversation(data);
        }
    };

    useEffect(() => {
        if(isEditConversationSuccess) {
            // Optionally, you can show a success message here
            // Then close the modal
            control();
        }
    }, [isEditConversationSuccess]);

    return (
        open && (
            <div>
                {/* Overlay */}
                <div
                    onClick={control}
                    className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
                ></div>

                {/* Modal */}
                <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Send message
                    </h2>

                    <form 
                        className="mt-8 space-y-6"
                        onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            {/* Email Input */}
                            <div>
                                <label htmlFor="to" className="sr-only">
                                    To
                                </label>
                                <input
                                    id="to"
                                    name="to"
                                    type="email"
                                    required
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                    placeholder="Send to"
                                    value={to}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Message Input */}
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) =>
                                        setMessage(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                                disabled={conversation === undefined} // Disable until conversation is set
                            >
                                Send Message
                            </button>
                        </div>

                        {/* ❗ Error Handling */}
                        {!isLoading &&
                            isValid &&
                            users?.data?.length === 0 && (
                                <Error message="User not found." />
                            )}

                        {isError && (
                            <Error message={error?.data?.message || "Error"} />
                        )}
                    </form>
                </div>
            </div>
        )
    );
}