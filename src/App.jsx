// App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Fashion from "./pages/Fashion";
import Wedding from "./pages/Wedding";
import WeddingGallery from "./pages/WeddingGallery";

import StoryView from "./pages/StoryView";
import AboutUs from "./pages/AboutUs";
import Enquire from "./pages/Enquire";

export default function App() {
  return (
    <Routes>
      {/* Landing page route */}
      <Route path="/" element={<Landing />} />
    
      
      {/* Protected routes that require Layout */}
      <Route path="/home" element={
        <Layout>
          <Home />
        </Layout>
      } />
      <Route path="/story/:id" element={
        <Layout>
          <StoryView />
        </Layout>
      } />
      <Route path="/fashion" element={
        <Layout>
          <Fashion />
        </Layout>
      } />
      <Route path="/wedding" element={
        <Layout>
          <Wedding />
        </Layout>
      } />
      <Route path="/gallery/:slug" element={
        <Layout>
          <WeddingGallery />
        </Layout>
      } />
      <Route path="/aboutus" element={
        <Layout>
          <AboutUs />
        </Layout>
      } />
      <Route path="/enquire" element={
        <Layout>
          <Enquire />
        </Layout>
      } />

      {/* Redirect root to home if already visited */}
      <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
