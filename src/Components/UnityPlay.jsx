import React, { useEffect, useRef } from "react";

export default function UnityPlay({ unity }) {
  const canvasId = "unity-canvas";
  const unityInstanceRef = useRef(null);
  const scriptRef = useRef(null);

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
          
            //wait x seconds before scrolling down
            setTimeout(() => {window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); }, 800);
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

  if (!showUnity) return null;

  return (
    <div style={{ textAlign: "center" }}>
      <canvas
        id={canvasId}
        width={200}
        height={200}
        style={{ border: "1px solid #000", maxWidth: "960px", maxHeight: "600px", width: "100%", height: "auto" }}
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
