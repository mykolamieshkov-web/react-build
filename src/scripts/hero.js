// /src/scripts/hero.js

export function initHeroVideo(videoRef, overlayRef) {
  const video = videoRef.current;
  if (!video) return;

  const videoDuration = 19;
  const triggerTime = 7;
  let triggered = false;

  const handleTimeUpdate = () => {
    if (video.currentTime >= triggerTime && !triggered) {
      triggered = true;
      overlayRef.current.classList.add('active');
    }
  };

  const handleVideoEnd = () => {
    video.currentTime = 0;
    video.play();
    triggered = false;
  };

  video.addEventListener('timeupdate', handleTimeUpdate);
  video.addEventListener('ended', handleVideoEnd);

  return () => {
    video.removeEventListener('timeupdate', handleTimeUpdate);
    video.removeEventListener('ended', handleVideoEnd);
  };
}