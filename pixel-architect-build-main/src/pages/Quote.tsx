
import { useEffect } from 'react';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

const QuotePage = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    document.title = "Get a Quote - Chitkara Constructions";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Quote request submitted",
      description: "We'll get back to you within 24 hours with an estimate.",
    });
  };

  return (
    <div className="min-h-screen bg-construction-dark">
      <CustomCursor />
      <Navbar />
      
      <section className="pt-32 pb-20 relative">
        <div className="noise-bg"></div>
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="heading-xl text-white mb-8">Get a <span className="text-construction-accent">Quote</span></h1>
            <p className="text-gray-300 text-lg">
              Fill out the form below to request a personalized quote for your project
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-construction-muted p-8 rounded-lg border border-construction-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-construction-dark border border-construction-border rounded-md py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-white"
                    placeholder="First name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-construction-dark border border-construction-border rounded-md py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-white"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-construction-dark border border-construction-border rounded-md py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-white"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-construction-dark border border-construction-border rounded-md py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-white"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-400 mb-2">Project Type</label>
                <select
                  id="projectType"
                  className="w-full bg-construction-dark border border-construction-border rounded-md py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-white"
                  required
                >
                  <option value="">Select project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="institutional">Institutional</option>
                  <option value="industrial">Industrial</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-400 mb-2">Estimated Budget</label>
                <select
                  id="budget"
                  className="w-full bg-construction-dark border border-construction-border rounded-md py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-white"
                >
                  <option value="">Select budget range</option>
                  <option value="under50k">Under $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="250k-500k">$250,000 - $500,000</option>
                  <option value="500k-1m">$500,000 - $1 million</option>
                  <option value="over1m">Over $1 million</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-400 mb-2">Project Timeline</label>
                <select
                  id="timeline"
                  className="w-full bg-construction-dark border border-construction-border rounded-md py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-white"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (1-2 months)</option>
                  <option value="soon">Soon (3-6 months)</option>
                  <option value="planning">Planning Phase (6-12 months)</option>
                  <option value="future">Future Project (12+ months)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-2">Project Description</label>
                <textarea
                  id="description"
                  rows={5}
                  className="w-full bg-construction-dark border border-construction-border rounded-md py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-white"
                  placeholder="Please provide details about your project requirements..."
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="btn-primary w-full">Request Quote</Button>
              
              <p className="text-sm text-gray-400 text-center mt-4">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default QuotePage;
