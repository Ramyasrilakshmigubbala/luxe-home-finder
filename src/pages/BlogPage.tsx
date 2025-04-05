
import React from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BlogPage = () => {
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "10 Features That Sell Homes Fast in Today's Market",
      excerpt: "Discover the key home features that attract buyers and can help sell your property quickly, even in a competitive market.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Selling Tips",
      author: "Sarah Johnson",
      date: "April 2, 2025",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "How to Secure the Best Mortgage Rate in 2025",
      excerpt: "With interest rates changing, learn strategies to secure favorable mortgage terms that could save you thousands over the life of your loan.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Financing",
      author: "Michael Rodriguez",
      date: "March 28, 2025",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Interior Design Trends That Increase Property Value",
      excerpt: "Explore the latest design trends that not only make your home more beautiful but also significantly increase its market value.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Interior Design",
      author: "Emily Chang",
      date: "March 21, 2025",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Rise of Smart Homes: What Buyers Want",
      excerpt: "Smart home technology is revolutionizing the real estate market. Learn what features buyers are looking for in modern homes.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Technology",
      author: "James Wilson",
      date: "March 15, 2025",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Real Estate Investment Strategies for Beginners",
      excerpt: "New to property investment? Learn foundational strategies to build wealth through real estate, from rental properties to flipping houses.",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Investment",
      author: "Robert Kim",
      date: "March 10, 2025",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Understanding Property Taxes: A Homeowner's Guide",
      excerpt: "Property taxes can be confusing. This comprehensive guide breaks down what you need to know and how to potentially reduce your tax burden.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      category: "Legal & Taxes",
      author: "Alicia Martinez",
      date: "March 5, 2025",
      readTime: "6 min read"
    }
  ];

  // Categories for filtering
  const categories = [
    "All Categories", "Buying", "Selling Tips", "Financing", 
    "Investment", "Interior Design", "Market Trends", 
    "Technology", "Legal & Taxes"
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Real Estate Blog</h1>
            <div className="flex items-center text-realestate-gray">
              <a href="/" className="hover:text-realestate-blue">Home</a>
              <span className="mx-2">/</span>
              <span>Blog</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="w-full lg:w-3/4">
              {/* Featured Post */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md mb-10">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" 
                    alt="Featured post" 
                    className="w-full h-80 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-realestate-blue">Featured</Badge>
                </div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-3">Market Trends</Badge>
                  <h2 className="text-2xl font-bold mb-3">
                    2025 Real Estate Market Forecast: What to Expect
                  </h2>
                  <p className="text-realestate-gray mb-4">
                    Our experts analyze current trends and predict what's coming for the real estate market in 2025. Get insights on price movements, interest rates, and emerging property hotspots.
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=32&q=80" 
                        alt="Author" 
                        className="w-6 h-6 rounded-full mr-2"
                      />
                      <span>By James Wilson</span>
                    </div>
                    <div className="flex items-center text-realestate-gray">
                      <span>April 5, 2025</span>
                      <span className="mx-2">•</span>
                      <span>10 min read</span>
                    </div>
                  </div>
                  <Button className="mt-4 bg-realestate-blue hover:bg-realestate-blue/90">
                    Read Article
                  </Button>
                </div>
              </div>
              
              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                      <Badge variant="outline" className="mb-2">{post.category}</Badge>
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-realestate-gray mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span>By {post.author}</span>
                        <div className="flex items-center text-realestate-gray">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-4 border-realestate-blue text-realestate-blue hover:bg-realestate-blue hover:text-white">
                        Read More
                      </Button>
                    </div>
                  </div>
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
            
            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
              {/* Search */}
              <div className="bg-white rounded-lg shadow-md p-5 mb-6">
                <h3 className="text-lg font-semibold mb-3">Search</h3>
                <div className="relative">
                  <Input placeholder="Search articles..." />
                  <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white rounded-lg shadow-md p-5 mb-6">
                <h3 className="text-lg font-semibold mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div 
                      key={index} 
                      className={`px-3 py-2 rounded-md cursor-pointer transition-colors ${
                        category === "All Categories" 
                          ? "bg-realestate-blue text-white" 
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Popular Posts */}
              <div className="bg-white rounded-lg shadow-md p-5 mb-6">
                <h3 className="text-lg font-semibold mb-3">Popular Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={`popular-${post.id}`} className="flex gap-3">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-16 h-16 rounded-md object-cover flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-medium line-clamp-2 text-sm">
                          {post.title}
                        </h4>
                        <p className="text-xs text-realestate-gray mt-1">
                          {post.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="bg-realestate-blue text-white rounded-lg shadow-md p-5">
                <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get the latest real estate news and insights delivered to your inbox.
                </p>
                <Input 
                  placeholder="Your email address" 
                  className="bg-white text-black mb-3"
                />
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-realestate-blue">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogPage;
