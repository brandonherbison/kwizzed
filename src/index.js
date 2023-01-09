import React from 'react';
import { createRoot } from "react-dom/client"
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {Kwizzed}  from './Kwizzed.js';

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Kwizzed />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

