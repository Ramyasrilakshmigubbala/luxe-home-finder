
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import PropertyCard from "@/components/home/PropertyCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter, Grid, List } from "lucide-react";

const ListingsPage = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Mock data for properties - same as featured listings
  const properties = [
    {
      id: "prop1",
      title: "Modern Lakefront Villa",
      price: 1250000,
      location: "Lake View, Seattle, WA",
      bedrooms: 4,
      bathrooms: 3,
      area: 3200,
      type: "Villa",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      isNew: true,
      isFeatured: true,
    },
    {
      id: "prop2",
      title: "Luxury Downtown Penthouse",
      price: 2100000,
      location: "Financial District, New York, NY",
      bedrooms: 3,
      bathrooms: 2.5,
      area: 2800,
      type: "Penthouse",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      isFeatured: true,
    },
    {
      id: "prop3",
      title: "Beachfront Luxury Condo",
      price: 950000,
      location: "Ocean Drive, Miami, FL",
      bedrooms: 2,
      bathrooms: 2,
      area: 1800,
      type: "Condo",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      isNew: true,
    },
    {
      id: "prop4",
      title: "Contemporary Suburban Home",
      price: 780000,
      location: "Highland Park, Dallas, TX",
      bedrooms: 4,
      bathrooms: 3.5,
      area: 2900,
      type: "House",
      image: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      isFeatured: true,
    },
    {
      id: "prop5",
      title: "Hillside Retreat with Views",
      price: 1450000,
      location: "Hollywood Hills, Los Angeles, CA",
      bedrooms: 3,
      bathrooms: 2,
      area: 2400,
      type: "House",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      isNew: true,
    },
    {
      id: "prop6",
      title: "Historic Brownstone Townhouse",
      price: 3200000,
      location: "Brooklyn Heights, New York, NY",
      bedrooms: 5,
      bathrooms: 3,
      area: 4200,
      type: "Townhouse",
      image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      isFeatured: true,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Property Listings</h1>
            <div className="flex items-center text-realestate-gray">
              <a href="/" className="hover:text-realestate-blue">Home</a>
              <span className="mx-2">/</span>
              <span>Properties</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="w-full lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Filters</h2>
                  <Button variant="ghost" size="sm" className="text-gray-500">
                    <Filter className="h-4 w-4 mr-1" />
                    Reset
                  </Button>
                </div>
                
                {/* Search Input */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1">Search</label>
                  <div className="relative">
                    <Input placeholder="Search properties..." />
                    <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                  </div>
                </div>
                
                {/* Property Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1">Property Type</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Properties</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1">Price Range</label>
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <span>$100,000</span>
                    <span>$5,000,000+</span>
                  </div>
                  <Slider defaultValue={[25]} max={100} step={1} />
                </div>
                
                {/* Bedrooms */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1">Bedrooms</label>
                  <div className="grid grid-cols-6 gap-2">
                    {['Any', '1', '2', '3', '4', '5+'].map((num) => (
                      <Button 
                        key={num}
                        variant={num === 'Any' ? "default" : "outline"}
                        size="sm"
                        className={num === 'Any' ? "bg-realestate-blue" : ""}
                      >
                        {num}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {/* Bathrooms */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1">Bathrooms</label>
                  <div className="grid grid-cols-6 gap-2">
                    {['Any', '1', '2', '3', '4', '5+'].map((num) => (
                      <Button 
                        key={num}
                        variant="outline"
                        size="sm"
                      >
                        {num}
                      </Button>
                    ))}
                  </div>
                </div>
                
                {/* Features */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1">Features</label>
                  <div className="space-y-2">
                    {['Swimming Pool', 'Garden', 'Garage', 'Air Conditioning', 'Gym'].map((feature) => (
                      <div key={feature} className="flex items-center">
                        <Checkbox id={feature.toLowerCase().replace(/\s/g, '-')} />
                        <label 
                          htmlFor={feature.toLowerCase().replace(/\s/g, '-')}
                          className="ml-2 text-sm cursor-pointer"
                        >
                          {feature}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-realestate-blue hover:bg-realestate-blue/90">
                  Apply Filters
                </Button>
              </div>
            </aside>
            
            {/* Listings Grid */}
            <div className="w-full lg:w-3/4">
              {/* Results Header */}
              <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
                <div>
                  <span className="text-realestate-gray">Showing 1-6 of 24 properties</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Select defaultValue="recommended">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">Recommended</SelectItem>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex bg-white rounded-md shadow-sm">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className={`rounded-r-none ${viewMode === 'grid' ? 'bg-realestate-blue text-white' : ''}`}
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className={`rounded-l-none ${viewMode === 'list' ? 'bg-realestate-blue text-white' : ''}`}
                      onClick={() => setViewMode('list')}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Properties Grid */}
              <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'} gap-6`}>
                {properties.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-10">
                <div className="flex space-x-1">
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                    &lt;
                  </Button>
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0 bg-realestate-blue text-white">
                    1
                  </Button>
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                    2
                  </Button>
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                    3
                  </Button>
                  <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                    &gt;
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ListingsPage;
