import React, { useEffect, useState } from 'react';
import { CreditCardIcon } from 'lucide-react';
export const WelcomeSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <div className="relative bg-[#0F1421] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/20 to-[#06B6D4]/20"></div>
        <div className="absolute inset-0 bg-[url('https://uploads-ssl.webflow.com/63f65a3a5b56c61e6d8dc216/63f65a3a5b56c6f5898dc26f_noise.png')] opacity-5"></div>
        {/* Interactive floating elements */}
        <div className="absolute w-16 h-16 opacity-20 rounded-lg blur-sm" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=200&auto=format')",
        backgroundSize: 'cover',
        top: '15%',
        left: '10%',
        transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px) rotate(${mousePosition.x * 10}deg)`,
        transition: 'transform 0.3s ease-out',
        animation: 'float 8s ease-in-out infinite'
      }} />
        <div className="absolute w-20 h-20 opacity-30 rounded-full blur-sm" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1585857188900-77cd4c76d9d3?q=80&w=200&auto=format')",
        backgroundSize: 'cover',
        top: '60%',
        left: '15%',
        transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px) rotate(${mousePosition.x * -15}deg)`,
        transition: 'transform 0.5s ease-out',
        animation: 'float 10s ease-in-out infinite 1s'
      }} />
        <div className="absolute w-24 h-12 opacity-20 rounded-lg blur-sm" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=200&auto=format')",
        backgroundSize: 'cover',
        top: '30%',
        right: '15%',
        transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * -10}px) rotate(${mousePosition.y * 5}deg)`,
        transition: 'transform 0.4s ease-out',
        animation: 'float 12s ease-in-out infinite 0.5s'
      }} />
        <div className="absolute w-16 h-16 opacity-25 rounded-lg blur-sm" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=200&auto=format')",
        backgroundSize: 'cover',
        top: '70%',
        right: '10%',
        transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px) rotate(${mousePosition.y * -10}deg)`,
        transition: 'transform 0.3s ease-out',
        animation: 'float 9s ease-in-out infinite 1.5s'
      }} />
        <div className="absolute w-12 h-12 opacity-15 rounded-lg blur-sm" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1614294149010-950b698f72c0?q=80&w=200&auto=format')",
        backgroundSize: 'cover',
        top: '40%',
        left: '50%',
        transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * 20}px) rotate(${mousePosition.x * 20}deg)`,
        transition: 'transform 0.6s ease-out',
        animation: 'float 11s ease-in-out infinite 0.2s'
      }} />
      </div>
      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
      `}</style>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] rounded-full blur-lg opacity-75"></div>
              <CreditCardIcon className="relative h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Welcome to EML Card Services
          </h1>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            To activate your card, check your card balance or review recent
            activity, enter the card number and 6-digit security code shown on
            your card.
          </p>
          <p className="mt-2 text-gray-400">
            The card number is a 16-digit number found on either the front or
            back of your card.
          </p>
        </div>
      </div>
    </div>;
};