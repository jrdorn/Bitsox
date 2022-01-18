import React from "react";

import Searchbar from "../Common/Searchbar/Searchbar";
import BlogPost from "./features/BlogPost/BlogPost";
import Navbar from "../Common/Navbar/Navbar";

import "./Blog.css";

function Blog() {
  return (
    <div id="Blog">
      <Searchbar />
      <BlogPost />
      <Navbar />
    </div>
  );
}

export default Blog;
