
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero = () => {
  const [propertyType, setPropertyType] = useState("all");
  const [location, setLocation] = useState("");

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2100&q=80')` 
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-10 hero-gradient" />
      
      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 text-white">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Discover the perfect property that matches your lifestyle and aspirations with our extensive listing of premium real estate options.
          </p>
          
          {/* Search Form */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Select 
                  value={propertyType} 
                  onValueChange={setPropertyType}
                >
                  <SelectTrigger className="hero-search-input">
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Property Types</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Input
                  type="text"
                  placeholder="Location (City, Zip Code)"
                  className="hero-search-input"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              
              <Button className="bg-realestate-gold hover:bg-realestate-gold/90 text-black h-10 px-6">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                2+ Bedrooms
              </Button>
              <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                Luxury
              </Button>
              <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                Waterfront
              </Button>
              <Button variant="outline" size="sm" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                New Construction
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
