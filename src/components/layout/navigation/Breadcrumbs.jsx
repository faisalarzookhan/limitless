import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="flex px-6 md:px-10 py-4 max-w-7xl mx-auto" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-[0.6rem] font-black uppercase tracking-widest text-gray-500 hover:text-[#1ba6d6] transition-colors"
          >
            <Home className="w-3 h-3 mr-2" />
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={to}>
              <div className="flex items-center">
                <ChevronRight className="w-3 h-3 text-gray-700 mx-1" />
                {last ? (
                  <span className="text-[0.6rem] font-black uppercase tracking-widest text-[#1ba6d6]">
                    {value.replace(/-/g, ' ')}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="text-[0.6rem] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                  >
                    {value.replace(/-/g, ' ')}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
