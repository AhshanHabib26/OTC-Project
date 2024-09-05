import Link from "next/link";
import React from "react";

const MainPage = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <h1 className=" gradient-text text-4xl font-semibold">Welcome OTC Live Deals</h1>
      <Link className=" inline-block bg-orange-500 p-3 mt-3 text-lg text-white rounded-md" href="/items">Explore Now</Link>
    </div>
  );
};

export default MainPage;
