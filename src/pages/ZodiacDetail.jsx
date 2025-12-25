import { useParams, Link } from 'react-router-dom'
import { getZodiacBySign } from '../data/zodiacData'
import { ArrowLeft, Heart, Briefcase, Star } from 'lucide-react'

export default function ZodiacDetail() {
  const { sign } = useParams()
  const zodiac = getZodiacBySign(sign)

  if (!zodiac) {
    return (
      <div className="page-container py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Zodiac Sign Not Found</h1>
        <Link to="/zodiac-signs" className="btn-primary">
          Back to All Signs
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-5">
      {/* Back Button */}
      <Link to="/zodiac-signs" className="d-inline-flex align-items-center gap-2 text-decoration-none mb-4" style={{ color: '#9333ea' }}>
        <ArrowLeft className="h-5 w-5" />
        Back to All Signs
      </Link>

      {/* Header Section */}
      <div className="zodiac-card p-4 p-md-5 mb-4">
        <div className="row align-items-center g-4">
          <div className="text-9xl">{zodiac.emoji}</div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-bold text-gray-800 mb-2">{zodiac.name}</h1>
            <div className="text-5xl text-purple-600 mb-4">{zodiac.symbol}</div>
            <p className="text-xl text-gray-600 mb-4">{zodiac.dates}</p>
            <div className="d-flex flex-wrap gap-3">
              <span className="badge rounded-pill px-4 py-2" style={{ backgroundColor: '#f3e8ff', color: '#7e22ce', fontSize: '1rem' }}>
                Element: {zodiac.element}
              </span>
              <span className="badge rounded-pill px-4 py-2" style={{ backgroundColor: '#fce7f3', color: '#be185d', fontSize: '1rem' }}>
                Quality: {zodiac.quality}
              </span>
              <span className="badge rounded-pill px-4 py-2" style={{ backgroundColor: '#dbeafe', color: '#1e40af', fontSize: '1rem' }}>
                Ruler: {zodiac.ruler}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="zodiac-card p-4 mb-4">
        <h2 className="h3 fw-bold mb-3">About {zodiac.name}</h2>
        <p className="fs-5 text-secondary">{zodiac.description}</p>
      </div>

      {/* Traits & Weaknesses */}
      <div className="row g-4 mb-4">
        <div className="zodiac-card p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Star className="h-6 w-6 text-yellow-500" />
            Strengths
            </h3>
            <ul className="list-unstyled">
              {zodiac.traits.map((trait, index) => (
                <li key={index} className="d-flex align-items-start gap-2 mb-2 text-secondary">
                  <span style={{ color: '#22c55e' }}>✓</span>
                  {trait}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="zodiac-card p-4 h-100">
            <h3 className="h4 fw-bold mb-3">Weaknesses</h3>
            <ul className="list-unstyled">
              {zodiac.weaknesses.map((weakness, index) => (
                <li key={index} className="d-flex align-items-start gap-2 mb-2 text-secondary">
                  <span style={{ color: '#f97316' }}>!</span>
                {weakness}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Love & Career */}
      <div className="row g-4 mb-4">
        <div className="col-12 col-md-6">
          <div className="zodiac-card p-4 h-100">
            <h3 className="h4 fw-bold mb-3 d-flex align-items-center gap-2">
              <Heart className="h-6 w-6" style={{ color: '#ec4899' }} />
            Love & Relationships
            </h3>
            <p className="text-secondary mb-3">{zodiac.love}</p>
            <div>
              <h4 className="fw-semibold mb-2">Compatible Signs:</h4>
              <div className="d-flex flex-wrap gap-2">
                {zodiac.compatibility.map((sign, index) => (
                  <span key={index} className="badge" style={{ backgroundColor: '#fce7f3', color: '#be185d' }}>
                    {sign}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="zodiac-card p-4 h-100">
            <h3 className="h4 fw-bold mb-3 d-flex align-items-center gap-2">
              <Briefcase className="h-6 w-6" style={{ color: '#3b82f6' }} />
            Career & Success
            </h3>
            <p className="text-secondary">{zodiac.career}</p>
          </div>
        </div>
      </div>

      {/* Lucky Numbers & Color */}
      <div className="zodiac-card p-4 mb-4">
        <h3 className="h4 fw-bold mb-4">Lucky Elements</h3>
        <div className="row g-4">
          <div className="text-center">
            <div className="text-4xl mb-2">🎲</div>
            <h4 className="font-semibold text-gray-800 mb-2">Lucky Numbers</h4>
            <div className="flex gap-2 justify-center">
              {zodiac.luckyNumbers.map((num, index) => (
                <span key={index} className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  {num}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-2">🎨</div>
            <h4 className="font-semibold text-gray-800 mb-2">Lucky Color</h4>
            <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-bold">
              {zodiac.color}
            </span>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-2">🔮</div>
            <h4 className="font-semibold text-gray-800 mb-2">Element</h4>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-bold">
              {zodiac.element}
            </span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-4">
        <Link to="/daily-horoscope" className="btn btn-cosmic btn-lg">
          Get Your Daily Horoscope
        </Link>
      </div>
    </div>
  )
}
