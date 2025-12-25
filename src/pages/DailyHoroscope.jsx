import { useState } from 'react'
import { zodiacData } from '../data/zodiacData'
import { getDailyHoroscope } from '../services/horoscopeService'
import { Loader, Sun, Moon, TrendingUp } from 'lucide-react'

export default function DailyHoroscope() {
  const [selectedSign, setSelectedSign] = useState('')
  const [selectedPeriod, setSelectedPeriod] = useState('today')
  const [horoscope, setHoroscope] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleGetHoroscope = async () => {
    if (!selectedSign) return
    
    setLoading(true)
    try {
      const data = await getDailyHoroscope(selectedSign, selectedPeriod)
      setHoroscope(data)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="section-title">Daily Horoscope</h1>
        <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '800px' }}>
          Get personalized daily predictions based on your zodiac sign. 
          Discover what the stars have in store for you today!
        </p>
      </div>

      {/* Selection Card */}
      <div className="mx-auto zodiac-card p-4 mb-4" style={{ maxWidth: '800px' }}>
        <div className="mb-4">
          {/* Zodiac Sign Selection */}
          <div className="mb-4">
            <label className="fs-5 fw-semibold mb-3 d-block">
              Select Your Zodiac Sign
            </label>
            <div className="row g-2">
              {zodiacData.map((zodiac) => (
                <div key={zodiac.sign} className="col-4 col-md-3">
                  <button
                    onClick={() => setSelectedSign(zodiac.sign)}
                    className={`btn w-100 p-2 border-2 d-flex flex-column align-items-center justify-content-center ${
                      selectedSign === zodiac.sign
                        ? 'border-3'
                        : ''
                    }`}
                    style={{
                      borderColor: selectedSign === zodiac.sign ? '#9333ea' : '#dee2e6',
                      backgroundColor: selectedSign === zodiac.sign ? '#f3e8ff' : 'white',
                      transform: selectedSign === zodiac.sign ? 'scale(1.05)' : 'scale(1)',
                      minHeight: '85px'
                    }}
                  >
                    <div style={{ fontSize: '2rem' }} className="mb-1">{zodiac.emoji}</div>
                    <div className="small fw-semibold text-center" style={{ fontSize: '0.7rem' }}>{zodiac.name}</div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Period Selection */}
          <div className="mb-4">
            <label className="fs-5 fw-semibold mb-3 d-block">
              Select Time Period
            </label>
            <div className="row g-2">
              <div className="col-4">
                <button
                  onClick={() => setSelectedPeriod('today')}
                  className={`btn w-100 p-2 border-2 d-flex flex-column align-items-center justify-content-center ${
                    selectedPeriod === 'today' ? 'border-3' : ''
                  }`}
                  style={{
                    borderColor: selectedPeriod === 'today' ? '#9333ea' : '#dee2e6',
                    backgroundColor: selectedPeriod === 'today' ? '#f3e8ff' : 'white',
                    minHeight: '80px'
                  }}
                >
                  <Sun className="mb-2" size={28} style={{ color: '#eab308' }} />
                  <div className="small fw-semibold">Today</div>
                </button>
              </div>
              <div className="col-4">
                <button
                  onClick={() => setSelectedPeriod('tomorrow')}
                  className={`btn w-100 p-2 border-2 d-flex flex-column align-items-center justify-content-center ${
                    selectedPeriod === 'tomorrow' ? 'border-3' : ''
                  }`}
                  style={{
                    borderColor: selectedPeriod === 'tomorrow' ? '#9333ea' : '#dee2e6',
                    backgroundColor: selectedPeriod === 'tomorrow' ? '#f3e8ff' : 'white',
                    minHeight: '80px'
                  }}
                >
                  <Moon className="mb-2" size={28} style={{ color: '#3b82f6' }} />
                  <div className="small fw-semibold">Tomorrow</div>
                </button>
              </div>
              <div className="col-4">
                <button
                  onClick={() => setSelectedPeriod('yesterday')}
                  className={`btn w-100 p-2 border-2 d-flex flex-column align-items-center justify-content-center ${
                    selectedPeriod === 'yesterday' ? 'border-3' : ''
                  }`}
                  style={{
                    borderColor: selectedPeriod === 'yesterday' ? '#9333ea' : '#dee2e6',
                    backgroundColor: selectedPeriod === 'yesterday' ? '#f3e8ff' : 'white',
                    minHeight: '80px'
                  }}
                >
                  <TrendingUp className="mb-2" size={28} style={{ color: '#9333ea' }} />
                  <div className="small fw-semibold">Yesterday</div>
                </button>
              </div>
            </div>
          </div>

          {/* Get Horoscope Button */}
          <button
            onClick={handleGetHoroscope}
            disabled={!selectedSign || loading}
            className="btn btn-cosmic w-100"
          >
            {loading ? (
              <span className="d-flex align-items-center justify-content-center gap-2">
                <Loader className="spinner-border spinner-border-sm" />
                Loading...
              </span>
            ) : (
              'Get My Horoscope'
            )}
          </button>
        </div>
      </div>

      {/* Horoscope Result */}
      {horoscope && (
        <div className="mx-auto" style={{ maxWidth: '900px' }}>
          {/* Main Prediction */}
          <div className="zodiac-card p-4 mb-4">
            <div className="d-flex align-items-center gap-3 mb-4">
              <div style={{ fontSize: '4rem' }}>
                {zodiacData.find(z => z.sign === selectedSign)?.emoji}
              </div>
              <div>
                <h2 className="h3 fw-bold mb-1">
                  {zodiacData.find(z => z.sign === selectedSign)?.name}
                </h2>
                <p className="text-muted mb-0">
                  {horoscope.current_date} • {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)}
                </p>
              </div>
            </div>
            <p className="fs-5 text-secondary">
              {horoscope.description}
            </p>
          </div>

          {/* Quick Stats */}
          <div className="row g-3 mb-4">
            <div className="col-6 col-md-3">
              <div className="zodiac-card p-3 text-center">
                <div className="fs-2 mb-2">💝</div>
                <div className="small text-muted mb-1">Compatibility</div>
                <div className="fw-bold">{horoscope.compatibility}</div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="zodiac-card p-3 text-center">
                <div className="fs-2 mb-2">😊</div>
                <div className="small text-muted mb-1">Mood</div>
                <div className="fw-bold">{horoscope.mood}</div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="zodiac-card p-3 text-center">
                <div className="fs-2 mb-2">🎨</div>
                <div className="small text-muted mb-1">Lucky Color</div>
                <div className="fw-bold">{horoscope.color}</div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="zodiac-card p-3 text-center">
                <div className="fs-2 mb-2">🎲</div>
                <div className="small text-muted mb-1">Lucky Number</div>
                <div className="fw-bold">{horoscope.lucky_number}</div>
              </div>
            </div>
          </div>

          {/* Lucky Time */}
          {horoscope.lucky_time && (
            <div className="zodiac-card p-4 text-center">
              <div className="fs-2 mb-2">⏰</div>
              <div className="small text-muted mb-1">Lucky Time</div>
              <div className="fs-5 fw-bold" style={{ color: '#9333ea' }}>{horoscope.lucky_time}</div>
            </div>
          )}
        </div>
      )}

      {/* Info Note */}
      <div className="mt-5 mx-auto rounded-3 p-4 text-center" style={{ maxWidth: '900px', backgroundColor: '#f3e8ff' }}>
        <p className="small text-muted mb-0">
          ✨ Horoscopes are based on the position of celestial bodies and are meant for entertainment purposes. 
          Remember, you create your own destiny!
        </p>
      </div>
    </div>
  )
}
