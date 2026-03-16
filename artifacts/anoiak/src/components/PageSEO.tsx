import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title: string;
  description: string;
}

export function PageSEO({ title, description }: PageSEOProps) {
  const siteName = "Anoiak";
  const fullTitle = `${title} | ${siteName} — Premium Consultancy`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
