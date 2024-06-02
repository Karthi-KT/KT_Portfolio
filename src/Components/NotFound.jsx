import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">ERROR 404</h1>
        <p className="text-2xl mb-8">Page Not Found</p>
        <a href="/" className="text-blue-500 hover:underline">
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
