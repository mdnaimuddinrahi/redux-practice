import { applyMiddleware } from '@reduxjs/toolkit';
import fetch from 'node-fetch';
import thunkMiddleware from 'redux-thunk';

// state declaration
const initialState = {
    loading: false,
    posts: [],
    error: ''
}

//action type
const REQUESTED = "posts/requested";
const SUCCEEDED = "posts/succeeded";
const FAILED = "posts/failed";

//action creator
const fetchPostsRequested = () => {
    return {
        type: REQUESTED
    }
}

const fetchPostsSucceeded = (posts) => {
    return {
        type: SUCCEEDED,
        payload: posts
    }
}

const fetchPostsFailed = (error) => {
    return {
        type: FAILED,
        payload: error
    }
}

// reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUESTED:
            return {
                ...state,
                loading: true,
                error: '',
            }
        case SUCCEEDED:
            return {
                ...state,
                loading: false,
                posts: action.payload
            }
        case FAILED:
            return {
                ...state,
                loading: false,
                posts: [],
                error: action.payload.message
            }
        default:
            break;
    }
}

// thunk function
const fetchPosts = () => {
    return async (dispatch) => {
        dispatch(fetchPostsRequested());
        
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            const posts = await response.json()
            dispatch(fetchPostsSucceeded(posts))
        } catch (error) {
            dispatch(fetchPostsFailed(error))
        }

    }
}

// create store
const store = createStore(reducer, applyMiddleware(thunkMiddleware.default));

// subscribe to state changes
store.subscribe(() => {
    console.log(store.getState())
})

// dispatch action
store.dispatch(fetchPosts())