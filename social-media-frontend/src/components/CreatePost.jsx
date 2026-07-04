function CreatePost({
  username,
  setUsername,
  content,
  setContent,
  createPost,
}) {
  return (
    <div
      id="post-section"
      style={{
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(15px)",
        padding: "25px",
        borderRadius: "20px",
        marginBottom: "30px",
        boxShadow: "0 10px 25px rgba(0,0,0,.3)",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          color: "#fff",
        }}
      >
        ✍ Create a Post
      </h2>

      <input
        type="text"
        placeholder="Enter your name..."
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          border: "none",
          outline: "none",
          marginBottom: "15px",
          fontSize: "16px",
        }}
      />

      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
        maxLength={280}
        style={{
          width: "100%",
          height: "140px",
          resize: "none",
          borderRadius: "12px",
          border: "none",
          outline: "none",
          padding: "14px",
          fontSize: "16px",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "15px",
        }}
      >
        <span
          style={{
            color:
              content.length > 250
                ? "#ef4444"
                : "#94a3b8",
          }}
        >
          {content.length}/280 Characters
        </span>

        <button
          onClick={createPost}
          style={{
            background:
              "linear-gradient(135deg,#6366f1,#8b5cf6)",
            color: "white",
            border: "none",
            padding: "13px 28px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: ".3s",
          }}
          onMouseEnter={(e) =>
            (e.target.style.transform =
              "scale(1.05)")
          }
          onMouseLeave={(e) =>
            (e.target.style.transform =
              "scale(1)")
          }
        >
          🚀 Share Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;