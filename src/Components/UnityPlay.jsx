import { Unity, useUnityContext } from "react-unity-webgl";

const UnityPlay = ({ unity }) => {
  const { unityProvider, loadingProgression } = useUnityContext({
    loaderUrl: unity.loaderUrl,
    dataUrl: unity.dataUrl,
    frameworkUrl: unity.frameworkUrl,
    codeUrl: unity.codeUrl
  });

  return (
    <div>
      <p>Loading: {(loadingProgression * 100).toFixed(0)}%</p>
      <Unity unityProvider={unityProvider} style={{ width: unity.width || 800, height: unity.height || 600 }} />
    </div>
  );
};

export default UnityPlay;