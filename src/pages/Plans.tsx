
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlanCard from "@/components/PlanCard";

const Plans = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for occasional use and initial assessments",
      features: [
        "3 assessments per month",
        "Image uploads only",
        "Basic condition detection",
        "Email support",
      ],
      buttonText: "Start Free",
    },
    {
      name: "Professional",
      price: "$14.99",
      description: "Ideal for regular monitoring of chronic conditions",
      features: [
        "Unlimited assessments",
        "Image & video uploads",
        "Detailed condition analysis",
        "Severity tracking over time",
        "Priority email support",
      ],
      recommended: true,
      buttonText: "Start 7-Day Free Trial",
    },
    {
      name: "Family",
      price: "$29.99",
      description: "Comprehensive coverage for the entire family",
      features: [
        "Everything in Professional",
        "Up to 5 family profiles",
        "Family history tracking",
        "Condition comparison",
        "Priority phone support",
      ],
      buttonText: "Start 7-Day Free Trial",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h1>
              <p className="text-xl text-gray-600">
                Select the subscription that best fits your needs.
                All plans come with a 100% satisfaction guarantee.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <PlanCard
                  key={index}
                  name={plan.name}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  recommended={plan.recommended}
                  buttonText={plan.buttonText}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center text-sm text-gray-500 max-w-3xl mx-auto">
              <p>
                All plans include our core AI diagnostic technology. Subscription can be canceled anytime.
                Need a custom plan for your organization? <a href="#" className="text-primary hover:underline">Contact us</a>.
              </p>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find answers to the most common questions about our plans and services.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto divide-y divide-gray-200">
              {[
                {
                  question: "How accurate is the AI diagnosis?",
                  answer: "Our AI has been trained on millions of medical images and achieves over 90% accuracy for common conditions. However, MediScan is designed as a preliminary assessment tool and not a replacement for professional medical advice."
                },
                {
                  question: "Can I cancel my subscription anytime?",
                  answer: "Yes, you can cancel your subscription at any time with no questions asked. You'll continue to have access to your plan features until the end of your billing period."
                },
                {
                  question: "Is my medical data secure and private?",
                  answer: "Absolutely. We use industry-leading encryption and security practices to protect your data. We are fully HIPAA compliant and never share your personal information with third parties without your explicit consent."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, PayPal, and Apple Pay. All payments are securely processed through our payment providers."
                },
                {
                  question: "How do I get support if I have questions?",
                  answer: "We offer email support for all users. Professional and Family plan subscribers also get priority support with faster response times and Family plan users receive phone support."
                }
              ].map((faq, index) => (
                <div key={index} className="py-6">
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Plans;
