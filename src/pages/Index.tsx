
import { Camera, Shield, Stethoscope, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        {/* Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">How MediScan Works</h2>
              <p className="text-gray-600">
                Our AI-powered platform makes it easy to assess skin conditions, eye issues, and wounds with just a few clicks.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard 
                icon={Camera}
                title="Quick Capture"
                description="Upload an image or record a short video of the affected area directly from your device."
              />
              <FeatureCard 
                icon={Stethoscope}
                title="AI Analysis"
                description="Our advanced AI analyzes the visuals to identify common skin, eye, and wound conditions."
              />
              <FeatureCard 
                icon={Shield}
                title="Severity Assessment"
                description="Get a detailed severity assessment and understand the urgency of your condition."
              />
              <FeatureCard 
                icon={Clock}
                title="Instant Results"
                description="Receive instant results and recommendations on whether professional care is needed."
              />
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Trusted by Patients and Doctors</h2>
              <p className="text-gray-600">
                See what our users have to say about their experience with MediScan.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Patient",
                  quote: "MediScan helped me identify my eczema flare-up and gave me peace of mind that I didn't need to rush to the ER.",
                },
                {
                  name: "Dr. Michael Chen",
                  role: "Dermatologist",
                  quote: "I recommend MediScan to my patients for initial assessment. The AI is surprisingly accurate for common conditions.",
                },
                {
                  name: "Robert Williams",
                  role: "Patient",
                  quote: "After a hiking accident, MediScan assessed my wound and recommended immediate medical attention, potentially preventing infection.",
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full bg-gray-200"></div>
                    <div className="ml-4">
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to try MediScan?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Create your account now and get instant access to our AI-powered diagnostic tools.
            </p>
            <a 
              href="/auth?mode=register" 
              className="bg-white text-primary font-medium py-3 px-6 rounded-md hover:bg-gray-100 transition-colors"
            >
              Start Your Free Trial
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
