const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="absolute bottom-0 h-10 w-full text-center">
      <p className="text-gray-2">Copyright © {currentYear}</p>
    </footer>
  );
};

export default Footer;
