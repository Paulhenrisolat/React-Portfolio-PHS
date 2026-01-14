import React from "react";

export default function UnityPlay({ unity }) {
  // Build path relatif au dossier public
  let path = unity?.buildPath || unity?.url || unity?.path || "";

  // Gérer PUBLIC_URL pour GitHub Pages
  const base = process.env.PUBLIC_URL || "";
  const src = `${base}/${path}`.replace(/\/\/+/g, "/");

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe
        src={src}
        width={unity.width || 960}
        height={unity.height || 600}
        style={{
          border: "none",
          maxWidth: "100%",
        }}
        title="Unity WebGL"
        allowFullScreen
      />
    </div>
  );
}
