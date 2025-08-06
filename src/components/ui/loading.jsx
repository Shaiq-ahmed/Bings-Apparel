import React from 'react';

// Skeleton loader for content
export const Skeleton = ({ className = "", ...props }) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded ${className}`}
      {...props}
    />
  );
};

// Image loading skeleton
export const ImageSkeleton = ({ className = "w-full h-64" }) => {
  return (
    <div className={`${className} bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse rounded-lg`}>
      <div className="flex items-center justify-center h-full">
        <div className="w-8 h-8 border-4 border-gray-300 dark:border-gray-600 border-t-gray-500 dark:border-t-gray-400 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

// Spinner component
export const Spinner = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <div className="w-full h-full border-4 border-gray-200 dark:border-gray-700 border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin"></div>
    </div>
  );
};

// Full page loader
export const FullPageLoader = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-700 border-t-red-500 dark:border-t-red-400 rounded-full animate-spin"></div>
        <p className="text-gray-600 dark:text-gray-300 font-medium">{message}</p>
      </div>
    </div>
  );
};

// Content skeleton for cards
export const CardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <Skeleton className="w-full h-48" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
};

// Hero image skeleton
export const HeroSkeleton = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 animate-pulse">
        <div className="flex items-center justify-center h-full">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-gray-600 border-t-red-500 rounded-full animate-spin mx-auto"></div>
            <p className="text-gray-300 text-lg font-medium">Loading Experience...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Lazy image component with loading state
export const LazyImage = ({ src, alt, className = "", placeholder = null, ...props }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-pulse rounded-lg">
          <div className="flex items-center justify-center h-full">
            <div className="w-8 h-8 border-4 border-gray-300 dark:border-gray-600 border-t-red-500 dark:border-t-red-400 rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      
      {hasError ? (
        <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-lg">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <div className="w-12 h-12 mx-auto mb-2">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm">Image not available</p>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
}; 