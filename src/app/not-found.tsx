"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NotFoundPage = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4 py-24">
      <h1 className="text-5xl font-extrabold text-lamaPurple mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        { pathname } path Not Found
      </h2>
      <p className="text-gray-500 mb-6">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/admin"
        className="inline-block px-6 py-2 bg-lamaSky hover:bg-lamaSkyLight text-black font-medium rounded-md shadow transition"
      >
        Go Back to Dashboard
      </Link>
    </div>
  );
};

export default NotFoundPage;
