import { useState } from 'react'
import { zodiacData } from '../data/zodiacData'
import { calculateCompatibility } from '../services/horoscopeService'
import { Heart, Users } from 'lucide-react'

export default function Compatibility() {
  const [sign1, setSign1] = useState('')
  const [sign2, setSign2] = useState('')
  const [result, setResult] = useState(null)

  const handleCalculate = () => {
    if (!sign1 || !sign2) return
    
    const compatibility = calculateCompatibility(sign1, sign2)
    const zodiac1 = zodiacData.find(z => z.sign === sign1)
    const zodiac2 = zodiacData.find(z => z.sign === sign2)
    
    setResult({
      ...compatibility,
      zodiac1,
      zodiac2
    })
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="section-title">Zodiac Compatibility</h1>
        <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '800px' }}>
          Discover the cosmic connection between two zodiac signs. 
          Find out if you and your partner are written in the stars!
        </p>
      </div>

      {/* Selection Card */}
      <div className="mx-auto zodiac-card p-4 mb-4" style={{ maxWidth: '1200px' }}>
        <div className="row g-4 mb-4">
          {/* Person 1 */}
          <div className="col-12 col-lg-6">
            <label className="fs-5 fw-semibold mb-3 d-flex align-items-center gap-2">
              <Users className="h-5 w-5" />
              First Person's Sign
            </label>
            <div className="row g-2">
              {zodiacData.map((zodiac) => (
                <div key={zodiac.sign} className="col-4 col-sm-3">
                  <button
                    onClick={() => setSign1(zodiac.sign)}
                    className={`btn w-100 p-2 border-2 d-flex flex-column align-items-center justify-content-center ${
                      sign1 === zodiac.sign ? 'border-3' : ''
                    }`}
                    style={{
                      borderColor: sign1 === zodiac.sign ? '#9333ea' : '#dee2e6',
                      backgroundColor: sign1 === zodiac.sign ? '#f3e8ff' : 'white',
                      transform: sign1 === zodiac.sign ? 'scale(1.05)' : 'scale(1)',
                      minHeight: '80px'
                    }}
                  >
                    <div style={{ fontSize: '1.8rem' }} className="mb-1">{zodiac.emoji}</div>
                    <div className="small fw-semibold text-center" style={{ fontSize: '0.7rem' }}>{zodiac.name}</div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Person 2 */}
          <div className="col-12 col-lg-6">
            <label className="fs-5 fw-semibold mb-3 d-flex align-items-center gap-2">
              <Heart className="h-5 w-5" />
              Second Person's Sign
            </label>
            <div className="row g-2">
              {zodiacData.map((zodiac) => (
                <div key={zodiac.sign} className="col-4 col-sm-3">
                  <button
                    onClick={() => setSign2(zodiac.sign)}
                    className={`btn w-100 p-2 border-2 d-flex flex-column align-items-center justify-content-center ${
                      sign2 === zodiac.sign ? 'border-3' : ''
                    }`}
                    style={{
                      borderColor: sign2 === zodiac.sign ? '#ec4899' : '#dee2e6',
                      backgroundColor: sign2 === zodiac.sign ? '#fce7f3' : 'white',
                      transform: sign2 === zodiac.sign ? 'scale(1.05)' : 'scale(1)',
                      minHeight: '80px'
                    }}
                  >
                    <div style={{ fontSize: '1.8rem' }} className="mb-1">{zodiac.emoji}</div>
                    <div className="small fw-semibold text-center" style={{ fontSize: '0.7rem' }}>{zodiac.name}</div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleCalculate}
          disabled={!sign1 || !sign2}
          className="btn btn-cosmic btn-lg w-100"
        >
          Calculate Compatibility
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="mx-auto" style={{ maxWidth: '1200px' }}>
          {/* Score Card */}
          <div className="zodiac-card p-4 text-center mb-4">
            <div className="d-flex justify-content-center align-items-center gap-4 gap-md-5 mb-4 flex-wrap">
              <div className="text-center">
                <div style={{ fontSize: '4rem' }} className="mb-2">{result.zodiac1.emoji}</div>
                <div className="fw-bold fs-5">{result.zodiac1.name}</div>
                <div className="small text-muted">{result.zodiac1.element}</div>
              </div>
              
              <div className="fs-1 animate-pulse" style={{ color: '#ec4899' }}>
                ❤️
              </div>
              
              <div className="text-center">
                <div style={{ fontSize: '4rem' }} className="mb-2">{result.zodiac2.emoji}</div>
                <div className="fw-bold fs-5">{result.zodiac2.name}</div>
                <div className="small text-muted">{result.zodiac2.element}</div>
              </div>
            </div>

            <div className="mb-3">
              <div className="display-3 fw-bold text-gradient mb-2">
                {result.score}%
              </div>
              <div className="fs-5 fw-semibold text-secondary">Compatibility Score</div>
            </div>

            {/* Progress Bar */}
            <div className="progress mb-4" style={{ height: '1rem' }}>
              <div
                className="progress-bar cosmic-gradient"
                role="progressbar"
                style={{ width: `${result.score}%` }}
                aria-valuenow={result.score}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

            <p className="fs-5 text-secondary">
              {result.message}
            </p>
          </div>

          {/* Detailed Analysis */}
          <div className="row g-4 mb-4">
            {/* Strengths */}
            <div className="col-12 col-md-6">
              <div className="zodiac-card p-4 h-100">
                <h3 className="h4 fw-bold mb-4 d-flex align-items-center gap-2">
                  <span className="fs-4">✨</span>
                  Relationship Strengths
                </h3>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start gap-2 text-secondary mb-3">
                    <span style={{ color: '#22c55e' }}>✓</span>
                    <span>Strong emotional connection and mutual understanding</span>
                  </li>
                  <li className="d-flex align-items-start gap-2 text-secondary mb-3">
                    <span style={{ color: '#22c55e' }}>✓</span>
                    <span>Complementary personality traits that balance each other</span>
                  </li>
                  <li className="d-flex align-items-start gap-2 text-secondary mb-3">
                    <span style={{ color: '#22c55e' }}>✓</span>
                    <span>Shared values and life goals create harmony</span>
                  </li>
                  <li className="d-flex align-items-start gap-2 text-secondary mb-3">
                    <span style={{ color: '#22c55e' }}>✓</span>
                    <span>Natural chemistry and attraction between signs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Challenges */}
            <div className="col-12 col-md-6">
              <div className="zodiac-card p-4 h-100">
                <h3 className="h4 fw-bold mb-4 d-flex align-items-center gap-2">
                  <span className="fs-4">⚠️</span>
                  Potential Challenges
                </h3>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start gap-2 text-secondary mb-3">
                    <span style={{ color: '#f97316' }}>!</span>
                    <span>Different communication styles may require patience</span>
                  </li>
                  <li className="d-flex align-items-start gap-2 text-secondary mb-3">
                    <span style={{ color: '#f97316' }}>!</span>
                    <span>Need to respect each other's personal space and freedom</span>
                  </li>
                  <li className="d-flex align-items-start gap-2 text-secondary mb-3">
                    <span style={{ color: '#f97316' }}>!</span>
                    <span>Compromise required in decision-making processes</span>
                  </li>
                  <li className="d-flex align-items-start gap-2 text-secondary mb-3">
                    <span style={{ color: '#f97316' }}>!</span>
                    <span>Different approaches to conflict resolution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Advice */}
          <div className="zodiac-card p-4">
            <h3 className="h4 fw-bold mb-3 d-flex align-items-center gap-2">
              <span className="fs-4">💡</span>
              Relationship Advice
            </h3>
            <div className="text-secondary">
              <p className="mb-3">
                <strong>Communication:</strong> Open and honest dialogue is key to maintaining harmony. 
                Listen actively and express your feelings clearly.
              </p>
              <p className="mb-3">
                <strong>Appreciation:</strong> Celebrate each other's strengths and unique qualities. 
                Show gratitude for the little things.
              </p>
              <p className="mb-3">
                <strong>Growth:</strong> Support each other's personal growth and individual goals. 
                A strong relationship allows both partners to flourish.
              </p>
              <p className="mb-0">
                <strong>Quality Time:</strong> Make time for meaningful connections and shared experiences. 
                Create memories together that strengthen your bond.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Info Note */}
      <div className="mt-5 mx-auto rounded-3 p-4 text-center" style={{ maxWidth: '1200px', backgroundColor: '#fce7f3' }}>
        <p className="small text-muted mb-0">
          💕 Remember, astrological compatibility is just one factor in relationships. 
          Love, trust, and communication are what truly matter!
        </p>
      </div>
    </div>
  )
}
