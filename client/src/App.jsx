import { useState } from "react";
import { Navbar, Footer, Welcome, Service, Transcations } from "./components";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Service />
      <Transcations />
      <Footer />
    </div>
  );
}

export default App;
