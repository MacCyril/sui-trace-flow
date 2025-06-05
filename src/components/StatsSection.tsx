
import React from 'react';
import { TrendingUp, Users, Package, MapPin } from 'lucide-react';

export const StatsSection = () => {
  const stats = [
    {
      icon: Package,
      value: '2,847',
      label: 'Products Traced',
      color: 'text-green-600'
    },
    {
      icon: Users,
      value: '1,234',
      label: 'Active Farmers',
      color: 'text-orange-600'
    },
    {
      icon: TrendingUp,
      value: '$89K',
      label: 'Monthly Volume',
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      value: '12',
      label: 'Countries',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
