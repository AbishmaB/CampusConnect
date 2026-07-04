function Hero() {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg,#4f46e5,#7c3aed)",
        padding: "50px",
        borderRadius: "20px",
        color: "white",
        textAlign: "center",
        marginBottom: "30px",
        boxShadow: "0 10px 30px rgba(99,102,241,.4)",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "15px",
        }}
      >
        Welcome to CampusConnect 🚀
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#e2e8f0",
        }}
      >
        Connect • Share • Inspire
      </p>

      <button
  onClick={() => {
    document
      .getElementById("post-section")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
  style={{
    marginTop: "20px",
    padding: "15px 35px",
    background: "white",
    color: "#4f46e5",
    border: "none",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.3s",
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = "scale(1.05)";
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = "scale(1)";
  }}
>
  🚀 Start Posting
</button>
    </div>
  );
}

export default Hero;