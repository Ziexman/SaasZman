import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
  name="description"
  content="Precedence Dube is a skilled full-stack web developer specializing in web development and React Native apps. He is also the founder of Codecrafter."
/>
<meta
  name="keywords"
  content="precedence dube, full-stack developer, web development, react native apps, codecrafter, developer portfolio, precedence dube portfolio, founder of codecrafter"
/>
<meta property="og:title" content="Precedence Dube's Portfolio" />
<meta
  property="og:description"
  content="A full-stack developer specializing in web development and React Native apps, and the founder of Codecrafter."
/>

      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Dube Precedence',
};
