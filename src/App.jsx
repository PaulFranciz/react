import React from "react";
import Content from "./Content";
import ProfileImage from "./ProfileImage";

import Footer from "./Footer";
import "./Profile.css";
import "./Content.css";
import "./Footer.css";

function App() {
  return (
    <>
      <ProfileImage />
      <Content />
      <Footer />
    </>
  );
}

export default App;
