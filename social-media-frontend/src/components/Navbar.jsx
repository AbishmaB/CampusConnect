import { useNavigate } from "react-router-dom";


function Navbar({ username, posts }){
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      style={{
        width: "100%",
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(15px)",
        borderRadius: "15px",
        padding: "18px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          margin: 0,
          color: "white",
          fontSize: "30px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => scrollToSection("home")}
      >
        🚀 CampusConnect
      </h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          color: "#cbd5e1",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        <span onClick={() => scrollToSection("home")}>
          🏠 Home
        </span>

        <span onClick={() => scrollToSection("trending")}>
          🔥 Trending
        </span>

        <span
  onClick={() =>
    navigate("/profile", {
      state: {
        username,
        posts,
      },
    })
  }
>
  👤 Profile
</span>
      </div>
    </nav>
  );
}

export default Navbar;