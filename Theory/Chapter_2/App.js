/***
 * 
 * Createed a Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Claening your code
 * Dev and production Build
 * Super Fast Build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPs on Dev
 * port number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree Shaking - Removing un-wanted code
 */

/**
 * babel plugin transform remove console
 */


import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
    "div",
    {
        id : "heading1",
        key: "h1"
    },
    "Heading1"
)
console.log(heading1);

// React.createElement => Object => HTML(DOM)
const heading2 = React.createElement(
    "div",
    {
        id : "heading2",
        key : "h2"
    },
    "Heading1"
)


const container = React.createElement(
    "div",
    {
        id : "container"
    },
    [heading1, heading2]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);