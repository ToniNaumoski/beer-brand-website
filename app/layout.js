import { Poppins } from "next/font/google";
import "./styles/core.css";
import brand from "../brand.config";
import BrandRuntimeScripts from "../components/BrandRuntimeScripts";

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
      className={`${poppins.variable} w-mod-js`}
      data-brand-domain="buffalo-beer"
      data-brand-page="home"
      data-brand-site="buffalo"
      suppressHydrationWarning
    >
      <head>
        {/* Critical interaction fallback CSS */}
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
        `}} />
      </head>
      <body suppressHydrationWarning>
        {children}
        <BrandRuntimeScripts />
      </body>
    </html>
  );
}
