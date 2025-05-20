import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./components/dashboard";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-900 to-cyan-900">
      <Navbar />
      
      {/* flex-grow ensures Dashboard takes full height between Navbar & Footer */}
      <main className="flex-grow pt-20 ">
        <Dashboard />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
