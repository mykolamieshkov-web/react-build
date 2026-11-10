// hero.js — Safari/iOS-safe autoplay for hero video

export function initHeroVideo(videoRef) {
  const video = videoRef.current;
  if (!video) return undefined;

  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute('webkit-playsinline', 'true');

  const tryPlay = () => {
    const p = video.play();
    if (p && typeof p.catch === 'function') p.catch(() => {});
  };

  tryPlay();
  video.addEventListener('loadeddata', tryPlay);
  video.addEventListener('canplay', tryPlay);

  const onVisibility = () => {
    if (!document.hidden) tryPlay();
  };
  document.addEventListener('visibilitychange', onVisibility);

  const onFirstGesture = () => {
    tryPlay();
    window.removeEventListener('touchstart', onFirstGesture);
    window.removeEventListener('click', onFirstGesture);
  };
  window.addEventListener('touchstart', onFirstGesture, { passive: true });
  window.addEventListener('click', onFirstGesture);

  return () => {
    video.removeEventListener('loadeddata', tryPlay);
    video.removeEventListener('canplay', tryPlay);
    document.removeEventListener('visibilitychange', onVisibility);
    window.removeEventListener('touchstart', onFirstGesture);
    window.removeEventListener('click', onFirstGesture);
  };
}