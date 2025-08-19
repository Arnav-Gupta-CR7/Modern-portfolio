import { useRef, useEffect, useState } from "react";
import ProfileCard from "../Components/ProfileCard";
import hoverSound from "/Audio.flac";

export default function Hero1_card() {
  const audioRef = useRef(null);
  const [canPlay, setCanPlay] = useState(false);

  useEffect(() => {
    // Load audio
    audioRef.current = new Audio(hoverSound);
    audioRef.current.loop = true; // loop while hovering

    // Enable sound after first user click (browser policy fix)
    const enableSound = () => {
      setCanPlay(true);
      document.removeEventListener("click", enableSound);
    };
    document.addEventListener("click", enableSound);

    return () => {
      document.removeEventListener("click", enableSound);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (canPlay && audioRef.current) {
      audioRef.current.currentTime = 0; // restart from beginning
      audioRef.current.play().catch((err) => console.log("Audio play error:", err));
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div className="flex items-center h-screen">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProfileCard
          name="Arnav Gupta"
          title="Software Engineer"
          handle="guptaarnav136"
          status="Online"
          contactText="Connect"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log("Contact clicked")}
        />
      </div>
    </div>
  );
}