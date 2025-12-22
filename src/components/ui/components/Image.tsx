import React, { forwardRef, useState, useEffect } from 'react';
import { ImageProps } from '../../../types';

const Image = forwardRef<HTMLImageElement, ImageProps>(({
  src,
  alt,
  className = '',
  loading = 'lazy',
  width,
  height,
  onLoad,
  onError,
  placeholder,
  blurDataURL,
  ...props
}, ref) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    if (onLoad) onLoad(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setHasError(true);
    setIsLoading(false);
    if (onError) onError(e);
  };

  // Use blurDataURL as placeholder if available
  const placeholderSrc = blurDataURL || placeholder;

  // Warn if alt text is missing (for development)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && !alt) {
      console.warn('Image component missing alt prop:', src);
    }
  }, [alt, src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && placeholderSrc && (
        <img
          src={placeholderSrc}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover filter blur-sm scale-105 ${className}`}
          width={width}
          height={height}
          aria-hidden="true"
        />
      )}
      
      <img
        ref={ref}
        src={imgSrc}
        alt={alt}
        className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 ${className}`}
        loading={loading}
        width={width}
        height={height}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-dark-800">
          <div className="text-gray-400 dark:text-gray-600 text-center">
            <svg 
              className="w-12 h-12 mx-auto mb-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm">Failed to load image</span>
          </div>
        </div>
      )}
    </div>
  );
});

Image.displayName = 'Image';

export default Image;