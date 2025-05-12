
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell, User, LogOut, Upload, History, Settings, 
  CreditCard, BadgeCheck 
} from "lucide-react";
import UploadZone from "@/components/UploadZone";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("upload");
  
  // Simulate logged in user - in real app, this would come from auth context
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    plan: "Professional",
    since: "Jan 2023"
  };
  
  const handleLogout = () => {
    // In a real app, this would clear authentication state
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold gradient-text">MediScan</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Bell size={20} />
            </button>
            
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                {user.name.charAt(0)}
              </div>
              <span className="ml-2 font-medium hidden md:block">{user.name}</span>
            </div>
          </div>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
              <div className="p-5 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium">{user.name}</h3>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium flex items-center gap-1">
                    <BadgeCheck size={16} className="text-primary" />
                    {user.plan} Plan
                  </span>
                  <Button variant="link" size="sm" asChild className="text-xs p-0 h-auto">
                    <a href="/plans">Upgrade</a>
                  </Button>
                </div>
                <p className="text-xs text-gray-500">Member since {user.since}</p>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <ul>
                <li>
                  <button 
                    className={`w-full flex items-center px-4 py-3 text-sm ${activeTab === "upload" ? "bg-accent text-primary font-medium" : "text-gray-700 hover:bg-gray-50"}`}
                    onClick={() => setActiveTab("upload")}
                  >
                    <Upload size={18} className="mr-3" />
                    New Upload
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full flex items-center px-4 py-3 text-sm ${activeTab === "history" ? "bg-accent text-primary font-medium" : "text-gray-700 hover:bg-gray-50"}`}
                    onClick={() => setActiveTab("history")}
                  >
                    <History size={18} className="mr-3" />
                    History
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full flex items-center px-4 py-3 text-sm ${activeTab === "subscription" ? "bg-accent text-primary font-medium" : "text-gray-700 hover:bg-gray-50"}`}
                    onClick={() => setActiveTab("subscription")}
                  >
                    <CreditCard size={18} className="mr-3" />
                    Subscription
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full flex items-center px-4 py-3 text-sm ${activeTab === "profile" ? "bg-accent text-primary font-medium" : "text-gray-700 hover:bg-gray-50"}`}
                    onClick={() => setActiveTab("profile")}
                  >
                    <User size={18} className="mr-3" />
                    Profile
                  </button>
                </li>
                <li>
                  <button 
                    className={`w-full flex items-center px-4 py-3 text-sm ${activeTab === "settings" ? "bg-accent text-primary font-medium" : "text-gray-700 hover:bg-gray-50"}`}
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings size={18} className="mr-3" />
                    Settings
                  </button>
                </li>
                <li className="border-t border-gray-200">
                  <button 
                    className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={handleLogout}
                  >
                    <LogOut size={18} className="mr-3" />
                    Logout
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Main content */}
          <div className="flex-1 bg-white rounded-lg border border-gray-200 p-6">
            {activeTab === "upload" && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Upload New Image or Video</h2>
                <UploadZone />
              </div>
            )}
            
            {activeTab === "history" && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Upload History</h2>
                <div className="text-gray-500 text-sm p-8 text-center border-2 border-dashed rounded-lg">
                  <p>No previous uploads found.</p>
                </div>
              </div>
            )}
            
            {activeTab === "subscription" && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Subscription Management</h2>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                      <CreditCard size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium">Current Plan: {user.plan}</h3>
                      <p className="text-sm text-gray-500">Your subscription renews on January 31, 2025</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-medium mb-4">Available Plans</h3>
                <Tabs defaultValue="monthly" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="yearly">Yearly (Save 20%)</TabsTrigger>
                  </TabsList>
                  <TabsContent value="monthly" className="space-y-4">
                    {[
                      { name: "Basic", price: "Free", current: false },
                      { name: "Professional", price: "$14.99/month", current: true },
                      { name: "Family", price: "$29.99/month", current: false }
                    ].map((plan, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg border flex items-center justify-between ${plan.current ? "border-primary bg-accent/20" : "border-gray-200"}`}
                      >
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-medium">{plan.name}</h4>
                            {plan.current && (
                              <span className="ml-2 bg-primary text-white text-xs py-1 px-2 rounded-full">
                                Current Plan
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600">{plan.price}</p>
                        </div>
                        
                        {plan.current ? (
                          <Button variant="outline">Cancel Plan</Button>
                        ) : (
                          <Button variant={plan.name === "Basic" ? "outline" : "default"}>
                            {plan.name === "Basic" ? "Downgrade" : "Upgrade"}
                          </Button>
                        )}
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="yearly" className="space-y-4">
                    {[
                      { name: "Basic", price: "Free", current: false },
                      { name: "Professional", price: "$143.90/year", current: true, saving: "Save $36" },
                      { name: "Family", price: "$287.90/year", current: false, saving: "Save $72" }
                    ].map((plan, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg border flex items-center justify-between ${plan.current ? "border-primary bg-accent/20" : "border-gray-200"}`}
                      >
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-medium">{plan.name}</h4>
                            {plan.current && (
                              <span className="ml-2 bg-primary text-white text-xs py-1 px-2 rounded-full">
                                Current Plan
                              </span>
                            )}
                          </div>
                          <div className="flex items-center">
                            <p className="text-gray-600">{plan.price}</p>
                            {plan.saving && (
                              <span className="ml-2 text-green-600 text-xs">{plan.saving}</span>
                            )}
                          </div>
                        </div>
                        
                        {plan.current ? (
                          <Button variant="outline">Cancel Plan</Button>
                        ) : (
                          <Button variant={plan.name === "Basic" ? "outline" : "default"}>
                            {plan.name === "Basic" ? "Downgrade" : "Upgrade"}
                          </Button>
                        )}
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
                
                <p className="text-sm text-gray-500 mt-6">
                  Need help with your subscription? <a href="#" className="text-primary hover:underline">Contact support</a>.
                </p>
              </div>
            )}
            
            {activeTab === "profile" && (
              <div>
                <h2 className="text-xl font-semibold mb-6">My Profile</h2>
                
                <div className="space-y-6 max-w-md">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md" 
                      defaultValue={user.name}
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md" 
                      defaultValue={user.email}
                    />
                  </div>
                  
                  <Button>Save Changes</Button>
                </div>
              </div>
            )}
            
            {activeTab === "settings" && (
              <div>
                <h2 className="text-xl font-semibold mb-6">Settings</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-lg mb-3">Account Preferences</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md border border-gray-200">
                        <div>
                          <h4 className="font-medium">Email Notifications</h4>
                          <p className="text-sm text-gray-600">Receive emails about your account activity</p>
                        </div>
                        <div className="flex items-center h-6">
                          <input type="checkbox" className="h-4 w-4" defaultChecked />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-md border border-gray-200">
                        <div>
                          <h4 className="font-medium">Two-Factor Authentication</h4>
                          <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                        </div>
                        <Button variant="outline" size="sm">Enable</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg mb-3">Password</h3>
                    
                    <div className="space-y-4 max-w-md">
                      <div className="space-y-1">
                        <label htmlFor="current-password" className="text-sm font-medium">Current Password</label>
                        <input 
                          type="password" 
                          id="current-password" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md" 
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label htmlFor="new-password" className="text-sm font-medium">New Password</label>
                        <input 
                          type="password" 
                          id="new-password" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md" 
                        />
                      </div>
                      
                      <div className="space-y-1">
                        <label htmlFor="confirm-password" className="text-sm font-medium">Confirm Password</label>
                        <input 
                          type="password" 
                          id="confirm-password" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md" 
                        />
                      </div>
                      
                      <Button>Update Password</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
