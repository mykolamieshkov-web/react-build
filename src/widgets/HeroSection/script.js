// script.js

export function initHeroVideo(videoRef, overlayRef) {
  const video = videoRef.current;
  if (!video) return;

  const handleVideoEnd = () => {
    if (overlayRef.current) {
      overlayRef.current.classList.add('hero__overlay--active');
    }
  };

  video.addEventListener('ended', handleVideoEnd);

  return () => {
    video.removeEventListener('ended', handleVideoEnd);
  };
}