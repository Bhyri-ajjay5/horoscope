import { Heart, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="cosmic-gradient text-white py-5 mt-5">
      <div className="container">
        <div className="row g-4">
          {/* About Section */}
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="h5 fw-bold mb-3">Ajay Vision</h3>
            <p className="small opacity-75">
              Your trusted guide to astrology, horoscopes, and cosmic insights. 
              Discover your path through the stars.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="h5 fw-bold mb-3">Quick Links</h3>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="/zodiac-signs" className="text-white text-decoration-none opacity-75" style={{ transition: 'opacity 0.2s' }} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.75}>
                  Zodiac Signs
                </a>
              </li>
              <li className="mb-2">
                <a href="/daily-horoscope" className="text-white text-decoration-none opacity-75" style={{ transition: 'opacity 0.2s' }} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.75}>
                  Daily Horoscope
                </a>
              </li>
              <li className="mb-2">
                <a href="/kundali" className="text-white text-decoration-none opacity-75" style={{ transition: 'opacity 0.2s' }} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.75}>
                  Kundali
                </a>
              </li>
              <li className="mb-2">
                <a href="/compatibility" className="text-white text-decoration-none opacity-75" style={{ transition: 'opacity 0.2s' }} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.75}>
                  Compatibility
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="h5 fw-bold mb-3">Resources</h3>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none opacity-75" style={{ transition: 'opacity 0.2s' }} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.75}>
                  Astrology Basics
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none opacity-75" style={{ transition: 'opacity 0.2s' }} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.75}>
                  Planetary Transits
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none opacity-75" style={{ transition: 'opacity 0.2s' }} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.75}>
                  Moon Phases
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none opacity-75" style={{ transition: 'opacity 0.2s' }} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.75}>
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="h5 fw-bold mb-3">Connect With Us</h3>
            <div className="d-flex gap-3">
              <a href="#" className="btn btn-light btn-sm rounded-circle p-2" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Github size={20} />
              </a>
              <a href="#" className="btn btn-light btn-sm rounded-circle p-2" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Linkedin size={20} />
              </a>
              <a href="#" className="btn btn-light btn-sm rounded-circle p-2" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-top mt-4 pt-4 text-center" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
          <p className="small mb-0 d-flex align-items-center justify-content-center gap-2 flex-wrap">
            Made with <Heart size={16} className="text-danger" style={{ fill: 'currentColor' }} /> 
            and ✨ cosmic energy • © {new Date().getFullYear()} Ajay Vision
          </p>
        </div>
      </div>
    </footer>
  )
}
