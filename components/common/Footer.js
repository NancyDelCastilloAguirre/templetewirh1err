import SocialIcon from "@/components/icons/Social";

const socialLink = [
  {
    name: "Instagram",
    href: "#",
    icon: "instagram",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLink.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <div className="iconcontainer cursor-pointer w-6 h-6 text-gray-400">
                <SocialIcon type={item.icon} />
              </div>
            </a>
          ))}
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
