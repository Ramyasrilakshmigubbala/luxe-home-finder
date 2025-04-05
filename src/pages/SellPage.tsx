
import React from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const SellPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Property listing submitted successfully! Our team will review and get back to you shortly.");
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">List Your Property</h1>
            <div className="flex items-center text-realestate-gray">
              <a href="/" className="hover:text-realestate-blue">Home</a>
              <span className="mx-2">/</span>
              <span>Sell</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="col-span-1 lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-6">Property Details</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">Property Type</label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="house">House</SelectItem>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="villa">Villa</SelectItem>
                          <SelectItem value="condo">Condo</SelectItem>
                          <SelectItem value="townhouse">Townhouse</SelectItem>
                          <SelectItem value="land">Plot/Land</SelectItem>
                          <SelectItem value="commercial">Commercial</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Property Status</label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sale">For Sale</SelectItem>
                          <SelectItem value="rent">For Rent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Property Title</label>
                      <Input placeholder="e.g., Modern 3BHK Villa in Whitefield" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Price (USD)</label>
                      <Input type="number" placeholder="Property price" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Area (sqft)</label>
                      <Input type="number" placeholder="Property area" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Bedrooms</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select bedrooms" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, '5+'].map((num) => (
                            <SelectItem key={num} value={String(num)}>{num}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Bathrooms</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select bathrooms" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, '5+'].map((num) => (
                            <SelectItem key={num} value={String(num)}>{num}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Year Built</label>
                      <Input type="number" placeholder="e.g., 2020" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Address</label>
                    <Input placeholder="Full property address" required />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">City</label>
                      <Input placeholder="City" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">State/Province</label>
                      <Input placeholder="State/Province" required />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Postal/ZIP Code</label>
                      <Input placeholder="ZIP Code" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Country</label>
                      <Input placeholder="Country" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Property Description</label>
                    <Textarea 
                      placeholder="Describe your property in detail..." 
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Property Features</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {['Swimming Pool', 'Garage', 'Garden', 'Air Conditioning', 'Gym', 
                        'Internet', 'Balcony', 'Security System', 'Parking', 'Furnished'].map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <Checkbox id={feature.toLowerCase().replace(/\s/g, '-')} />
                          <label 
                            htmlFor={feature.toLowerCase().replace(/\s/g, '-')}
                            className="text-sm cursor-pointer"
                          >
                            {feature}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-3">Upload Images</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <p className="text-gray-500 mb-2">Drag and drop image files here, or click to select files</p>
                      <p className="text-xs text-gray-400">Max 10 images, 2MB each (JPG, PNG)</p>
                      <Button type="button" variant="outline" className="mt-4">Select Files</Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-1">Your Name</label>
                        <Input placeholder="Full name" required />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <Input type="email" placeholder="Email address" required />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Phone</label>
                        <Input type="tel" placeholder="Phone number" required />
                      </div>
                      
                      <div className="flex items-center space-x-2 mt-4">
                        <Checkbox id="terms" required />
                        <label htmlFor="terms" className="text-sm cursor-pointer">
                          I agree to the <a href="#" className="text-realestate-blue hover:underline">terms and conditions</a>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button type="submit" className="w-full bg-realestate-blue hover:bg-realestate-blue/90">
                      Submit Property
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Listing Guidelines</h3>
                <ul className="space-y-3 text-realestate-gray">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Provide accurate and detailed information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Upload high-quality images (min. 1200x800px)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Be responsive to inquiries from potential buyers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Keep your listing updated with current status</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
                <p className="text-realestate-gray mb-4">
                  Our team is available to assist you with your property listing.
                </p>
                <Button variant="outline" className="w-full mb-3">
                  Contact Support
                </Button>
                <p className="text-sm text-center text-realestate-gray">
                  Call us: (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SellPage;
