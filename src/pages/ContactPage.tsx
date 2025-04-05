
import React from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Your message has been sent! We'll get back to you shortly.");
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
            <div className="flex items-center text-realestate-gray">
              <a href="/" className="hover:text-realestate-blue">Home</a>
              <span className="mx-2">/</span>
              <span>Contact</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <Input placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email Address</label>
                    <Input type="email" placeholder="Your email" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number</label>
                  <Input type="tel" placeholder="Your phone number" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Subject</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="property">Property Information</SelectItem>
                      <SelectItem value="buying">Buying a Home</SelectItem>
                      <SelectItem value="selling">Selling a Property</SelectItem>
                      <SelectItem value="agent">Speak with an Agent</SelectItem>
                      <SelectItem value="career">Career Opportunities</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <Textarea 
                    placeholder="How can we help you?" 
                    className="min-h-[120px]"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-realestate-blue hover:bg-realestate-blue/90">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-[300px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1649262117268!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
              
              {/* Office Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Our Office</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-realestate-blue mb-1">Headquarters</h4>
                    <p className="text-realestate-gray">
                      123 Fifth Avenue, Suite 1200<br />
                      New York, NY 10160
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-realestate-blue mb-1">Phone</h4>
                    <p className="text-realestate-gray">
                      Main: (555) 123-4567<br />
                      Toll-free: 1-800-LUXEHOME
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-realestate-blue mb-1">Email</h4>
                    <p className="text-realestate-gray">
                      info@luxehome.com<br />
                      support@luxehome.com
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-realestate-blue mb-1">Business Hours</h4>
                    <p className="text-realestate-gray">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Connect With Us */}
              <div className="bg-realestate-blue text-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <p className="mb-4">
                  Follow us on social media for the latest property listings, market updates, and real estate tips.
                </p>
                <div className="flex space-x-4">
                  {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
                    <Button key={platform} variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-realestate-blue">
                      {platform}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "How do I schedule a property viewing?",
                  answer: "You can schedule a viewing by contacting our team through the form above, or directly calling our office. Alternatively, many listings have a 'Schedule a Visit' option on their details page."
                },
                {
                  question: "What documents do I need to sell my property?",
                  answer: "Typically you'll need proof of ownership, property tax records, utility bills, and any relevant permits or certificates. Our agents can provide a comprehensive checklist based on your specific property."
                },
                {
                  question: "How long does the buying process take?",
                  answer: "The timeline varies depending on factors like financing, property type, and market conditions. On average, the process takes 30-60 days from offer acceptance to closing."
                },
                {
                  question: "Do you offer virtual property tours?",
                  answer: "Yes! Many of our listings include virtual tours. You can also request a live video walkthrough with one of our agents if you're unable to visit in person."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h4 className="font-bold mb-2">{faq.question}</h4>
                  <p className="text-realestate-gray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
