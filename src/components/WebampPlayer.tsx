import { useRef, useEffect } from "react";
import Webamp from "webamp";

const WebampPlayer = ({ onClose }: { onClose: () => void }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const webamp = new Webamp({
      initialTracks: [
        {
          metaData: {
            artist: "DJ Mike Llama",
            title: "Llama Whippin' Intro",
          },
          // NOTE: Your audio file must be served from the same domain as your HTML
          // file, or served with permissive CORS HTTP headers:
          // https://docs.webamp.org/docs/guides/cors
          url: "https://cdn.jsdelivr.net/gh/captbaritone/webamp@43434d82cfe0e37286dbbe0666072dc3190a83bc/mp3/llama-2.91.mp3",
          duration: 5.322286,
        },
        {
          metaData: {
            title: "Heroines",
            artist: "Diablo Swing Orchestra",
          },
          // NOTE: Your audio file must be served from the same domain as your HTML
          // file, or served with permissive CORS HTTP headers:
          // https://docs.webamp.org/docs/guides/cors
          url: "https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Diablo_Swing_Orchestra_-_01_-_Heroines.mp3",
          duration: 322.612245,
        },
        {
          metaData: {
            title: "We Are Going To Eclecfunk Your Ass",
            artist: "Eclectek",
          },
          // NOTE: Your audio file must be served from the same domain as your HTML
          // file, or served with permissive CORS HTTP headers:
          // https://docs.webamp.org/docs/guides/cors
          url: "https://raw.githubusercontent.com/captbaritone/webamp-music/4b556fbf/Eclectek_-_02_-_We_Are_Going_To_Eclecfunk_Your_Ass.mp3",
          duration: 190.093061,
        },
      ],
    });
    webamp.renderWhenReady(containerRef.current).then(() => {
      // Cuando el reproductor ya está montado
      const closeBtn = containerRef.current?.querySelector("#close");
      if (closeBtn) {
        closeBtn.addEventListener("click", handleClose);
      }
    });

    const handleClose = () => {
      onClose(); // avisamos al padre que se cerró
    };

    return () => {
      // cleanup: sacamos el eventListener y destruimos webamp
      const closeBtn = containerRef.current?.querySelector("#close");
      if (closeBtn) {
        closeBtn.removeEventListener("click", handleClose);
      }
      webamp.dispose();
    };
  }, [onClose]);

  return <div ref={containerRef}></div>;
};

export default WebampPlayer;
