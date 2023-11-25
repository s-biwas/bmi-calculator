import React from "react";

const Footer: React.FC = () => {
  const companyName = "biwas";
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" flex text-white py-6">
      <div className="container ">
        <p className="text-sm">
          &copy; {currentYear} {companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
