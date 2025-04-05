
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Calendar, Heart, Share2, BedDouble, Bath, MoveHorizontal, MapPin, Phone, Mail } from "lucide-react";

const PropertyDetail = () => {
  const { id } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Mock property data based on id - in a real app you'd fetch this from an API
  const property = {
    id: "prop1",
    title: "Modern Lakefront Villa",
    description: "This stunning modern villa offers breathtaking views of the lake and mountains. Featuring an open floor plan with floor-to-ceiling windows, this property seamlessly blends indoor and outdoor living. The gourmet kitchen includes top-of-the-line appliances, custom cabinetry, and a large island perfect for entertaining. The primary suite boasts a spa-like bathroom and private balcony. Additional features include a home theater, wine cellar, and a heated infinity pool overlooking the lake.",
    price: 1250000,
    location: "Lake View, Seattle, WA",
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    type: "Villa",
    status: "For Sale",
    builtYear: 2018,
    parking: 2,
    amenities: ["Swimming Pool", "Home Theater", "Wine Cellar", "Smart Home", "Gated Community", "Waterfront", "Central AC", "Security System", "Garden", "Fireplace"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1604014238170-4def1e4e6fcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80"
    ],
    agent: {
      name: "Sarah Johnson",
      phone: "+1 (555) 987-6543",
      email: "sarah@luxehome.com",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <div className="flex items-center text-sm text-realestate-gray">
              <a href="/" className="hover:text-realestate-blue">Home</a>
              <span className="mx-2">/</span>
              <a href="/listings" className="hover:text-realestate-blue">Properties</a>
              <span className="mx-2">/</span>
              <span className="text-realestate-blue">{property.title}</span>
            </div>
          </div>

          {/* Property Header */}
          <div className="flex flex-wrap justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <div className="flex items-center text-realestate-gray">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="mt-4 sm:mt-0">
              <div className="text-3xl font-bold text-realestate-blue">
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                }).format(property.price)}
              </div>
              <span className="text-realestate-gray">{property.status}</span>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mb-10">
            <div className="relative h-[500px] mb-4 overflow-hidden rounded-lg">
              <img 
                src={property.images[activeImageIndex]} 
                alt={`${property.title} - Image ${activeImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-white/80 hover:bg-white backdrop-blur-sm rounded-full"
                  onClick={() => {
                    setActiveImageIndex((prev) => 
                      prev === 0 ? property.images.length - 1 : prev - 1
                    );
                  }}
                >
                  &lt;
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-white/80 hover:bg-white backdrop-blur-sm rounded-full"
                  onClick={() => {
                    setActiveImageIndex((prev) => 
                      prev === property.images.length - 1 ? 0 : prev + 1
                    );
                  }}
                >
                  &gt;
                </Button>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-white/80 hover:bg-white backdrop-blur-sm rounded-full"
                >
                  <Heart className="h-4 w-4 text-red-500" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-white/80 hover:bg-white backdrop-blur-sm rounded-full"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {property.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`h-24 rounded-md overflow-hidden cursor-pointer transition-all ${activeImageIndex === index ? 'ring-2 ring-realestate-blue' : 'opacity-70 hover:opacity-100'}`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img 
                    src={image} 
                    alt={`${property.title} - Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Property Details */}
            <div className="w-full lg:w-2/3">
              {/* Property Features */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <BedDouble className="h-6 w-6 text-realestate-blue" />
                    </div>
                    <div className="text-lg font-semibold">{property.bedrooms}</div>
                    <div className="text-sm text-realestate-gray">Bedrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <Bath className="h-6 w-6 text-realestate-blue" />
                    </div>
                    <div className="text-lg font-semibold">{property.bathrooms}</div>
                    <div className="text-sm text-realestate-gray">Bathrooms</div>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <MoveHorizontal className="h-6 w-6 text-realestate-blue" />
                    </div>
                    <div className="text-lg font-semibold">{property.area}</div>
                    <div className="text-sm text-realestate-gray">Sq Ft</div>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <Calendar className="h-6 w-6 text-realestate-blue" />
                    </div>
                    <div className="text-lg font-semibold">{property.builtYear}</div>
                    <div className="text-sm text-realestate-gray">Year Built</div>
                  </div>
                </div>
              </div>

              {/* Tabs for Details */}
              <div className="bg-white rounded-lg shadow-md mb-8">
                <Tabs defaultValue="description">
                  <TabsList className="border-b w-full justify-start rounded-none p-0">
                    <TabsTrigger 
                      value="description" 
                      className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-realestate-blue data-[state=active]:shadow-none"
                    >
                      Description
                    </TabsTrigger>
                    <TabsTrigger 
                      value="details"
                      className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-realestate-blue data-[state=active]:shadow-none"
                    >
                      Details
                    </TabsTrigger>
                    <TabsTrigger 
                      value="amenities"
                      className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-realestate-blue data-[state=active]:shadow-none"
                    >
                      Amenities
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="description" className="p-6">
                    <p className="text-realestate-gray leading-relaxed whitespace-pre-line">
                      {property.description}
                    </p>
                  </TabsContent>
                  <TabsContent value="details" className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-realestate-gray">Property ID</span>
                        <span className="font-medium">{property.id}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-realestate-gray">Property Type</span>
                        <span className="font-medium">{property.type}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-realestate-gray">Property Status</span>
                        <span className="font-medium">{property.status}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-realestate-gray">Property Price</span>
                        <span className="font-medium">{new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                          minimumFractionDigits: 0,
                        }).format(property.price)}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-realestate-gray">Bedrooms</span>
                        <span className="font-medium">{property.bedrooms}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-realestate-gray">Bathrooms</span>
                        <span className="font-medium">{property.bathrooms}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-realestate-gray">Property Size</span>
                        <span className="font-medium">{property.area} sq ft</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-realestate-gray">Year Built</span>
                        <span className="font-medium">{property.builtYear}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-realestate-gray">Parking</span>
                        <span className="font-medium">{property.parking} Cars</span>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="amenities" className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {property.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center">
                          <div className="h-2 w-2 bg-realestate-blue rounded-full mr-2"></div>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Location Map */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <div className="h-[300px] bg-gray-100 rounded-lg mb-4">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86818.83830608557!2d-122.36087466980415!3d47.614851367857156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1657254320867!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy"
                    title="Property Location"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <p className="text-realestate-gray">
                  <MapPin className="h-4 w-4 inline mr-1" />
                  {property.location}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              {/* Agent Card */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img 
                      src={property.agent.image} 
                      alt={property.agent.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{property.agent.name}</h3>
                    <p className="text-sm text-realestate-gray">Real Estate Agent</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-realestate-gray" />
                    <span>{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-realestate-gray" />
                    <span>{property.agent.email}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <Button className="w-full bg-realestate-blue hover:bg-realestate-blue/90">
                    Contact Agent
                  </Button>
                  <Button variant="outline" className="w-full">
                    Schedule Viewing
                  </Button>
                </div>
              </div>

              {/* Property Inquiry Form */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Request Information</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-realestate-blue"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-realestate-blue"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-realestate-blue"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-realestate-blue"
                      rows={4}
                      placeholder="I'm interested in this property..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-realestate-gold hover:bg-realestate-gold/90 text-black">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PropertyDetail;
