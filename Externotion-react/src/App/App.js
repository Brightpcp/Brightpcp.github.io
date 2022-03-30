import React, { useState } from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import AddActivity from '../AddActivity/AddActivity';
import FormActivity from '../FormActivity/FormActivity';
import Footer from '../Footer/Footer';

function App() {
  const [activityType, setActivityType] = useState("running");


  return (
    <div className="App">
      <Navbar />
      <AddActivity 
        setActivityType={setActivityType} 
      />
      <FormActivity 
        activityType={activityType}
        setActivityType={setActivityType}
      />
      <Footer />
    </div>
  );
}

export default App;
