import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiStar } from 'react-icons/hi';
import { products } from '../../data/products';

const FeaturedProductsSection: React.FC = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="section-padding bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="text-gradient">Enterprise Products</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Production-ready SaaS solutions serving 10,000+ users worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <Link
              key={product.id}
              to={product.link || '/products'}
              className="group relative bg-white dark:bg-dark-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-dark-700 hover:border-primary-500 transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {product.popular && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-gradient-primary px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center">
                    <HiStar className="w-3 h-3 mr-1" />
                    Popular
                  </span>
                </div>
              )}
              <div
                className={`w-14 h-14 bg-gradient-to-br ${product.color.replace('text-', 'from-').replace('-600', '-600 to-').replace('-600', '-400')} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <product.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-500">
                  {product.users} users
                </span>
                <HiArrowRight className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products" className="btn-primary">
            View All 7 Products
            <HiArrowRight className="inline-block ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
