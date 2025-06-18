import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Swastik by Sarang | Wedding & Fashion Photography",
  description = "Swastik by Sarang — candid wedding photography, fashion shoots, love stories & cultural moments. Explore our wedding and fashion galleries now.",
  keywords = "Swastik Photography, Sarang Photographer, wedding photographer India, fashion photography, candid photography, love stories, couple shoots",
  image = "https://swastikbysarang.com/cover.jpg",
  url = "https://swastikbysarang.com",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta name="author" content="Swastik by Sarang" />
    </Helmet>
  );
};

export default SEO; 