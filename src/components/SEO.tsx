import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
  openGraphType?: string;
  structuredData?: Record<string, any>;
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  url, 
  openGraphType = "website",
  structuredData
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={openGraphType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://i.ibb.co/TBCRvsGx/PHOTO-2026-03-18-11-58-44.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://i.ibb.co/TBCRvsGx/PHOTO-2026-03-18-11-58-44.jpg" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
