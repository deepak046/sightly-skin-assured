
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PlanCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  buttonText: string;
}

const PlanCard = ({
  name,
  price,
  description,
  features,
  recommended = false,
  buttonText
}: PlanCardProps) => {
  return (
    <div className={cn(
      "bg-white rounded-lg border transition-all",
      recommended 
        ? "border-primary shadow-lg shadow-primary/10 scale-105" 
        : "border-gray-200 hover:border-primary/50"
    )}>
      {recommended && (
        <div className="bg-primary text-primary-foreground text-center py-1 rounded-t-lg text-sm font-medium">
          Recommended
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="mt-4 mb-2">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Free" && <span className="text-gray-500 ml-1">/month</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          asChild 
          className="w-full" 
          variant={recommended ? "default" : "outline"}
        >
          <Link to="/auth?mode=register">{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};

export default PlanCard;
