import { useState } from 'react'
import { getZodiacByDate } from '../data/zodiacData'
import { Moon, Star, Sun, MapPin } from 'lucide-react'

export default function Kundali() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    place: ''
  })
  const [kundali, setKundali] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Parse the date
    const [year, month, day] = formData.date.split('-')
    const zodiacSign = getZodiacByDate(parseInt(month), parseInt(day))
    
    // Generate Kundali data (mock for demonstration)
    const kundaliData = {
      personalInfo: {
        name: formData.name,
        date: new Date(formData.date).toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        time: formData.time,
        place: formData.place,
        zodiacSign: zodiacSign
      },
      planets: [
        { name: 'Sun', house: 1, sign: zodiacSign?.name || 'Aries', degrees: '15°23\'', influence: 'Strong' },
        { name: 'Moon', house: 4, sign: 'Cancer', degrees: '22°45\'', influence: 'Favorable' },
        { name: 'Mars', house: 7, sign: 'Libra', degrees: '8°12\'', influence: 'Moderate' },
        { name: 'Mercury', house: 3, sign: 'Gemini', degrees: '19°56\'', influence: 'Strong' },
        { name: 'Jupiter', house: 9, sign: 'Sagittarius', degrees: '25°33\'', influence: 'Very Strong' },
        { name: 'Venus', house: 2, sign: 'Taurus', degrees: '11°48\'', influence: 'Favorable' },
        { name: 'Saturn', house: 10, sign: 'Capricorn', degrees: '6°21\'', influence: 'Moderate' },
      ],
      houses: [
        { number: 1, sign: zodiacSign?.name || 'Aries', lord: 'Mars', aspect: 'Self, Personality' },
        { number: 2, sign: 'Taurus', lord: 'Venus', aspect: 'Wealth, Family' },
        { number: 3, sign: 'Gemini', lord: 'Mercury', aspect: 'Siblings, Courage' },
        { number: 4, sign: 'Cancer', lord: 'Moon', aspect: 'Mother, Home' },
        { number: 5, sign: 'Leo', lord: 'Sun', aspect: 'Children, Creativity' },
        { number: 6, sign: 'Virgo', lord: 'Mercury', aspect: 'Health, Enemies' },
        { number: 7, sign: 'Libra', lord: 'Venus', aspect: 'Marriage, Partnership' },
        { number: 8, sign: 'Scorpio', lord: 'Mars', aspect: 'Longevity, Transformation' },
        { number: 9, sign: 'Sagittarius', lord: 'Jupiter', aspect: 'Fortune, Wisdom' },
        { number: 10, sign: 'Capricorn', lord: 'Saturn', aspect: 'Career, Status' },
        { number: 11, sign: 'Aquarius', lord: 'Saturn', aspect: 'Gains, Friends' },
        { number: 12, sign: 'Pisces', lord: 'Jupiter', aspect: 'Losses, Liberation' },
      ],
      predictions: {
        career: 'Strong career prospects with Jupiter in the 9th house. Leadership roles and recognition likely.',
        health: 'Good overall health. Focus on stress management and regular exercise.',
        finance: 'Financial stability indicated. Multiple income sources possible.',
        relationship: 'Harmonious relationships. Marriage prospects favorable after age 28.',
        education: 'Excellence in academics. Higher education brings success.'
      }
    }
    
    setKundali(kundaliData)
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="section-title">Kundali Birth Chart</h1>
        <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '800px' }}>
          Generate your personalized Vedic birth chart (Kundali) based on your birth details. 
          Discover planetary positions, houses, and predictions for your life.
        </p>
      </div>

      {!kundali ? (
        <div className="mx-auto zodiac-card p-4" style={{ maxWidth: '800px' }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label fw-semibold">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="form-control form-control-lg"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">
                Date of Birth *
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="form-control form-control-lg"
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">
                Time of Birth *
              </label>
              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                className="form-control form-control-lg"
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">
                Place of Birth *
              </label>
              <input
                type="text"
                required
                value={formData.place}
                onChange={(e) => setFormData({...formData, place: e.target.value})}
                className="form-control form-control-lg"
                placeholder="City, Country"
              />
            </div>

            <button type="submit" className="btn btn-cosmic btn-lg w-100">
              Generate Kundali
            </button>
          </form>

          <div className="mt-4 p-3 rounded-3" style={{ backgroundColor: '#f3e8ff' }}>
            <p className="small text-muted text-center mb-0">
              🔒 Your information is secure and used only for generating your birth chart
            </p>
          </div>
        </div>
      ) : (
        <div>
          {/* Personal Info */}
          <div className="zodiac-card p-4 mb-4">
            <div className="d-flex align-items-center gap-3 mb-4 flex-wrap">
              <div style={{ fontSize: '4rem' }}>{kundali.personalInfo.zodiacSign?.emoji}</div>
              <div>
                <h2 className="h3 fw-bold mb-1">{kundali.personalInfo.name}</h2>
                <p className="text-muted mb-0">
                  Zodiac Sign: <span className="fw-semibold">{kundali.personalInfo.zodiacSign?.name}</span>
                </p>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-12 col-md-4">
                <div className="d-flex align-items-center gap-2 text-secondary">
                  <Sun className="h-5 w-5" style={{ color: '#eab308' }} />
                  <span>{kundali.personalInfo.date}</span>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="d-flex align-items-center gap-2 text-secondary">
                  <Moon className="h-5 w-5" style={{ color: '#3b82f6' }} />
                  <span>{kundali.personalInfo.time}</span>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="d-flex align-items-center gap-2 text-secondary">
                  <MapPin className="h-5 w-5" style={{ color: '#ef4444' }} />
                  <span>{kundali.personalInfo.place}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Birth Chart Diagram */}
          <div className="zodiac-card p-4 mb-4">
            <h3 className="h4 fw-bold mb-4 d-flex align-items-center gap-2">
              <Star className="h-6 w-6" style={{ color: '#eab308' }} />
              Birth Chart (Rashi Chart)
            </h3>
            <div className="row g-2 mx-auto" style={{ maxWidth: '800px' }}>
              {kundali.houses.map((house) => (
                <div key={house.number} className="col-3">
                  <div
                    className="border border-2 rounded p-2 text-center bg-white"
                    style={{ 
                      borderColor: '#d8b4fe',
                      aspectRatio: '1',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      minHeight: '100px'
                    }}
                  >
                    <div className="small fw-bold mb-1" style={{ color: '#9333ea' }}>House {house.number}</div>
                    <div className="fs-6 fw-semibold">{house.sign}</div>
                    <div className="small text-muted">{house.lord}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Planetary Positions */}
          <div className="zodiac-card p-4 mb-4">
            <h3 className="h4 fw-bold mb-4">Planetary Positions</h3>
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr style={{ backgroundColor: '#f3e8ff' }}>
                    <th className="fw-semibold">Planet</th>
                    <th className="fw-semibold">House</th>
                    <th className="fw-semibold">Sign</th>
                    <th className="fw-semibold">Degrees</th>
                    <th className="fw-semibold">Influence</th>
                  </tr>
                </thead>
                <tbody>
                  {kundali.planets.map((planet, index) => (
                    <tr key={index}>
                      <td className="fw-semibold">{planet.name}</td>
                      <td className="text-secondary">{planet.house}</td>
                      <td className="text-secondary">{planet.sign}</td>
                      <td className="text-secondary">{planet.degrees}</td>
                      <td>
                        <span className={`badge ${
                          planet.influence === 'Very Strong' ? 'bg-success' :
                          planet.influence === 'Strong' ? 'bg-primary' :
                          planet.influence === 'Favorable' ? 'bg-info' :
                          'bg-secondary'
                        }`}>
                          {planet.influence}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Predictions */}
          <div className="row g-4 mb-4">
            <div className="col-12 col-md-6">
              <div className="zodiac-card p-4 h-100">
                <h4 className="fw-bold h5 mb-3">💼 Career</h4>
                <p className="text-secondary mb-0">{kundali.predictions.career}</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="zodiac-card p-4 h-100">
                <h4 className="fw-bold h5 mb-3">❤️ Relationships</h4>
                <p className="text-secondary mb-0">{kundali.predictions.relationship}</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="zodiac-card p-4 h-100">
                <h4 className="fw-bold h5 mb-3">💰 Finance</h4>
                <p className="text-secondary mb-0">{kundali.predictions.finance}</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="zodiac-card p-4 h-100">
                <h4 className="fw-bold h5 mb-3">🏥 Health</h4>
                <p className="text-secondary mb-0">{kundali.predictions.health}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button onClick={() => window.print()} className="btn btn-cosmic">
              Print Kundali
            </button>
            <button onClick={() => setKundali(null)} className="btn btn-outline-cosmic">
              Generate New
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
