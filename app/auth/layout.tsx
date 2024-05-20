import React from "react";

interface layoutInterface {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: layoutInterface) => {
  return (
    <div className="h-full grid place-items-center bg-gradient-to-r from-blue-400 to-blue-500">
      {children}
    </div>
  );
};

export default AuthLayout;
