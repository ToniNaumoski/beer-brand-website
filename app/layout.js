import { Poppins } from "next/font/google";
import "./styles/core.css";
import brand from "../brand.config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: brand.seo.title,
  description: brand.seo.description,
  keywords: brand.seo.keywords,
  openGraph: {
    title: brand.seo.title,
    description: brand.seo.description,
    type: "website",
    images: [{ url: brand.seo.ogImage }],
  },
  alternates: {
    canonical: brand.seo.canonicalUrl,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={poppins.variable}
      data-wf-domain="conveyflow-nyathi.webflow.io"
      data-wf-page="63e6165a773f74db16ed949d"
      data-wf-site="63e6165a773f74f3c5ed949c"
      suppressHydrationWarning
    >
      <head>
        {/* Critical Webflow IX2 fallback CSS — identical to original */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @media (min-width:992px) {
            html.w-mod-js:not(.w-mod-ix) [data-w-id="176ab12c-8bc6-4c54-ce50-4450992dc23e"] {
              -webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);
              -moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);
              -ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);
              transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0);
            }
          }
          body {
            font-family: var(--font-poppins), 'Poppins', sans-serif !important;
          }
          .w-webflow-badge { position: fixed !important; display: None !important; visibility: hidden !important; }
        `}} />
        {/* Webflow w-mod-js class setter — must run before body renders, exactly like original */}
        <script dangerouslySetInnerHTML={{ __html: `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);` }} />
      </head>
      <body suppressHydrationWarning>
        {children}

        {/* Single bundled core.js: jQuery → Webflow → Scrollify → jQuery UI */}
        <script src="/assets/js/core.js" />
        {/* Scrollify init + brand click handler — identical to original index.html */}
        <script dangerouslySetInnerHTML={{
          __html: `
          $(function() {
            $.scrollify({
              section : ".s-scroll",
              scrollSpeed: 2200,
              touchScroll: true,
              scrollbars: true,
              setHeights: true,
              easing: "easeInOutQuint",
              offset: 0,
              overflowScroll: true,
              before: function(section){
                if(section ===0){
                  document.querySelector("body").className=""
                }
                if(section === 1){
                  document.querySelector("body").className="step-1"
                }
                if(section === 2){
                  document.querySelector("body").className="step-2"
                }
              },
              after: function(section){}
            });
          });

          let clickCounter = 0;
          $(".brand").click(() => {
            if (clickCounter === 0) {
              $(".brand").find("path").css("fill", "#ffffff");
              clickCounter = 1;
            } else if (clickCounter === 1) {
              $(".brand").find("path").css("fill", "${brand.primaryColor}");
              clickCounter = 0;
            }
          });
        `}} />
      </body>
    </html>
  );
}
