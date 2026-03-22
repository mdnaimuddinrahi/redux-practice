import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/blogsSlice";
import blogReducer from "../features/blog/blogSlice";
import relatedBlogsReducer from "../features/relatedBlogs/relatedBlogsSlice";
import filterReducer from "../features/filter/filterSlice"
import updateBlogReducer from "../features/updateBlog/updateBlogSlice";

export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        blog: blogReducer,
        relatedBlogs: relatedBlogsReducer,
        filters: filterReducer,
        updateBlog: updateBlogReducer
    },
    devTools: true
})