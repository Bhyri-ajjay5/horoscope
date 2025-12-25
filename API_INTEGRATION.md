# 🔌 API Integration Guide

## Available APIs for Enhancement

### 1. Aztro API (Currently Integrated)
**Endpoint**: `https://aztro.sameerkumar.website`

**Example Usage**:
```javascript
// In horoscopeService.js
const response = await axios.post(
  `https://aztro.sameerkumar.website?sign=aries&day=today`
);
```

**Response**:
```json
{
  "date_range": "Mar 21 - Apr 19",
  "current_date": "December 25, 2025",
  "description": "Today brings...",
  "compatibility": "Leo",
  "mood": "Happy",
  "color": "Red",
  "lucky_number": "7",
  "lucky_time": "3pm"
}
```

---

### 2. Vedic Astrology API (Recommended for Kundali)

#### Prokerala API
**Website**: https://api.prokerala.com/
**Features**: Kundali, Panchang, Dasha predictions

**Setup**:
```bash
npm install @prokerala/astrology
```

**Example**:
```javascript
import { Kundli } from '@prokerala/astrology';

const kundli = new Kundli({
  apiKey: process.env.VITE_PROKERALA_API_KEY,
});

const birthChart = await kundli.calculate({
  datetime: '1990-01-15T10:30:00',
  latitude: 28.6139,
  longitude: 77.2090
});
```

---

### 3. AstroAPI (Comprehensive Astrology)

**Website**: https://astrologyapi.com/
**Features**: Kundali, Panchang, Predictions, Transits

**Example**:
```javascript
const response = await axios.post(
  'https://api.astrologyapi.com/v1/birth_details',
  {
    day: 15,
    month: 1,
    year: 1990,
    hour: 10,
    min: 30,
    lat: 28.6139,
    lon: 77.2090,
    tzone: 5.5
  },
  {
    headers: {
      'Authorization': `Basic ${btoa(`${userId}:${apiKey}`)}`
    }
  }
);
```

---

### 4. Hindu Panchang API

#### Drik Panchang API
**Features**: Tithi, Nakshatra, Yoga, Karana, Muhurat

**Example**:
```javascript
const getPanchang = async (date, location) => {
  const response = await axios.get(
    `https://api.drikpanchang.com/v1/panchang`,
    {
      params: {
        date: date,
        latitude: location.lat,
        longitude: location.lon,
        api_key: process.env.VITE_PANCHANG_API_KEY
      }
    }
  );
  return response.data;
};
```

---

### 5. Horoscope API Alternatives

#### Horoscope API
**Endpoint**: `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/`

**Example**:
```javascript
const getHoroscope = async (sign, day) => {
  const response = await axios.get(
    `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily`,
    {
      params: {
        sign: sign,
        day: day // TODAY, TOMORROW, YESTERDAY
      }
    }
  );
  return response.data;
};
```

---

### 6. Compatibility API Enhancement

**Custom Algorithm** (Currently Implemented):
```javascript
// src/services/compatibilityService.js
export const calculateDetailedCompatibility = (sign1, sign2) => {
  const elementCompatibility = calculateElementMatch(sign1, sign2);
  const qualityCompatibility = calculateQualityMatch(sign1, sign2);
  const planetaryCompatibility = calculatePlanetaryMatch(sign1, sign2);
  
  return {
    overall: (elementCompatibility + qualityCompatibility + planetaryCompatibility) / 3,
    elements: elementCompatibility,
    qualities: qualityCompatibility,
    planetary: planetaryCompatibility,
    analysis: generateAnalysis(sign1, sign2)
  };
};
```

---

## Integration Steps

### Step 1: Add API Configuration
Create `src/config/api.js`:
```javascript
export const API_CONFIG = {
  AZTRO: {
    baseUrl: 'https://aztro.sameerkumar.website',
    timeout: 5000
  },
  VEDIC: {
    baseUrl: 'https://api.prokerala.com',
    apiKey: import.meta.env.VITE_PROKERALA_API_KEY,
    timeout: 10000
  },
  PANCHANG: {
    baseUrl: 'https://api.drikpanchang.com',
    apiKey: import.meta.env.VITE_PANCHANG_API_KEY,
    timeout: 5000
  }
};
```

### Step 2: Create API Client
Create `src/services/apiClient.js`:
```javascript
import axios from 'axios';
import { API_CONFIG } from '../config/api';

export const createApiClient = (service) => {
  const config = API_CONFIG[service];
  
  const client = axios.create({
    baseURL: config.baseUrl,
    timeout: config.timeout,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // Request interceptor
  client.interceptors.request.use(
    (config) => {
      if (API_CONFIG[service].apiKey) {
        config.headers.Authorization = `Bearer ${API_CONFIG[service].apiKey}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor
  client.interceptors.response.use(
    (response) => response.data,
    (error) => {
      console.error(`${service} API Error:`, error);
      return Promise.reject(error);
    }
  );

  return client;
};
```

### Step 3: Update Service Methods
Update `src/services/horoscopeService.js`:
```javascript
import { createApiClient } from './apiClient';

const aztroClient = createApiClient('AZTRO');
const vedicClient = createApiClient('VEDIC');

export const getDailyHoroscope = async (sign, day = 'today') => {
  try {
    const data = await aztroClient.post(`?sign=${sign}&day=${day}`);
    return data;
  } catch (error) {
    console.error('Error fetching horoscope:', error);
    return getMockHoroscope(sign);
  }
};

export const getVedicKundali = async (birthDetails) => {
  try {
    const data = await vedicClient.post('/kundli/birth-details', birthDetails);
    return data;
  } catch (error) {
    console.error('Error generating kundali:', error);
    return getMockKundali(birthDetails);
  }
};
```

---

## Environment Variables Setup

Create `.env.local` (never commit this):
```env
# Horoscope API
VITE_AZTRO_API_URL=https://aztro.sameerkumar.website

# Vedic Astrology
VITE_PROKERALA_API_KEY=your_api_key_here
VITE_VEDIC_API_URL=https://api.prokerala.com

# Panchang
VITE_PANCHANG_API_KEY=your_api_key_here
VITE_PANCHANG_API_URL=https://api.drikpanchang.com

# Optional: Analytics
VITE_GA_TRACKING_ID=UA-XXXXXXXXX-X
```

---

## Error Handling Best Practices

### Retry Logic
```javascript
const fetchWithRetry = async (fn, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
};

// Usage
const horoscope = await fetchWithRetry(() => getDailyHoroscope('aries'));
```

### Graceful Degradation
```javascript
export const getHoroscopeWithFallback = async (sign, day) => {
  try {
    // Try primary API
    return await getDailyHoroscope(sign, day);
  } catch (error) {
    try {
      // Try secondary API
      return await getAlternativeHoroscope(sign, day);
    } catch (secondError) {
      // Use mock data
      console.warn('Using mock data');
      return getMockHoroscope(sign);
    }
  }
};
```

---

## Caching Strategy

### Local Storage Cache
```javascript
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

export const getCachedHoroscope = async (sign, day) => {
  const cacheKey = `horoscope_${sign}_${day}`;
  const cached = localStorage.getItem(cacheKey);
  
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_DURATION) {
      return data;
    }
  }
  
  const data = await getDailyHoroscope(sign, day);
  localStorage.setItem(cacheKey, JSON.stringify({
    data,
    timestamp: Date.now()
  }));
  
  return data;
};
```

---

## Rate Limiting

### Implement Rate Limiter
```javascript
class RateLimiter {
  constructor(maxRequests, timeWindow) {
    this.maxRequests = maxRequests;
    this.timeWindow = timeWindow;
    this.requests = [];
  }

  async throttle() {
    const now = Date.now();
    this.requests = this.requests.filter(time => now - time < this.timeWindow);
    
    if (this.requests.length >= this.maxRequests) {
      const oldestRequest = this.requests[0];
      const waitTime = this.timeWindow - (now - oldestRequest);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
    
    this.requests.push(now);
  }
}

// Usage
const limiter = new RateLimiter(10, 60000); // 10 requests per minute

export const getDailyHoroscopeThrottled = async (sign, day) => {
  await limiter.throttle();
  return getDailyHoroscope(sign, day);
};
```

---

## Testing APIs

### Test File: `src/services/__tests__/horoscopeService.test.js`
```javascript
import { describe, it, expect, vi } from 'vitest';
import { getDailyHoroscope } from '../horoscopeService';

describe('Horoscope Service', () => {
  it('should fetch horoscope data', async () => {
    const data = await getDailyHoroscope('aries', 'today');
    expect(data).toHaveProperty('description');
    expect(data).toHaveProperty('lucky_number');
  });

  it('should handle API errors gracefully', async () => {
    vi.spyOn(global, 'fetch').mockRejectedValue(new Error('API Error'));
    const data = await getDailyHoroscope('aries', 'today');
    expect(data).toBeDefined(); // Should return mock data
  });
});
```

---

## Performance Monitoring

### Track API Performance
```javascript
export const trackApiCall = async (apiName, fn) => {
  const startTime = performance.now();
  
  try {
    const result = await fn();
    const duration = performance.now() - startTime;
    
    console.log(`${apiName} took ${duration.toFixed(2)}ms`);
    
    // Send to analytics if needed
    if (window.gtag) {
      window.gtag('event', 'api_call', {
        api_name: apiName,
        duration: duration,
        success: true
      });
    }
    
    return result;
  } catch (error) {
    const duration = performance.now() - startTime;
    console.error(`${apiName} failed after ${duration.toFixed(2)}ms`, error);
    throw error;
  }
};
```

---

## Documentation Resources

- **Aztro API**: https://github.com/sameerkumar18/aztro
- **Prokerala API**: https://api.prokerala.com/docs/
- **Astrology API**: https://astrologyapi.com/docs/
- **Drik Panchang**: https://www.drikpanchang.com/api/

---

🔌 Happy API Integration!
