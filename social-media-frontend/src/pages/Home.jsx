import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import SearchBar from "../components/SearchBar";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import Footer from "../components/Footer";
const pageStyle = {
minHeight: "100vh",
background: "linear-gradient(135deg,#0f172a,#1e293b,#111827)",
color: "white",
padding: "30px",
fontFamily: "Arial, sans-serif",
};

function Home() {
const [posts, setPosts] = useState([]);
const [username, setUsername] = useState("");
const [currentUser, setCurrentUser] = useState("");
const [content, setContent] = useState("");
const [search, setSearch] = useState("");
useEffect(() => {
fetchPosts();
}, []);

const fetchPosts = async () => {
try {
const res = await axios.get("http://localhost:5000/posts");
setPosts(res.data);
} catch (error) {
console.log(error);
}
};

const createPost = async () => {
  console.log("POST CLICKED");

  if (!username.trim() || !content.trim()) {
    alert("Please fill all fields");
    return;
  }

  try {
    const res = await axios.post(
      "http://localhost:5000/posts",
      {
        username,
        content,
      }
    );

    console.log("Success:", res.data);
    setCurrentUser(username);

    setUsername("");
    setContent("");

    fetchPosts();
  } catch (error) {
    console.log("POST ERROR:", error);
  }
};

const likePost = async (id) => {
try {
await axios.put(`http://localhost:5000/posts/${id}/like`);
fetchPosts();
} catch (error) {
console.log(error);
}
};

const deletePost = async (id) => {
try {
await axios.delete(`http://localhost:5000/posts/${id}`);
fetchPosts();
} catch (error) {
console.log(error);
}
};

return ( <div style={pageStyle}>
<div style={{ maxWidth: "900px", margin: "0 auto" }}>
  <Navbar
  username={currentUser}
  posts={posts}
/>
<div id="home">
  <Hero />
</div>
<Stats
  totalPosts={posts.length}
  totalLikes={posts.reduce(
    (sum, post) => sum + post.likes,
    0
  )}
  totalUsers={
    new Set(posts.map((post) => post.username))
      .size
  }
/>
<div id="post-section">
  <CreatePost
    username={username}
    
    setUsername={setUsername}
    content={content}
    setContent={setContent}
    createPost={createPost}
  />
</div>

<SearchBar
  search={search}
  setSearch={setSearch}
/>

<div id="trending">
  {posts
    .filter(
      (post) =>
        post.username
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        post.content
          .toLowerCase()
          .includes(search.toLowerCase())
    )
    .map((post) => (
      <PostCard
        key={post._id}
        post={post}
        likePost={likePost}
        deletePost={deletePost}
      />
    ))}
</div>
  <Footer />
  </div>
</div>

);
}

export default Home;
