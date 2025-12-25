import { useState, useEffect } from 'react'
import { Calendar, Sun, Moon, Star } from 'lucide-react'

export default function Panchang() {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [panchang, setPanchang] = useState(null)

  useEffect(() => {
    generatePanchang()
  }, [date])

  const generatePanchang = () => {
    const selectedDate = new Date(date)
    
    // Mock Panchang data
    const panchangData = {
      date: selectedDate.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      tithi: 'Shukla Saptami',
      nakshatra: 'Rohini',
      yoga: 'Shiva Yoga',
      karana: 'Baalava',
      paksha: 'Shukla Paksha',
      sunrise: '06:24 AM',
      sunset: '06:18 PM',
      moonrise: '11:45 AM',
      moonset: '11:32 PM',
      rahukaal: '09:00 AM - 10:30 AM',
      yamaghanta: '12:00 PM - 01:30 PM',
      gulika: '07:30 AM - 09:00 AM',
      shubhaHoras: ['06:24 AM - 07:24 AM', '12:18 PM - 01:18 PM', '04:18 PM - 05:18 PM'],
      festivals: ['Navratri Day 5', 'Maha Saptami'],
      auspicious: [
        { activity: 'Marriage', timing: '10:30 AM - 12:00 PM' },
        { activity: 'House Warming', timing: '02:00 PM - 04:00 PM' },
        { activity: 'Business Deal', timing: '11:00 AM - 01:00 PM' },
      ],
      inauspicious: ['Avoid travel during Rahukaal', 'Do not start new ventures during Yamaghanta']
    }
    
    setPanchang(panchangData)
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="section-title">Hindu Panchang</h1>
        <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '800px' }}>
          Daily Hindu calendar with auspicious timings, tithis, nakshatras, and muhurat 
          for important life events and ceremonies.
        </p>
      </div>

      {/* Date Selector */}
      <div className="mx-auto zodiac-card p-4 mb-4" style={{ maxWidth: '800px' }}>
        <label className="form-label fs-5 fw-semibold">
          Select Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="form-control form-control-lg"
        />
      </div>

      {panchang && (
        <div style={{ maxWidth: '1400px' }} className="mx-auto">
          {/* Date Header */}
          <div className="zodiac-card p-4 text-center mb-4">
            <div className="fs-1 mb-3">📅</div>
            <h2 className="h3 fw-bold mb-3">{panchang.date}</h2>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <span className="badge rounded-pill px-4 py-2 fs-6" style={{ backgroundColor: '#f3e8ff', color: '#7e22ce' }}>
                {panchang.tithi}
              </span>
              <span className="badge rounded-pill px-4 py-2 fs-6" style={{ backgroundColor: '#dbeafe', color: '#1e40af' }}>
                {panchang.paksha}
              </span>
            </div>
          </div>

          {/* Panchang Elements */}
          <div className="row g-4 mb-4">
            <div className="col-6 col-md-3">
              <div className="zodiac-card p-4 text-center h-100">
                <div className="fs-2 mb-2">🌙</div>
                <div className="small text-muted mb-1">Tithi</div>
                <div className="fw-bold">{panchang.tithi}</div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="zodiac-card p-4 text-center h-100">
                <div className="fs-2 mb-2">⭐</div>
                <div className="small text-muted mb-1">Nakshatra</div>
                <div className="fw-bold">{panchang.nakshatra}</div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="zodiac-card p-4 text-center h-100">
                <div className="fs-2 mb-2">🧘</div>
                <div className="small text-muted mb-1">Yoga</div>
                <div className="fw-bold">{panchang.yoga}</div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="zodiac-card p-4 text-center h-100">
                <div className="fs-2 mb-2">🔮</div>
                <div className="small text-muted mb-1">Karana</div>
                <div className="fw-bold">{panchang.karana}</div>
              </div>
            </div>
          </div>

          {/* Sun & Moon Timings */}
          <div className="row g-4 mb-4">
            <div className="col-12 col-md-6">
              <div className="zodiac-card p-4 h-100">
                <h3 className="h4 fw-bold mb-4 d-flex align-items-center gap-2">
                  <Sun className="h-6 w-6" style={{ color: '#eab308' }} />
                  Sun Timings
                </h3>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center p-3 rounded" style={{ backgroundColor: '#fff7ed' }}>
                      <span className="text-secondary fw-medium">Sunrise</span>
                      <span className="fw-bold" style={{ color: '#ea580c' }}>{panchang.sunrise}</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center p-3 rounded" style={{ backgroundColor: '#fff7ed' }}>
                      <span className="text-secondary fw-medium">Sunset</span>
                      <span className="fw-bold" style={{ color: '#ea580c' }}>{panchang.sunset}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="zodiac-card p-4 h-100">
                <h3 className="h4 fw-bold mb-4 d-flex align-items-center gap-2">
                  <Moon className="h-6 w-6" style={{ color: '#3b82f6' }} />
                  Moon Timings
                </h3>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center p-3 rounded" style={{ backgroundColor: '#eff6ff' }}>
                      <span className="text-secondary fw-medium">Moonrise</span>
                      <span className="fw-bold" style={{ color: '#2563eb' }}>{panchang.moonrise}</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center p-3 rounded" style={{ backgroundColor: '#eff6ff' }}>
                      <span className="text-secondary fw-medium">Moonset</span>
                      <span className="fw-bold" style={{ color: '#2563eb' }}>{panchang.moonset}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Inauspicious Timings */}
          <div className="zodiac-card p-4 mb-4">
            <h3 className="h4 fw-bold mb-4 d-flex align-items-center gap-2">
              <span className="fs-4">⚠️</span>
              Inauspicious Timings (Avoid)
            </h3>
            <div className="row g-3">
              <div className="col-12 col-md-4">
                <div className="p-3 rounded text-center" style={{ backgroundColor: '#fef2f2' }}>
                  <div className="fw-semibold mb-1">Rahukaal</div>
                  <div className="small fw-medium" style={{ color: '#dc2626' }}>{panchang.rahukaal}</div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="p-3 rounded text-center" style={{ backgroundColor: '#fef2f2' }}>
                  <div className="fw-semibold mb-1">Yamaghanta</div>
                  <div className="small fw-medium" style={{ color: '#dc2626' }}>{panchang.yamaghanta}</div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="p-3 rounded text-center" style={{ backgroundColor: '#fef2f2' }}>
                  <div className="fw-semibold mb-1">Gulika Kaal</div>
                  <div className="small fw-medium" style={{ color: '#dc2626' }}>{panchang.gulika}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Auspicious Timings */}
          <div className="zodiac-card p-4 mb-4">
            <h3 className="h4 fw-bold mb-4 d-flex align-items-center gap-2">
              <Star className="h-6 w-6" style={{ color: '#eab308' }} />
              Shubha Hora (Auspicious Hours)
            </h3>
            <div className="row g-3">
              {panchang.shubhaHoras.map((hora, index) => (
                <div key={index} className="col-12 col-md-4">
                  <div className="p-3 rounded text-center" style={{ backgroundColor: '#f0fdf4' }}>
                    <div className="fw-semibold" style={{ color: '#16a34a' }}>{hora}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Muhurat for Activities */}
          <div className="zodiac-card p-4 mb-4">
            <h3 className="h4 fw-bold mb-4 d-flex align-items-center gap-2">
              <span className="fs-4">🎯</span>
              Auspicious Muhurat
            </h3>
            <div className="row g-3">
              {panchang.auspicious.map((item, index) => (
                <div key={index} className="col-12">
                  <div className="d-flex justify-content-between align-items-center p-3 rounded" style={{ backgroundColor: '#f3e8ff' }}>
                    <span className="fw-semibold">{item.activity}</span>
                    <span className="fw-medium" style={{ color: '#9333ea' }}>{item.timing}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Festivals */}
          {panchang.festivals.length > 0 && (
            <div className="zodiac-card p-4 text-center mb-4">
              <h3 className="h4 fw-bold mb-4 d-flex align-items-center justify-content-center gap-2">
                <span className="fs-4">🎊</span>
                Festivals & Special Days
              </h3>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {panchang.festivals.map((festival, index) => (
                  <span key={index} className="badge cosmic-gradient text-white px-4 py-2 fs-6">
                    {festival}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Important Notes */}
          <div className="zodiac-card p-4">
            <h3 className="h4 fw-bold mb-3">Important Notes</h3>
            <ul className="list-unstyled mb-0">
              {panchang.inauspicious.map((note, index) => (
                <li key={index} className="d-flex align-items-start gap-2 text-secondary mb-2">
                  <span style={{ color: '#f97316' }}>⚠</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Info Note */}
      <div className="mt-5 mx-auto rounded-3 p-4 text-center" style={{ maxWidth: '1400px', backgroundColor: '#f3e8ff' }}>
        <p className="small text-muted mb-0">
          🙏 Panchang is calculated based on Vedic astrology principles. 
          Consult with an astrologer for personalized guidance on important life decisions.
        </p>
      </div>
    </div>
  )
}
