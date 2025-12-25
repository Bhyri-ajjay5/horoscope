import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ZodiacSigns from './pages/ZodiacSigns'
import ZodiacDetail from './pages/ZodiacDetail'
import DailyHoroscope from './pages/DailyHoroscope'
import Kundali from './pages/Kundali'
import Compatibility from './pages/Compatibility'
import Panchang from './pages/Panchang'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow page-transition">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zodiac-signs" element={<ZodiacSigns />} />
            <Route path="/zodiac/:sign" element={<ZodiacDetail />} />
            <Route path="/daily-horoscope" element={<DailyHoroscope />} />
            <Route path="/kundali" element={<Kundali />} />
            <Route path="/compatibility" element={<Compatibility />} />
            <Route path="/panchang" element={<Panchang />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
