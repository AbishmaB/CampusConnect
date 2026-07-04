function Stats({ totalPosts, totalLikes, totalUsers }) {
  const cardStyle = {
    flex: 1,
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
    borderRadius: "18px",
    padding: "25px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,.25)",
    transition: "0.3s",
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "30px",
        flexWrap: "wrap",
      }}
    >
      <div
        style={cardStyle}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-6px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        <h1>📢</h1>
        <h2>{totalPosts}</h2>
        <p>Total Posts</p>
      </div>

      <div
        style={cardStyle}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-6px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        <h1>❤️</h1>
        <h2>{totalLikes}</h2>
        <p>Total Likes</p>
      </div>

      <div
        style={cardStyle}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-6px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        <h1>👥</h1>
        <h2>{totalUsers}</h2>
        <p>Active Users</p>
      </div>
    </div>
  );
}

export default Stats;