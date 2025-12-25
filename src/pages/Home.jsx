import { Link } from 'react-router-dom'
import { Sparkles, Star, Moon, Heart, Calendar, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section className="position-relative py-5" style={{ background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)' }}>
        <div className="container py-md-5">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className="d-flex justify-content-center mb-4">
                <div className="position-relative">
                  <Sparkles className="animate-pulse-slow" size={80} style={{ color: '#9333ea' }} />
                  <Star className="position-absolute animate-float" size={32} style={{ color: '#ec4899', top: '-8px', right: '-8px' }} />
                  <Moon className="position-absolute" size={24} style={{ color: '#3b82f6', bottom: '-4px', left: '-8px' }} />
                </div>
              </div>
              
              <h1 className="display-3 display-md-2 fw-bold mb-4">
                <span className="text-gradient">Ajay Vision</span>
              </h1>
              
              <p className="fs-4 fs-md-3 mb-4 text-secondary">
                Discover Your Cosmic Journey Through the Stars
              </p>
              
              <p className="fs-5 mb-5 text-muted">
                Unlock the mysteries of the universe with personalized horoscopes, 
                detailed birth charts, and ancient Vedic wisdom. Your path to self-discovery begins here.
              </p>
              
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link to="/zodiac-signs" className="btn btn-cosmic btn-lg">
                  Explore Zodiac Signs
                </Link>
                <Link to="/kundali" className="btn btn-outline-cosmic btn-lg">
                  Generate Kundali
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-white bg-opacity-50">
        <div className="container py-md-4">
          <h2 className="section-title text-center mb-5">Our Cosmic Services</h2>
          
          <div className="row g-4">
            {/* Daily Horoscope */}
            <div className="col-12 col-sm-6 col-lg-4">
              <Link to="/daily-horoscope" className="text-decoration-none">
                <div className="zodiac-card p-4 h-100 text-center">
                  <div className="d-flex justify-content-center mb-3">
                    <div className="rounded-circle cosmic-gradient d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                      <Star size={40} className="text-white" />
                    </div>
                  </div>
                  <h3 className="h4 fw-bold mb-3">Daily Horoscope</h3>
                  <p className="text-muted mb-0">
                    Get your personalized daily, weekly, and monthly predictions based on your zodiac sign.
                  </p>
                </div>
              </Link>
            </div>

            {/* Zodiac Signs */}
            <div className="col-12 col-sm-6 col-lg-4">
              <Link to="/zodiac-signs" className="text-decoration-none">
                <div className="zodiac-card p-4 h-100 text-center">
                  <div className="d-flex justify-content-center mb-3">
                    <div className="rounded-circle cosmic-gradient d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                      <Sparkles size={40} className="text-white" />
                    </div>
                  </div>
                  <h3 className="h4 fw-bold mb-3">Zodiac Signs</h3>
                  <p className="text-muted mb-0">
                    Explore all 12 zodiac signs with detailed personality traits, strengths, and characteristics.
                  </p>
                </div>
              </Link>
            </div>

            {/* Kundali */}
            <div className="col-12 col-sm-6 col-lg-4">
              <Link to="/kundali" className="text-decoration-none">
                <div className="zodiac-card p-4 h-100 text-center">
                  <div className="d-flex justify-content-center mb-3">
                    <div className="rounded-circle cosmic-gradient d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                      <Moon size={40} className="text-white" />
                    </div>
                  </div>
                  <h3 className="h4 fw-bold mb-3">Kundali Chart</h3>
                  <p className="text-muted mb-0">
                    Generate your Vedic birth chart based on your date, time, and place of birth.
                  </p>
                </div>
              </Link>
            </div>

            {/* Compatibility */}
            <div className="col-12 col-sm-6 col-lg-4">
              <Link to="/compatibility" className="text-decoration-none">
                <div className="zodiac-card p-4 h-100 text-center">
                  <div className="d-flex justify-content-center mb-3">
                    <div className="rounded-circle cosmic-gradient d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                      <Heart size={40} className="text-white" />
                    </div>
                  </div>
                  <h3 className="h4 fw-bold mb-3">Compatibility</h3>
                  <p className="text-muted mb-0">
                    Check zodiac compatibility between you and your partner for love and relationships.
                  </p>
                </div>
              </Link>
            </div>

            {/* Panchang */}
            <div className="col-12 col-sm-6 col-lg-4">
              <Link to="/panchang" className="text-decoration-none">
                <div className="zodiac-card p-4 h-100 text-center">
                  <div className="d-flex justify-content-center mb-3">
                    <div className="rounded-circle cosmic-gradient d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                      <Calendar size={40} className="text-white" />
                    </div>
                  </div>
                  <h3 className="h4 fw-bold mb-3">Panchang</h3>
                  <p className="text-muted mb-0">
                    Daily Hindu calendar with auspicious timings, tithis, and muhurat for important events.
                  </p>
                </div>
              </Link>
            </div>

            {/* Planetary Transits */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="zodiac-card p-4 h-100 text-center">
                <div className="d-flex justify-content-center mb-3">
                  <div className="rounded-circle cosmic-gradient d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                    <Users size={40} className="text-white" />
                  </div>
                </div>
                <h3 className="h4 fw-bold mb-3">Planetary Transits</h3>
                <p className="text-muted mb-0">
                  Track planetary movements and their influence on your life and zodiac sign.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5">
        <div className="container py-md-4">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className="cosmic-gradient rounded-4 p-4 p-md-5 text-center text-white shadow-lg">
                <h2 className="display-5 display-md-4 fw-bold mb-4">
                  Start Your Cosmic Journey Today
                </h2>
                <p className="fs-5 mb-4 opacity-75">
                  Unlock the secrets of the universe and discover what the stars have in store for you
                </p>
                <Link to="/zodiac-signs" className="btn btn-light btn-lg fw-bold" style={{ color: '#9333ea' }}>
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
