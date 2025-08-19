import { Link, useLocation } from "react-router-dom";

export default function Radio() {
  const location = useLocation();

  const tabs = [
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "*" },
    { name: "Contacts", path: "/contacts" },
  ];

  return (
    <div className="flex gap-6 bg-[#1a1919] px-4 py-0.5 rounded-full shadow-md">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          to={tab.path}
          className={`px-2 py-0.5 rounded-full transition-colors duration-200 
            ${location.pathname === tab.path 
              ? "bg-gray-700 text-white" 
              : "text-gray-300  hover:text-white"}`}
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
}
