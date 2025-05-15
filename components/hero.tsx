'use client';

import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { useState, useRef } from "react";
import { saveAs } from "file-saver";

import { Spotlight } from "@/components/ui/spotlight";
import { MagicButton } from "@/components/ui/magic-button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { socialMedia } from "@/data";

const stats = [
  {
    value: "6+",
    label: "Years of\nExperience"
  },
  {
    value: "50+",
    label: "Projects\nCompleted"
  },
  {
    value: "140+",
    label: "Happy\nClients"
  },
  {
    value: "∞",
    label: "Lines of\nCode Written"
  }
] as const;

export const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const volumeBarRef = useRef<HTMLDivElement>(null);
  const [isAdjustingVolume, setIsAdjustingVolume] = useState(false);

  const handleDownload = () => {
    saveAs("/thiago-costa-the-best-developer.pdf", "thiago-costa-the-best-developer.pdf");
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        setHasStartedPlaying(true);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.volume = volume;
      } else {
        videoRef.current.volume = 0;
      }
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    if (volumeBarRef.current) {
      const rect = volumeBarRef.current.getBoundingClientRect();
      const y = e.clientY - rect.top;
      const percentage = 1 - (y / rect.height);
      const newVolume = Math.max(0, Math.min(1, percentage));
      
      if (videoRef.current) {
        videoRef.current.volume = newVolume;
        videoRef.current.muted = newVolume === 0;
        setVolume(newVolume);
        setIsMuted(newVolume === 0);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const bounds = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const width = bounds.width;
      const percentage = x / width;
      videoRef.current.currentTime = percentage * videoRef.current.duration;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="md:pb-28 pb-16 pt-20 md:pt-40">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      {/* Main Content */}
      <div className="relative z-10 px-4 md:px-0">
        {/* GRID: texto e botões em uma linha, vídeo ocupando duas linhas no desktop */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Texto principal */}
          <div className="flex-1 flex flex-col justify-center order-1">
            <p className="text-gray-300 text-lg md:text-2xl md:mb-1">I am Thiago Costa</p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#a895f5] bg-[linear-gradient(90deg,#8750f7 0,#fff)] md:text-[80px]">
              Next-Level Web
              Developer.
            </h1>
            <p className="text-base md:text-lg text-gray-400 mt-4">
              I help startups and product teams turn ideas into real, high-performance applications built with clean architecture and designed to grow.
            </p>
            {/* Desktop version of buttons/socials */}
            <div className="mt-8 hidden md:flex flex-row items-center gap-6">
              <MagicButton
                title="Download CV"
                icon={<FaLocationArrow className="ml-2" />}
                position="right"
                asChild
                otherClasses="border-none bg-[#0B0B14] px-6 py-3 text-white hover:bg-purple-500/10 !mt-0"
                handleClick={handleDownload}
              />
              <div className="flex items-center space-x-6">
                {socialMedia.map((social, index) => (
                  <Link
                    key={index}
                    href={social.link}
                    target="_blank"
                    className="text-2xl text-gray-500 transition-colors hover:text-white"
                  >
                    <Image
                      src={social.img}
                      alt={social.name}
                      className={`w-6 h-6 inline transition-opacity opacity-50 hover:opacity-100`}
                      width={24}
                      height={24}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Vídeo */}
          <div className="flex-1 flex justify-center md:justify-end order-2 md:order-2 opacity-95">
            <div
              ref={containerRef}
              className="w-full md:max-w-md aspect-[9/16] md:aspect-[3/4] h-[360px] md:h-[620px] md:w-[540px] overflow-hidden rounded-3xl border-2 border-[#0B0B14]/20 relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => {
                setIsHovering(false);
                setIsAdjustingVolume(false);
              }}
            >
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  src="/u3.mp4"
                  playsInline
                  loop
                  preload="auto"
                  className="h-full w-full object-cover opacity-90"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                />

                {/* Initial Play Button */}
                {!hasStartedPlaying && (
                  <button
                    onClick={togglePlay}
                    className="absolute left-1/2 top-[54%] z-20 -translate-x-1/2 -translate-y-1/2 transform"
                  >
                    <div className="group relative">
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#0B0B14]/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
                        <FaPlay className="ml-1 text-2xl text-white transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>
                  </button>
                )}

                {/* Video Controls */}
                {hasStartedPlaying && (
                  <div
                    className={cn(
                      "absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#0B0B14]/90 via-[#0B0B14]/50 to-transparent pb-4 pt-12 transition-all duration-500",
                      isHovering ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                  >
                    {/* Progress bar */}
                    <div className="px-4">
                      <div
                        className="group relative h-1 cursor-pointer overflow-hidden rounded-full bg-white/10"
                        onClick={handleProgressClick}
                      >
                        <div
                          className="absolute inset-0 flex items-center"
                          style={{ width: `${progress}%` }}
                        >
                          <div className="h-full w-full bg-gradient-to-r from-[#0B0B14] to-[#1a1a2e]" />
                          <div className="absolute right-0 h-3 w-3 -translate-x-1/2 -mr-2 rounded-full bg-white-200 opacity-0 transition-opacity group-hover:opacity-100" />
                        </div>
                      </div>
                      {/* Time display */}
                      <div className="mt-2 flex items-center justify-between text-xs text-white/60">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                    </div>
                    {/* Controls */}
                    <div className="flex items-center justify-between px-4 pt-2">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={togglePlay}
                          className="group flex h-10 w-10 items-center justify-center rounded-full bg-[#0B0B14]/40 backdrop-blur-sm transition-all duration-300 hover:bg-[#0B0B14]/60"
                        >
                          {isPlaying ? (
                            <FaPause className="text-lg text-white/80 transition-transform duration-300 group-hover:scale-110" />
                          ) : (
                            <FaPlay className="ml-0.5 text-lg text-white/80 transition-transform duration-300 group-hover:scale-110" />
                          )}
                        </button>
                        {/* Volume Control */}
                        <div className="group relative">
                          <button
                            onClick={toggleMute}
                            onMouseEnter={() => setIsAdjustingVolume(true)}
                            className="group flex h-10 w-10 items-center justify-center rounded-full bg-[#0B0B14]/40 backdrop-blur-sm transition-all duration-300 hover:bg-[#0B0B14]/60"
                          >
                            {isMuted ? (
                              <FaVolumeMute className="text-lg text-white/80 transition-transform duration-300 group-hover:scale-110" />
                            ) : (
                              <FaVolumeUp className="text-lg text-white/80 transition-transform duration-300 group-hover:scale-110" />
                            )}
                          </button>
                          {/* Volume Slider */}
                          {isAdjustingVolume && (
                            <div
                              ref={volumeBarRef}
                              className="absolute bottom-full left-1/2 mb-2 h-24 w-1.5 -translate-x-1/2 cursor-pointer rounded-full bg-white/10"
                              onClick={handleVolumeChange}
                              onMouseLeave={() => setIsAdjustingVolume(false)}
                            >
                              <div
                                className="absolute bottom-0 left-0 right-0 rounded-full bg-gradient-to-t from-[#0B0B14] to-[#1a1a2e] transition-all"
                                style={{ height: `${volume * 100}%` }}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile version of buttons/socials */}
          <div className="flex md:hidden flex-col items-center gap-4 mt-0 order-3">
            <MagicButton
              title="Download CV"
              icon={<FaLocationArrow className="ml-2" />}
              position="right"
              asChild
              otherClasses="border-none bg-[#0B0B14] px-6 py-3 text-white hover:bg-purple-500/10 !mt-0"
              handleClick={handleDownload}
            />
            <div className="flex items-center space-x-12">
              {socialMedia.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  target="_blank"
                  className="text-2xl text-gray-500 transition-colors hover:text-white"
                >
                  <Image
                    src={social.img}
                    alt={social.name}
                    className={`w-6 h-6 inline transition-opacity opacity-50 hover:opacity-100`}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-20 grid grid-cols-2 md:flex justify-between items-center gap-6 md:gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-2">
              <h3 className="text-4xl md:text-6xl font-semibold text-white">{stat.value}</h3>
              <p className="mt-1 text-xs md:text-sm text-white md:max-w-[85px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
