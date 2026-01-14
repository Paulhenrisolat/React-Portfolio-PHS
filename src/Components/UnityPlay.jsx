export default function UnityPlay({ unity }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe
        src={`${process.env.PUBLIC_URL}/${unity.url}`}
        width={unity.width}
        height={unity.height}
        style={{
          border: "none",
          maxWidth: "100%",
        }}
        title="Unity WebGL"
      />
    </div>
  );
}