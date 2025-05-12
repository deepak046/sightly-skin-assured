
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">AI-Powered</span> Skin & Eye Diagnostics
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            Upload an image or short video and get an instant assessment of skin conditions, 
            eye issues, and wounds. Receive personalized recommendations and determine if 
            professional medical consultation is needed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="text-base flex items-center gap-2">
              <Link to="/auth?mode=register">
                Try For Free <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base">
              <Link to="/plans">View Plans</Link>
            </Button>
          </div>
          
          <div className="mt-14 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-10 h-12 bottom-0 top-auto"></div>
            <img 
              src="https://storage.googleapis.com/lovable-images/medical-interface.png" 
              alt="MediScan Interface Demo" 
              className="mx-auto rounded-lg shadow-2xl border border-gray-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
