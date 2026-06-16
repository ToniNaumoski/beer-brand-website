'use client';

import { useEffect, useMemo, useState } from 'react';
import brand from '../brand.config';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function PagePreloader() {
  const [pageReady, setPageReady] = useState(false);
  const [bottleReady, setBottleReady] = useState(false);
  const [bottleProgress, setBottleProgress] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  const targetProgress = useMemo(() => {
    const pagePart = pageReady ? 40 : 24;
    const bottlePart = bottleReady ? 60 : clamp(bottleProgress * 0.6, 0, 58);
    return pageReady && bottleReady ? 100 : clamp(pagePart + bottlePart, 0, 96);
  }, [pageReady, bottleReady, bottleProgress]);

  useEffect(() => {
    document.documentElement.classList.add('is-preloading');
    document.body.classList.add('is-preloading');

    const handlePageLoad = () => setPageReady(true);
    const handleBottleProgress = (event) => {
      setBottleProgress(clamp(event.detail?.progress ?? 0, 0, 100));
    };
    const handleBottleReady = () => {
      setBottleProgress(100);
      setBottleReady(true);
    };

    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad, { once: true });
    }

    window.addEventListener('buffalo:bottle-progress', handleBottleProgress);
    window.addEventListener('buffalo:bottle-loaded', handleBottleReady);
    window.addEventListener('buffalo:bottle-error', handleBottleReady);

    const fallbackTimer = window.setTimeout(handleBottleReady, 12000);

    return () => {
      window.clearTimeout(fallbackTimer);
      window.removeEventListener('load', handlePageLoad);
      window.removeEventListener('buffalo:bottle-progress', handleBottleProgress);
      window.removeEventListener('buffalo:bottle-loaded', handleBottleReady);
      window.removeEventListener('buffalo:bottle-error', handleBottleReady);
      document.documentElement.classList.remove('is-preloading');
      document.body.classList.remove('is-preloading');
    };
  }, []);

  useEffect(() => {
    const progressTimer = window.setInterval(() => {
      setDisplayProgress((current) => {
        if (current >= targetProgress) return current;
        const step = targetProgress === 100 ? 5 : Math.max(1, (targetProgress - current) * 0.12);
        return clamp(current + step, 0, targetProgress);
      });
    }, 45);

    return () => window.clearInterval(progressTimer);
  }, [targetProgress]);

  useEffect(() => {
    if (displayProgress < 100) return undefined;

    const hideTimer = window.setTimeout(() => {
      setHidden(true);
      document.documentElement.classList.remove('is-preloading');
      document.body.classList.remove('is-preloading');
    }, 550);

    return () => window.clearTimeout(hideTimer);
  }, [displayProgress]);

  if (hidden) return null;

  const progress = Math.round(displayProgress);

  return (
    <div className="site-preloader" role="status" aria-live="polite" aria-label="Loading Buffalo Beer">
      <div className="site-preloader__mark">
        <img src={brand.assets.logo} alt="" />
      </div>
      <div className="site-preloader__body">
        <div className="site-preloader__kicker">Buffalo Beer</div>
        <div className="site-preloader__percent">{progress}%</div>
        <div className="site-preloader__track" aria-hidden="true">
          <div className="site-preloader__bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="site-preloader__copy">
          {progress < 100 ? 'Chilling the bottle' : 'Ready to pour'}
        </div>
      </div>
    </div>
  );
}
