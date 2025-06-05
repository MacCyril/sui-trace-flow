
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, MapPin, Clock, Award } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <div className="relative bg-gradient-to-br from-green-600 via-green-500 to-orange-500 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            From Farm to Table
            <br />
            <span className="text-orange-200">Fully Traced</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
            Revolutionary blockchain marketplace connecting African farmers directly to buyers 
            with complete supply chain transparency and smart contract security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={onGetStarted}
              size="lg" 
              className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 text-lg font-semibold"
            >
              Start Trading
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg"
            >
              Learn More
            </Button>
          </div>

          {/* Trust Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 mb-2 text-orange-200" />
              <span className="text-sm font-medium">Smart Escrow</span>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 mb-2 text-orange-200" />
              <span className="text-sm font-medium">Full Traceability</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 mb-2 text-orange-200" />
              <span className="text-sm font-medium">Real-time Tracking</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 mb-2 text-orange-200" />
              <span className="text-sm font-medium">Verified Quality</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
