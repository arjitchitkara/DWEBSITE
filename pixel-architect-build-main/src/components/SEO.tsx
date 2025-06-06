import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const SEO = ({ title, description, keywords, ogImage, canonical }: SEOProps) => {
  const siteUrl = 'https://chitkaraconstructions.com';
  const defaultImage = '/opengraph-image.png';
  const defaultKeywords = 'construction company, architecture services, engineering services, construction India, architectural design, landscape architecture, construction management';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical || siteUrl} />
      <meta property="og:image" content={ogImage || defaultImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default SEO; 