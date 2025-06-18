import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": pathnames.map((name, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": name.charAt(0).toUpperCase() + name.slice(1),
      "item": `https://swastikbysarang.com/${pathnames.slice(0, index + 1).join('/')}`
    }))
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <nav className="text-sm text-gray-600 mb-4 px-4">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link to="/" className="hover:text-gray-900">Home</Link>
            {pathnames.length > 0 && <span className="mx-2">/</span>}
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return (
              <li key={name} className="flex items-center">
                {isLast ? (
                  <span className="text-gray-900">{name.charAt(0).toUpperCase() + name.slice(1)}</span>
                ) : (
                  <>
                    <Link to={routeTo} className="hover:text-gray-900">
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </Link>
                    <span className="mx-2">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb; 