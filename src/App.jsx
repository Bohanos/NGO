import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import WhatWeDo from './pages/WhatWeDo'
import Team from './pages/Team'
import Stories from './pages/Stories'
import GetInvolved from './pages/GetInvolved'
import Donate from './pages/Donate'
import Contact from './pages/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/team" element={<Team />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}