
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Blog', href: '/blog' },
    { name: 'Directory', href: '/directory' },
    { name: 'Listings', href: '/listings' },
    { name: 'Events', href: '/events' },
    { name: 'Map', href: '/map' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <div className="w-12 h-12 bg-primary-foreground rounded-lg flex items-center justify-center mr-3">
                <span className="text-primary font-bold text-sm">LOGO</span>
              </div>
              <span className="text-2xl font-playfair font-semibold text-primary-foreground">TOWN NAME</span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    location.pathname === item.href
                      ? 'text-primary-foreground border-b-2 border-primary-foreground'
                      : 'text-primary-foreground/80'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground border-t border-border mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <Link to="/" className="flex items-center mb-8 md:mb-0">
              <div className="w-12 h-12 bg-primary-foreground rounded-lg flex items-center justify-center mr-3">
                <span className="text-primary font-bold text-sm">LOGO</span>
              </div>
              <span className="text-2xl font-playfair font-semibold text-primary-foreground">TOWN NAME</span>
            </Link>
            
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-primary-foreground/90">
              © 2024 Town Name. Building a sustainable future together.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
