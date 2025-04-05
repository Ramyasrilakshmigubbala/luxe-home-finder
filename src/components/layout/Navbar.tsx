
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold font-playfair text-realestate-blue">
              <span className="text-realestate-gold">Luxe</span>Home
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-realestate-blue">
            Home
          </Link>
          <Link to="/listings?type=buy" className="font-medium hover:text-realestate-blue">
            Buy
          </Link>
          <Link to="/listings?type=rent" className="font-medium hover:text-realestate-blue">
            Rent
          </Link>
          <Link to="/sell" className="font-medium hover:text-realestate-blue">
            Sell
          </Link>
          <Link to="/agents" className="font-medium hover:text-realestate-blue">
            Agents
          </Link>
          <Link to="/blog" className="font-medium hover:text-realestate-blue">
            Blog
          </Link>
          <Link to="/contact" className="font-medium hover:text-realestate-blue">
            Contact
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="hidden md:flex">
            <User className="h-4 w-4 mr-2" />
            Login
          </Button>
          <Button className="hidden md:flex bg-realestate-blue hover:bg-realestate-blue/90">
            Sign Up
          </Button>
          
          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <Link to="/" className="w-full">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/listings?type=buy" className="w-full">Buy</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/listings?type=rent" className="w-full">Rent</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/sell" className="w-full">Sell</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/agents" className="w-full">Agents</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/blog" className="w-full">Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/contact" className="w-full">Contact</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/login" className="w-full">Login</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
