
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Shield, Eye, ShoppingCart, User, Calendar, Package } from 'lucide-react';

interface ProductModalProps {
  product: any;
  onClose: () => void;
  onOrderNow: (product: any) => void;
  onViewTrace: (product: any) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onOrderNow,
  onViewTrace
}) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
            {product.verified && (
              <Badge className="absolute top-3 left-3 bg-green-500 text-white">
                <Shield className="w-3 h-3 mr-1" />
                Verified Farmer
              </Badge>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                ${product.price} <span className="text-lg text-gray-500">per {product.unit}</span>
              </div>
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
                <span className="font-medium">{product.rating}</span>
                <span className="text-gray-500 ml-2">(127 reviews)</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center">
                <User className="w-5 h-5 text-gray-400 mr-3" />
                <div>
                  <div className="font-medium">{product.farmer}</div>
                  <div className="text-sm text-gray-500">Certified Organic Farmer</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                <span>{product.location}</span>
              </div>
              
              <div className="flex items-center">
                <Package className="w-5 h-5 text-gray-400 mr-3" />
                <span>{product.quantity} {product.unit} available</span>
              </div>
              
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                <span>Harvested 2 days ago</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
              <p className="text-gray-600">
                {product.description}. Grown using sustainable farming practices with 
                no harmful pesticides. Perfect for both fresh consumption and cooking.
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => onViewTrace(product)}
                variant="outline"
                className="flex-1"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Trace History
              </Button>
              <Button
                onClick={() => onOrderNow(product)}
                className="flex-1 bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Order Now
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Product Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="font-semibold text-green-900">Smart Escrow</div>
            <div className="text-sm text-green-700">Payment protected until delivery</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <Package className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <div className="font-semibold text-orange-900">Quality Assured</div>
            <div className="text-sm text-orange-700">Verified by blockchain</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="font-semibold text-blue-900">Full Traceability</div>
            <div className="text-sm text-blue-700">{product.traceSteps} tracked steps</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
