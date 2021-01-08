/* global chrome */
/// <reference types="web-bluetooth" />
import React from 'react';
import './App.css';

function GetAccess(){
  console.log('Get Access');
  return navigator.bluetooth.requestDevice(
    {
      "acceptAllDevices":true
    })
    . then( (device: any) => {
        console.log('"' + device.name + '" bluetooth device selected');
        console.log(device)
        return device;
      });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick = {GetAccess}>Get Access</button>
      </header>
    </div>
  );
}

export default App;
