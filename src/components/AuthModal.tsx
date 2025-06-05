
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Truck, ShoppingCart, Sprout, Shield, Mail, Globe } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface AuthModalProps {
  onClose: () => void;
  onLogin: (role: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState('buyer');

  const roles = [
    {
      id: 'farmer',
      title: 'Farmer/Producer',
      description: 'Sell your agricultural products directly to buyers',
      icon: Sprout,
      color: 'bg-green-100 text-green-700 border-green-200'
    },
    {
      id: 'buyer',
      title: 'Buyer/Retailer',
      description: 'Purchase fresh products with full traceability',
      icon: ShoppingCart,
      color: 'bg-blue-100 text-blue-700 border-blue-200'
    },
    {
      id: 'transporter',
      title: 'Transporter',
      description: 'Provide logistics and delivery services',
      icon: Truck,
      color: 'bg-orange-100 text-orange-700 border-orange-200'
    }
  ];

  const handleZkLogin = async (provider: string) => {
    setIsLoading(true);
    
    // Simulate zkLogin process
    setTimeout(() => {
      toast({
        title: "Welcome to SuiTrace!",
        description: `Successfully signed in with ${provider} as ${selectedRole}`,
      });
      onLogin(selectedRole);
      setIsLoading(false);
    }, 1500);
  };

  const handleEmailLogin = async () => {
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate email login
    setTimeout(() => {
      toast({
        title: "Welcome to SuiTrace!",
        description: `Successfully signed in as ${selectedRole}`,
      });
      onLogin(selectedRole);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            <div className="flex items-center justify-center mb-2">
              <div className="bg-gradient-to-r from-green-500 to-orange-500 p-2 rounded-lg mr-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              Join SuiTrace
            </div>
            <p className="text-sm text-gray-600 font-normal">
              Choose your role and sign in with zkLogin
            </p>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Role Selection */}
          <div>
            <Label className="text-base font-semibold mb-3 block">
              I want to join as:
            </Label>
            <div className="space-y-2">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`w-full p-3 border rounded-lg text-left transition-all ${
                    selectedRole === role.id
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`p-2 rounded-lg mr-3 ${role.color}`}>
                      <role.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{role.title}</div>
                      <div className="text-xs text-gray-600">{role.description}</div>
                    </div>
                    {selectedRole === role.id && (
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <Tabs defaultValue="zk" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="zk">zkLogin (Recommended)</TabsTrigger>
              <TabsTrigger value="email">Email</TabsTrigger>
            </TabsList>
            
            <TabsContent value="zk" className="space-y-3 mt-4">
              <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-800">
                <Shield className="w-4 h-4 inline mr-2" />
                Secure, wallet-free authentication powered by Sui blockchain
              </div>
              
              <Button
                onClick={() => handleZkLogin('Google')}
                disabled={isLoading}
                className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <Globe className="w-4 h-4 mr-2" />
                Continue with Google
              </Button>
              
              <Button
                onClick={() => handleZkLogin('Email')}
                disabled={isLoading}
                className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <Mail className="w-4 h-4 mr-2" />
                Continue with Email
              </Button>
            </TabsContent>
            
            <TabsContent value="email" className="space-y-3 mt-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                />
              </div>
              
              <Button
                onClick={handleEmailLogin}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </TabsContent>
          </Tabs>

          <div className="text-center text-xs text-gray-500">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
