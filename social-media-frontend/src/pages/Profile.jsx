import { useLocation, Link } from "react-router-dom";

function Profile() {
  const { state } = useLocation();

  if (!state) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#111827",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>No Profile Found 😢</h1>

        <Link
          to="/"
          style={{
            marginTop: "20px",
            color: "#60a5fa",
          }}
        >
          ← Back Home
        </Link>
      </div>
    );
  }

  const { username, posts } = state;

  const userPosts = posts.filter(
    (post) => post.username === username
  );

  const totalLikes = userPosts.reduce(
    (sum, post) => sum + post.likes,
    0
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#0f172a,#1e293b,#111827)",
        color: "white",
        padding: "40px",
      }}
    >
      <Link
        to="/"
        style={{
          color: "#60a5fa",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        ← Back Home
      </Link>

      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#6366f1,#8b5cf6)",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          {username.charAt(0).toUpperCase()}
        </div>

        <h1>{username}</h1>

        <p>📝 Posts : {userPosts.length}</p>

        <p>❤️ Likes : {totalLikes}</p>
      </div>

      <h2
        style={{
          marginTop: "50px",
        }}
      >
        My Posts
      </h2>

      {userPosts.map((post) => (
        <div
          key={post._id}
          style={{
            background: "rgba(255,255,255,.08)",
            padding: "20px",
            borderRadius: "15px",
            marginTop: "20px",
          }}
        >
          <p>{post.content}</p>

          <small>
            ❤️ {post.likes}
          </small>
        </div>
      ))}
    </div>
  );
}

export default Profile;