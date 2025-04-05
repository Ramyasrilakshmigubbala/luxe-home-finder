
import PropertyCard from "./PropertyCard";

const FeaturedListings = () => {
  // Mock data for featured properties
  const featuredProperties = [
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
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <span className="text-realestate-gold uppercase font-medium tracking-wide">Exclusive Selection</span>
            <h2 className="text-3xl font-bold mt-1">Featured Properties</h2>
          </div>
          <a href="/listings" className="text-realestate-blue hover:text-realestate-gold transition-colors flex items-center">
            View All Properties
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
