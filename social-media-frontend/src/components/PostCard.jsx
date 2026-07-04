function PostCard({ post, likePost, deletePost }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        borderRadius: "20px",
        padding: "22px",
        marginBottom: "22px",
        boxShadow: "0 10px 25px rgba(0,0,0,.25)",
        transition: "0.3s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform =
          "translateY(-8px)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform =
          "translateY(0px)")
      }
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#6366f1,#8b5cf6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "22px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          {post.username.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2
            style={{
              margin: 0,
            }}
          >
            {post.username}
          </h2>

          <small
            style={{
              color: "#94a3b8",
            }}
          >
            {new Date(post.createdAt).toLocaleString()}
          </small>
        </div>
      </div>

      <p
        style={{
          marginTop: "20px",
          lineHeight: "28px",
          fontSize: "17px",
        }}
      >
        {post.content}
      </p>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <button
          onClick={() => likePost(post._id)}
          style={{
            background:
              "linear-gradient(135deg,#ec4899,#f43f5e)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            padding: "12px 20px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ❤️ {post.likes}
        </button>

        <button
          onClick={() => {
            if (
              window.confirm(
                "Delete this post?"
              )
            ) {
              deletePost(post._id);
            }
          }}
          style={{
            background:
              "linear-gradient(135deg,#ef4444,#dc2626)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            padding: "12px 20px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default PostCard;