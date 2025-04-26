const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full h-8 bg-green-600 text-white flex items-center justify-center">
      <p className="text-center text-sm">&copy; {year} Best-In-Town Greenery</p>
    </div>
  );
};

export default Footer;
