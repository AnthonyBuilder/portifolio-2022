import { Analytics } from '@vercel/analytics/react';

const PageLayout = ({ children, title, description }) => {
  return (
    <>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8762893864776699"
          crossOrigin="anonymous"
        ></script>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="description" content={description} />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <main>{children}</main>
      <Analytics />
    </>
  );
};

export default PageLayout;
