import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const defaultMetadata = {
  title:
    "Best Algo Trading Software in India | Algorithmic Trading Solutions - Elite Algo Trading",
  description:
    "Explore AI & algorithmic trading with Elite Algo Trading. Use algo trading algorithms for the forex currency market to boost your trading strategy and market performance.",
  canonical: "https://algotradingelite.com/",
};

export default function RootLayout({ children, metadata = defaultMetadata }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.canonical} />
        <link
          rel="stylesheet"
          type="text/css"
          href="/assets/css/style6572.css"
        />
        <link href="/images/fav.png" type="img/x-icon" rel="shortcut icon" />
        <meta
          name="google-site-verification"
          content="DAG0zrPA2NMfIdfK6lMRhL_5AZDx0EoK9D8u2gC2fVc"
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6CDQ7GTGL8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6CDQ7GTGL8');
            `,
          }}
        ></script>

        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '932095509119514');
              fbq('track', 'PageView');
            `,
          }}
        ></script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=932095509119514&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>
      </head>
      <body className={inter.className + " nk-body"} data-menu-collapse="lg">
        {children}
      </body>
      <script src="/assets/js/bundle6572.js"></script>
      <script src="/assets/js/scripts6572.js"></script>
    </html>
  );
}
