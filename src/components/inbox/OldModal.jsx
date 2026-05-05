import { useMemo, useState } from "react";
import isValidEmail from "../../utils/isValidEmail";
import {useGetUsersQuery} from '../../features/user/userApi'
import Error from "../ui/Error";
import { useDispatch, useSelector } from "react-redux";
import { conversationsApi } from "../../features/conversations/conversationsApi";

export default function Modal({ open, control }) {
    const [to, setTo] = useState('');
    const [message, setMessage] = useState('');
    const isValid = isValidEmail(to);
    const dispatch = useDispatch();
    const { email: myEmail } = useSelector(state => state.auth.user) || {};
    console.log('myEmail :>> ', myEmail);
    // console.log('isValid  :>> ', isValid);
    
    const {
        data: users,
        isLoading,
        isError,
        error
    } = useGetUsersQuery(to, {
        skip: !isValid
    });

    // const showUsers = to && isValid && users?.data && users?.data[0]?.email === to;

    const doSearch = (value) => {
        console.log('users.data?.[0]?.email :>> ', users.data?.[0]?.email ?? 0);
        console.log('value :>> ', value);
        console.log('to :>> ', to);

        if(isValidEmail(value) && users.data?.[0]?.email === value) {
            // dispatch(conversationApi.endpoints.getUsers.initiate(value));
            dispatch(conversationsApi.
                                endpoints.
                                getConversation.
                                initiate({
                                    userEmail: myEmail, 
                                    participantEmail: value
                                }));
            // console.info("Valid email:", value);
        }
    }

    // useEffect(() => {
    //     if(users?.data?.length > 0) {
    // }, [users]);

    // Debounce function
    const debounceHandler = (fn, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                fn(...args);
            }, delay);
        };
    };
    
    // Debounced search (NO doSearch used)
    const debouncedSearch = useMemo(() => {
        return debounceHandler(doSearch, 900);
    }, []);

    // Input change handler
    const handleChange = (e) => {
        const value = e.target.value;
        setTo(value);          // instant UI update
        // debouncedSearch(value); // debounced logic
    };
    
    return (
        open && (
            <div>
                <div
                    onClick={control}
                    className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
                ></div>
                <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Send message
                    </h2>
                    <form className="mt-8 space-y-6">
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="to" className="sr-only">
                                    To
                                </label>
                                <input
                                    id="to"
                                    name="to"
                                    type="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                    placeholder="Send to"
                                    value={to}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    type="text"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                            >
                                Send Message
                            </button>
                        </div>

                        {users?.data?.length === 0 && <Error message="User not found." />}
                    </form>
                </div>
            </div>
        )
    );
}
