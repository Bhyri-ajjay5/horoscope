import { Link } from 'react-router-dom'
import { Sparkles, Star, Moon, Sun, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-lg sticky-top border-bottom" style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
      <div className="container-fluid px-3 px-lg-5">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <div className="position-relative me-2">
            <Sparkles className="text-purple animate-pulse-slow" size={32} style={{ color: '#9333ea' }} />
            <Star className="position-absolute top-0 end-0 text-pink" size={16} style={{ color: '#ec4899' }} />
          </div>
          <span className="fs-4 fw-bold text-gradient">Ajay Vision</span>
        </Link>

        <button 
          className="navbar-toggler border-0" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <X size={28} style={{ color: '#9333ea' }} />
          ) : (
            <Menu size={28} style={{ color: '#9333ea' }} />
          )}
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item">
              <Link to="/" className="nav-link fw-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/zodiac-signs" className="nav-link fw-medium" onClick={() => setIsMenuOpen(false)}>
                Zodiac Signs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/daily-horoscope" className="nav-link fw-medium d-flex align-items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <Sun size={16} />
                Daily Horoscope
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/kundali" className="nav-link fw-medium d-flex align-items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <Moon size={16} />
                Kundali
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/compatibility" className="nav-link fw-medium" onClick={() => setIsMenuOpen(false)}>
                Compatibility
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/panchang" className="nav-link fw-medium" onClick={() => setIsMenuOpen(false)}>
                Panchang
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
