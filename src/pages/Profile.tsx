
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Profile = () => {
  // Simulate user data - in real app, this would come from auth context
  const [user, setUser] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "+1 (555) 123-4567"
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error", text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage({ type: "success", text: "Profile updated successfully!" });
    } catch (error) {
      setMessage({ type: "error", text: "Failed to update profile. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage({ type: "success", text: "Password updated successfully!" });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    } catch (error) {
      setMessage({ type: "error", text: "Failed to update password. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-gray-50 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold mb-8">My Profile</h1>
          
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <Tabs defaultValue="info">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="info">Personal Information</TabsTrigger>
                  <TabsTrigger value="security">Password & Security</TabsTrigger>
                </TabsList>
                
                {message && (
                  <Alert 
                    variant={message.type === "success" ? "default" : "destructive"} 
                    className="mt-6"
                  >
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{message.text}</AlertDescription>
                  </Alert>
                )}
                
                <TabsContent value="info" className="space-y-6 mt-6">
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          value={user.name}
                          onChange={(e) => setUser({...user, name: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={user.email}
                          onChange={(e) => setUser({...user, email: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={user.phone}
                          onChange={(e) => setUser({...user, phone: e.target.value})}
                        />
                      </div>
                      
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? "Saving..." : "Save Changes"}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="security" className="space-y-6 mt-6">
                  <form onSubmit={handlePasswordChange}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="current-password" className="block text-sm font-medium">
                          Current Password
                        </label>
                        <Input
                          id="current-password"
                          type="password"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="new-password" className="block text-sm font-medium">
                          New Password
                        </label>
                        <Input
                          id="new-password"
                          type="password"
                          required
                        />
                        <p className="text-xs text-gray-500">
                          Use at least 8 characters with a mix of letters, numbers & symbols
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="confirm-password" className="block text-sm font-medium">
                          Confirm New Password
                        </label>
                        <Input
                          id="confirm-password"
                          type="password"
                          required
                        />
                      </div>
                      
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? "Updating..." : "Update Password"}
                      </Button>
                    </div>
                  </form>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
                    <p className="text-gray-600 mb-4">
                      Add an extra layer of security to your account by requiring both your 
                      password and a verification code from your mobile device.
                    </p>
                    <Button variant="outline">Enable 2FA</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="bg-white shadow rounded-lg overflow-hidden mt-6">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-medium">Danger Zone</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <Button variant="destructive">Delete Account</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
