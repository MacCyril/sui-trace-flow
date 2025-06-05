
import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { ProductGrid } from '@/components/ProductGrid';
import { ProductModal } from '@/components/ProductModal';
import { OrderModal } from '@/components/OrderModal';
import { TraceModal } from '@/components/TraceModal';
import { AuthModal } from '@/components/AuthModal';
import { Hero } from '@/components/Hero';
import { StatsSection } from '@/components/StatsSection';

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showTraceModal, setShowTraceModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  const handleOrderNow = (product) => {
    if (!isAuthenticated) {
      setShowAuthModal(true);
      return;
    }
    setSelectedProduct(product);
    setShowOrderModal(true);
  };

  const handleViewTrace = (product) => {
    setSelectedProduct(product);
    setShowTraceModal(true);
  };

  const handleLogin = (role) => {
    setIsAuthenticated(true);
    setUserRole(role);
    setShowAuthModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      <Navbar 
        isAuthenticated={isAuthenticated}
        userRole={userRole}
        onLogin={() => setShowAuthModal(true)}
        onLogout={() => {
          setIsAuthenticated(false);
          setUserRole(null);
        }}
      />
      
      <Hero onGetStarted={() => setShowAuthModal(true)} />
      
      <StatsSection />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Fresh Products, Fully Traced
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every product tells a story. From farm to table, track the journey of your food 
            with complete transparency on the blockchain.
          </p>
        </div>
        
        <ProductGrid 
          onProductSelect={handleProductSelect}
          onOrderNow={handleOrderNow}
          onViewTrace={handleViewTrace}
          userRole={userRole}
        />
      </div>

      {selectedProduct && !showOrderModal && !showTraceModal && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseProductModal}
          onOrderNow={handleOrderNow}
          onViewTrace={handleViewTrace}
        />
      )}

      {showOrderModal && selectedProduct && (
        <OrderModal
          product={selectedProduct}
          onClose={() => setShowOrderModal(false)}
          userRole={userRole}
        />
      )}

      {showTraceModal && selectedProduct && (
        <TraceModal
          product={selectedProduct}
          onClose={() => setShowTraceModal(false)}
        />
      )}

      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
};

export default Index;
