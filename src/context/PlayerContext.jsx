import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();
const PlayerContextProvider = function (props) {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();
  const [track, setTrack] = useState(songsData[0]);
  const [playTrack, setPlayTrack] = useState(false);
  const [time, setTime] = useState({
    currentTime: { seconds: 0, minute: 0 },
    totalTime: { seconds: 0, minute: 0 },
  });

  const prev = async function () {
    await setTrack(track.id > 0 ? songsData[track.id - 1] : track);
    await audioRef.current.play();
    setPlayTrack(true);
  };
  const next = async function () {
    await setTrack(
      track.id < songsData.length - 1 ? songsData[track.id + 1] : track
    );
    await audioRef.current.play();
    setPlayTrack(true);
  };

  const pause = function () {
    audioRef.current.pause();
    setPlayTrack(false);
  };

  const moveTime = async function (e) {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };
  const playWithId = async function (id) {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayTrack(true);
  };
  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playTrack,
    setPlayTrack,
    time,
    setTime,

    pause,
    playWithId,
    prev,
    next,
    moveTime,
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          ) + "%";
        setTime({
          currentTime: {
            seconds:
              Math.floor(audioRef.current.currentTime % 60).toString()
                .length === 1
                ? `0${Math.floor(audioRef.current.currentTime % 60)}`
                : Math.floor(audioRef.current.currentTime % 60),
            minutes: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            seconds: Math.floor(audioRef.current.duration % 60),
            minutes: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
