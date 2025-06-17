import React from 'react';
import { AlertTriangle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-red-600 text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center px-8 py-12">
        {/* Warning Icon */}
        <div className="mb-8">
          <AlertTriangle className="w-20 h-20 mx-auto text-white opacity-90" strokeWidth={1} />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-light mb-8 tracking-wide">
          We'll be back soon!
        </h1>
        
        {/* Content */}
        <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed">
          <p className="opacity-90">
            Sorry for the inconvenience. We're performing some maintenance at the moment. 
            We'll be back up shortly!
          </p>
          <p className="font-normal opacity-80">
            — Centro Services
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;