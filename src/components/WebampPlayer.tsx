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
            artist: "Electric Light Orchestra",
            title: "Last Train to London",
          },
          url: "/Music/last-train-to-london-audio.mp3",
          duration: 5.322286,
        },
        {
          metaData: {
            title: "Virtual Insanity",
            artist: "Jamiroquai",
          },
          url: "/Music/virtual-insanity.mp3",
          duration: 322.612245,
        },
        {
          metaData: {
            title: "El Ojo Blindado",
            artist: "Sumo",
          },
          url: "/Music/el-ojo-blindado.mp3",
          duration: 190.093061,
        },
        {
          metaData: {
            title: "House Burning Down",
            artist: "Jimi Hendrix",
          },
          url: "/Music/house-burning-down.mp3",
          duration: 190.093061,
        },
        {
          metaData: {
            title: "Without Me",
            artist: "Eminem",
          },
          url: "/Music/eminem-without-me.mp3",
          duration: 190.093061,
        },
        {
          metaData: {
            title: "Lo Que Sangra",
            artist: "Soda Estereo",
          },
          url: "/Music/lo-que-sangra.mp3",
          duration: 190.093061,
        },
        {
          metaData: {
            title: "Lamento Boliviano",
            artist: "Los Enanitos Verdes",
          },
          url: "/Music/boliviano.mp3",
          duration: 190.093061,
        },
        {
          metaData: {
            title: "Oh Qué Será?",
            artist: "Willie Colón",
          },
          url: "/Music/oh-que.mp3",
          duration: 190.093061,
        },
        {
          metaData: {
            title: "Hunting Soul",
            artist: "Hayasii",
          },
          url: "/Music/soul.mp3",
          duration: 190.093061,
        },
      ],
    });
    webamp.renderWhenReady(containerRef.current).then(() => {
      const closeBtn = containerRef.current?.querySelector("#close");
      if (closeBtn) {
        closeBtn.addEventListener("click", handleClose);
      }
    });

    const handleClose = () => {
      onClose();
    };

    return () => {
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
