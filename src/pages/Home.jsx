import { useState } from "react";
import Header from "../components/Header";
import { useAppContext } from "../context/AppContent";

const Home = () => {
  const { content } = useAppContext();
  return (
    <>
    
      <div>{content}</div>
    
    </>
  );
}

export default Home;