// src/Components/UnityPlay.jsx
import React, { useEffect, useRef } from "react";

export default function UnityPlay({ unity }) {
  const canvasId = "unity-canvas";
  const unityInstanceRef = useRef(null);
  const scriptRef = useRef(null);

  // ⚠️ Tous les Hooks sont appelés avant tout return
  const showUnity = !!(unity && unity.buildPath);

  // chemins pour Unity
  const folderWithoutIndex = showUnity
    ? unity.buildPath.replace(/\/index\.html$/, "").replace(/\/$/, "")
    : "";
  const prefix = showUnity ? folderWithoutIndex.split("/").pop() : "";
  const buildFolder = showUnity ? `${folderWithoutIndex}/Build` : "";

  const loaderUrl = showUnity ? `${buildFolder}/${prefix}.loader.js` : "";
  const dataUrl = showUnity ? `${buildFolder}/${prefix}.data` : "";
  const frameworkUrl = showUnity ? `${buildFolder}/${prefix}.framework.js` : "";
  const codeUrl = showUnity ? `${buildFolder}/${prefix}.wasm` : "";

  useEffect(() => {
    if (!showUnity) return;

    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const config = {
      dataUrl,
      frameworkUrl,
      codeUrl,
      streamingAssetsUrl: "StreamingAssets",
      companyName: unity.companyName || "DefaultCompany",
      productName: unity.productName || prefix,
      productVersion: unity.productVersion || "1.0",
      showBanner: (msg, type) => console.log("Unity banner", type, msg),
    };

    let mounted = true;

    // inject loader
    scriptRef.current = document.createElement("script");
    scriptRef.current.src = loaderUrl;
    scriptRef.current.async = true;

    scriptRef.current.onload = () => {
      if (!mounted) return;
      if (typeof window.createUnityInstance !== "function") return;

      window
        .createUnityInstance(canvas, config, (progress) => {
          const bar = document.getElementById("unity-progress-bar-full");
          if (bar) bar.style.width = `${100 * progress}%`;
        })
        .then((instance) => {
          unityInstanceRef.current = instance;
          const fsBtn = document.getElementById("unity-fullscreen-button");
          if (fsBtn) fsBtn.onclick = () => instance.SetFullscreen(1);
        })
        .catch((err) => {
          console.error("createUnityInstance failed:", err);
        });
    };

    scriptRef.current.onerror = (e) => {
      console.error("Erreur chargement loader Unity:", e);
    };

    document.body.appendChild(scriptRef.current);

    return () => {
      mounted = false;
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }
      if (unityInstanceRef.current && typeof unityInstanceRef.current.Quit === "function") {
        unityInstanceRef.current.Quit().catch(() => {});
      }
    };
  }, [showUnity, loaderUrl, dataUrl, frameworkUrl, codeUrl, unity, prefix]);

  // ⚠️ return conditionnel seulement **après** les Hooks
  if (!showUnity) return null;

  return (
    <div style={{ textAlign: "center" }}>
      <canvas
        id={canvasId}
        width={unity.width || 960}
        height={unity.height || 600}
        style={{ maxWidth: "100%", border: "1px solid #000" }}
      />
      <div id="unity-loading-bar" style={{ width: "100%", marginTop: 6 }}>
        <div id="unity-progress-bar-full" style={{ width: "0%", height: 6 }} />
      </div>
      <button id="unity-fullscreen-button" style={{ marginTop: 6 }}>
        Fullscreen
      </button>
    </div>
  );
}
