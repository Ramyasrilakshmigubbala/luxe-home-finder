
import { Heart, MapPin, BedDouble, Bath, MoveHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id: string;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  image: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

const PropertyCard = ({
  id,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  area,
  type,
  image,
  isNew = false,
  isFeatured = false,
}: PropertyCardProps) => {
  // Format price with commas
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(price);
  
  return (
    <div className="property-card">
      {/* Property Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        
        {/* Top left badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {isNew && (
            <Badge className="bg-realestate-gold text-black hover:bg-realestate-gold/90">New</Badge>
          )}
          {isFeatured && (
            <Badge className="bg-realestate-blue hover:bg-realestate-blue/90">Featured</Badge>
          )}
          <Badge variant="outline" className="bg-white/90 backdrop-blur-sm text-realestate-blue">
            {type}
          </Badge>
        </div>
        
        {/* Favorite button */}
        <Button 
          size="icon" 
          variant="ghost" 
          className="absolute top-4 right-4 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full"
        >
          <Heart className="h-5 w-5 text-realestate-gold" />
        </Button>
      </div>
      
      {/* Property Info */}
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold font-playfair truncate">{title}</h3>
          <span className="text-lg font-semibold text-realestate-blue">{formattedPrice}</span>
        </div>
        
        <div className="flex items-center text-realestate-gray mt-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm truncate">{location}</span>
        </div>
        
        <div className="h-px bg-gray-200 my-4" />
        
        {/* Property Features */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <BedDouble className="h-4 w-4 mr-1 text-realestate-gray" />
            <span className="text-sm text-realestate-gray">{bedrooms} Beds</span>
          </div>
          
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1 text-realestate-gray" />
            <span className="text-sm text-realestate-gray">{bathrooms} Baths</span>
          </div>
          
          <div className="flex items-center">
            <MoveHorizontal className="h-4 w-4 mr-1 text-realestate-gray" />
            <span className="text-sm text-realestate-gray">{area} sq ft</span>
          </div>
        </div>
        
        <Link to={`/property/${id}`}>
          <Button 
            className="w-full mt-4 bg-realestate-blue hover:bg-realestate-blue/90"
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
