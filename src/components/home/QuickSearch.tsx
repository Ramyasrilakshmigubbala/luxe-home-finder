
import { Home, Building2, Building, Landmark, Trees } from "lucide-react";
import { Link } from "react-router-dom";

const QuickSearch = () => {
  const categories = [
    { 
      title: "Buy a Home", 
      icon: Home, 
      link: "/listings?type=buy", 
      color: "bg-blue-50 text-realestate-blue",
      hoverColor: "hover:bg-blue-100"
    },
    { 
      title: "Rent an Apartment", 
      icon: Building2, 
      link: "/listings?type=rent", 
      color: "bg-amber-50 text-amber-700",
      hoverColor: "hover:bg-amber-100"
    },
    { 
      title: "New Projects", 
      icon: Building, 
      link: "/projects", 
      color: "bg-emerald-50 text-emerald-700",
      hoverColor: "hover:bg-emerald-100"
    },
    { 
      title: "Commercial Spaces", 
      icon: Landmark, 
      link: "/listings?type=commercial", 
      color: "bg-purple-50 text-purple-700",
      hoverColor: "hover:bg-purple-100"
    },
    { 
      title: "Plots & Lands", 
      icon: Trees, 
      link: "/listings?type=land", 
      color: "bg-green-50 text-green-700",
      hoverColor: "hover:bg-green-100"
    }
  ];
  
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Quick Property Search</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link 
              to={category.link} 
              key={index}
              className={`flex flex-col items-center justify-center p-6 rounded-xl shadow-sm transition-all duration-300 ${category.color} ${category.hoverColor}`}
            >
              <category.icon className="h-10 w-10 mb-4" />
              <span className="text-center font-medium">{category.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickSearch;
