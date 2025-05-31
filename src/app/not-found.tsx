"use client";

import { usePathname } from "next/navigation";

const NotFoundPage = () => {

  const pathname = usePathname()
  return (
    <div className='flex flex-row min-h-screen justify-center items-center'>
    <div className="text-center py-24">
      <h1 className="text-3xl font-bold">{pathname}z Not Found</h1>
      <p className="text-gray-500 mt-2">We couldn't find what you're looking for.</p>
    </div>
    </div>
  )
}

export default NotFoundPage;