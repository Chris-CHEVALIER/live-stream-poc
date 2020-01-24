import React from 'react';
import './App.css';
import SphereComponent from "./SphereComponent";

function App() {
  return (
    <SphereComponent src="http://192.168.1.51:8000/live/index.m3u8" />
  );
}

export default App;