import { Link } from 'react-router-dom'
import { zodiacData } from '../data/zodiacData'

export default function ZodiacSigns() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="section-title">The 12 Zodiac Signs</h1>
        <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '800px' }}>
          Explore the unique characteristics, traits, and cosmic influences of each zodiac sign. 
          Discover what makes each sign special and how the stars shape personalities.
        </p>
      </div>

      <div className="row g-4">
        {zodiacData.map((zodiac) => (
          <div key={zodiac.sign} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Link
              to={`/zodiac/${zodiac.sign}`}
              className="text-decoration-none"
            >
              <div className="zodiac-card p-4 h-100 text-center">
                {/* Zodiac Emoji/Symbol */}
                <div className="fs-1 mb-3" style={{ fontSize: '4rem' }}>
                  {zodiac.emoji}
                </div>
              
              {/* Zodiac Name */}
              <h3 className="h4 fw-bold mb-2">
                {zodiac.name}
              </h3>
              
              {/* Zodiac Symbol */}
              <div className="fs-2 mb-3" style={{ color: '#9333ea' }}>
                {zodiac.symbol}
              </div>
              
              {/* Dates */}
              <p className="small text-muted mb-3 fw-medium">
                {zodiac.dates}
              </p>
              
              {/* Element & Quality */}
              <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
                <span className="badge" style={{ backgroundColor: '#f3e8ff', color: '#7e22ce' }}>
                  {zodiac.element}
                </span>
                <span className="badge" style={{ backgroundColor: '#fce7f3', color: '#be185d' }}>
                  {zodiac.quality}
                </span>
              </div>
              
              {/* Short Description */}
              <p className="small text-muted" style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                {zodiac.description}
              </p>
              
              {/* Learn More */}
              <div className="mt-3 fw-semibold small" style={{ color: '#9333ea' }}>
                Learn More →
              </div>
            </div>
          </Link>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="row g-4 mt-5">
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="bg-white bg-opacity-75 rounded-3 p-4 text-center">
            <div className="fs-2 mb-3">🔥</div>
            <h4 className="fw-bold h5 mb-2">Fire Signs</h4>
            <p className="small text-muted">Aries, Leo, Sagittarius</p>
            <p className="small text-secondary mt-2">Passionate & Dynamic</p>
          </div>
        </div>
        
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="bg-white bg-opacity-75 rounded-3 p-4 text-center">
            <div className="fs-2 mb-3">🌍</div>
            <h4 className="fw-bold h5 mb-2">Earth Signs</h4>
            <p className="small text-muted">Taurus, Virgo, Capricorn</p>
            <p className="small text-secondary mt-2">Practical & Grounded</p>
          </div>
        </div>
        
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="bg-white bg-opacity-75 rounded-3 p-4 text-center">
            <div className="fs-2 mb-3">💨</div>
            <h4 className="fw-bold h5 mb-2">Air Signs</h4>
            <p className="small text-muted">Gemini, Libra, Aquarius</p>
            <p className="small text-secondary mt-2">Intellectual & Social</p>
          </div>
        </div>
        
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="bg-white bg-opacity-75 rounded-3 p-4 text-center">
            <div className="fs-2 mb-3">💧</div>
            <h4 className="fw-bold h5 mb-2">Water Signs</h4>
            <p className="small text-muted">Cancer, Scorpio, Pisces</p>
            <p className="small text-secondary mt-2">Emotional & Intuitive</p>
          </div>
        </div>
      </div>
    </div>
  )
}
