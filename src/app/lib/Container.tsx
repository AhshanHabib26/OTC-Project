import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full max-w-[1320px] px-4 mx-auto my-12">{children}</div>;
};

export default Container;
