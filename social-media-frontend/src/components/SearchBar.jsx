function SearchBar({ search, setSearch }) {
  return (
    <div
      style={{
        marginBottom: "30px",
      }}
    >
      <input
        type="text"
        placeholder="🔍 Search posts by user or content..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "15px",
          border: "none",
          outline: "none",
          fontSize: "16px",
          background: "#1f2937",
          color: "white",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}

export default SearchBar;