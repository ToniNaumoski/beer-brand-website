'use client';

import Script from 'next/script';
import brand from '../brand.config';

const initBrandRuntime = () => {
  const { $, document } = window;

  if (!$) return;

  if ('ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch)) {
    document.documentElement.classList.add('w-mod-touch');
  }

  if ($.scrollify) {
    $.scrollify({
      section: '.s-scroll',
      scrollSpeed: 2200,
      touchScroll: true,
      scrollbars: true,
      setHeights: true,
      easing: 'easeInOutQuint',
      offset: 0,
      overflowScroll: true,
      before(section) {
        if (section === 0) {
          document.body.className = '';
        }
        if (section === 1) {
          document.body.className = 'step-1';
        }
        if (section === 2) {
          document.body.className = 'step-2';
        }
      },
      after() {},
    });
  }

  $('.brand')
    .off('click.buffaloBrand')
    .on('click.buffaloBrand', function handleBrandClick() {
      const $brand = $(this);
      const isWhite = $brand.data('buffaloWhite') === true;

      $brand.find('path').css('fill', isWhite ? brand.primaryColor : '#ffffff');
      $brand.data('buffaloWhite', !isWhite);
    });
};

export default function BrandRuntimeScripts() {
  return (
    <Script
      src="/assets/js/core.js"
      strategy="afterInteractive"
      onLoad={initBrandRuntime}
    />
  );
}
