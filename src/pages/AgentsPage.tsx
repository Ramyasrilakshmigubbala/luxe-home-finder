
import React from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const AgentsPage = () => {
  // Sample agents data
  const agents = [
    {
      id: 1,
      name: "Sarah Johnson",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      position: "Senior Property Consultant",
      experience: "8 years",
      specialty: "Luxury Homes",
      listings: 24,
      email: "sarah.j@luxehome.com",
      phone: "(555) 123-4567",
      bio: "Sarah specializes in luxury properties with over 8 years of experience in high-end real estate markets. Her attention to detail and negotiation skills have helped clients find their dream homes."
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      position: "Commercial Property Specialist",
      experience: "12 years",
      specialty: "Office Spaces & Retail",
      listings: 18,
      email: "michael.r@luxehome.com",
      phone: "(555) 234-5678",
      bio: "With 12 years in commercial real estate, Michael has helped numerous businesses find the perfect location. His knowledge of market trends and zoning regulations is unmatched."
    },
    {
      id: 3,
      name: "Emily Chang",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      position: "First-Time Buyer Consultant",
      experience: "5 years",
      specialty: "Affordable Homes",
      listings: 31,
      email: "emily.c@luxehome.com",
      phone: "(555) 345-6789",
      bio: "Emily is passionate about helping first-time buyers navigate the complex process of home purchasing. She takes pride in finding properties that match both budget and lifestyle needs."
    },
    {
      id: 4,
      name: "James Wilson",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      position: "Investment Property Advisor",
      experience: "15 years",
      specialty: "Rental Properties & ROI",
      listings: 16,
      email: "james.w@luxehome.com",
      phone: "(555) 456-7890",
      bio: "James focuses on investment properties with strong ROI potential. His background in finance helps clients make informed decisions for building profitable real estate portfolios."
    },
    {
      id: 5,
      name: "Alicia Martinez",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      position: "Luxury Condo Specialist",
      experience: "7 years",
      specialty: "Urban Living",
      listings: 22,
      email: "alicia.m@luxehome.com",
      phone: "(555) 567-8901",
      bio: "Alicia has extensive knowledge of urban properties and luxury condominiums. She understands metropolitan living and helps clients find homes that match their lifestyle."
    },
    {
      id: 6,
      name: "Robert Kim",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      position: "New Development Specialist",
      experience: "10 years",
      specialty: "Pre-Construction Sales",
      listings: 19,
      email: "robert.k@luxehome.com",
      phone: "(555) 678-9012",
      bio: "Robert specializes in new developments and pre-construction opportunities. He has a keen eye for properties with great potential and growth in value."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Our Real Estate Agents</h1>
            <div className="flex items-center text-realestate-gray">
              <a href="/" className="hover:text-realestate-blue">Home</a>
              <span className="mx-2">/</span>
              <span>Agents</span>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="mb-10 bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Input placeholder="Search agents by name or specialty..." />
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              <Button className="bg-realestate-blue hover:bg-realestate-blue/90">
                Search
              </Button>
            </div>
          </div>

          {/* Agents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex flex-col items-center mb-4">
                    <img 
                      src={agent.photo} 
                      alt={agent.name} 
                      className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-realestate-blue"
                    />
                    <h3 className="text-xl font-bold">{agent.name}</h3>
                    <p className="text-realestate-gray text-sm">{agent.position}</p>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-realestate-gray">Experience:</span>
                      <span className="font-medium">{agent.experience}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-realestate-gray">Specialty:</span>
                      <span className="font-medium">{agent.specialty}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-realestate-gray">Listings:</span>
                      <span className="font-medium">{agent.listings} Properties</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Button 
                      variant="outline" 
                      className="w-full mb-2 border-realestate-blue text-realestate-blue hover:bg-realestate-blue hover:text-white"
                    >
                      View Profile
                    </Button>
                    <Button className="w-full bg-realestate-blue hover:bg-realestate-blue/90">
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Join Our Team Section */}
          <div className="mt-16 bg-realestate-blue text-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Join Our Agent Network</h2>
            <p className="max-w-2xl mx-auto mb-6">
              Are you a real estate professional looking to take your career to the next level? Join our team of experts and gain access to premium listings and a supportive community.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-realestate-blue">
              Apply Now
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default AgentsPage;
