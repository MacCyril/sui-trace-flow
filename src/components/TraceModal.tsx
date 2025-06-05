
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, User, Package, Truck, CheckCircle, QrCode } from 'lucide-react';

interface TraceModalProps {
  product: any;
  onClose: () => void;
}

export const TraceModal: React.FC<TraceModalProps> = ({ product, onClose }) => {
  const traceSteps = [
    {
      id: 1,
      title: 'Seed Planting',
      actor: 'Amina Hassan (Farmer)',
      location: 'Farm Plot 247, Kaduna',
      timestamp: '2024-01-15 08:30',
      status: 'completed',
      description: 'Organic tomato seeds planted in prepared soil with natural fertilizers',
      txHash: '0x1a2b3c4d...',
      icon: Package
    },
    {
      id: 2,
      title: 'Growth & Care',
      actor: 'Amina Hassan (Farmer)',
      location: 'Farm Plot 247, Kaduna',
      timestamp: '2024-02-20 16:45',
      status: 'completed',
      description: 'Regular watering, weeding, and organic pest control applied',
      txHash: '0x2b3c4d5e...',
      icon: Package
    },
    {
      id: 3,
      title: 'Harvest',
      actor: 'Amina Hassan (Farmer)',
      location: 'Farm Plot 247, Kaduna',
      timestamp: '2024-03-10 06:00',
      status: 'completed',
      description: 'Fresh tomatoes harvested at optimal ripeness',
      txHash: '0x3c4d5e6f...',
      icon: CheckCircle
    },
    {
      id: 4,
      title: 'Quality Inspection',
      actor: 'NAFDAC Inspector',
      location: 'Kaduna Inspection Center',
      timestamp: '2024-03-10 14:30',
      status: 'completed',
      description: 'Passed organic certification and quality standards',
      txHash: '0x4d5e6f7g...',
      icon: CheckCircle
    },
    {
      id: 5,
      title: 'Packaging',
      actor: 'Amina Hassan (Farmer)',
      location: 'Farm Processing Center',
      timestamp: '2024-03-11 09:15',
      status: 'completed',
      description: 'Packaged in bio-degradable containers with QR codes',
      txHash: '0x5e6f7g8h...',
      icon: Package
    },
    {
      id: 6,
      title: 'Listed on SuiTrace',
      actor: 'SuiTrace Platform',
      location: 'Blockchain Network',
      timestamp: '2024-03-11 10:00',
      status: 'current',
      description: 'Product listed on marketplace with full trace history',
      txHash: '0x6f7g8h9i...',
      icon: Package
    }
  ];

  const getStepColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'current':
        return 'text-orange-600 bg-orange-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl font-bold">
            <MapPin className="w-5 h-5 mr-2" />
            Product Trace History: {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Product Summary */}
          <div className="bg-gradient-to-r from-green-50 to-orange-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">Blockchain Verification</h3>
              <Badge className="bg-green-500 text-white">
                <CheckCircle className="w-3 h-3 mr-1" />
                Fully Traced
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Product ID:</span>
                <br />
                <span className="font-mono text-xs">SUI_TOM_247_2024</span>
              </div>
              <div>
                <span className="text-gray-600">Trace Steps:</span>
                <br />
                <span className="font-semibold">{traceSteps.length} recorded events</span>
              </div>
              <div>
                <span className="text-gray-600">Blockchain:</span>
                <br />
                <span className="font-semibold">Sui Network</span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-6">
              {traceSteps.map((step, index) => (
                <div key={step.id} className="relative flex items-start">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full ${getStepColor(step.status)} relative z-10`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  
                  <div className="ml-4 flex-1">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{step.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          Step {step.id}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <User className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-gray-700">{step.actor}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-gray-700">{step.location}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-gray-700">{step.timestamp}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mt-3 text-sm">
                        {step.description}
                      </p>
                      
                      <div className="mt-3 p-2 bg-gray-50 rounded text-xs">
                        <span className="text-gray-500">Transaction Hash: </span>
                        <span className="font-mono text-gray-700">{step.txHash}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* QR Code Section */}
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <QrCode className="w-12 h-12 text-gray-600 mx-auto mb-3" />
            <h4 className="font-semibold text-gray-900 mb-2">Share Product Trace</h4>
            <p className="text-sm text-gray-600 mb-4">
              Generate a QR code to share this product's complete trace history
            </p>
            <button className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-orange-600 transition-colors">
              Generate QR Code
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
