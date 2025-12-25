import axios from 'axios';

const AZTRO_API = 'https://aztro.sameerkumar.website';

// Get daily horoscope for a zodiac sign
export const getDailyHoroscope = async (sign, day = 'today') => {
  try {
    const response = await axios.post(`${AZTRO_API}?sign=${sign}&day=${day}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching horoscope:', error);
    // Return mock data if API fails
    return getMockHoroscope(sign);
  }
};

// Mock horoscope data for fallback
const getMockHoroscope = (sign) => {
  return {
    date_range: "Today",
    current_date: new Date().toLocaleDateString(),
    description: `Today brings new opportunities for ${sign}. Trust your intuition and stay open to unexpected possibilities. The cosmos is aligned in your favor.`,
    compatibility: getCompatibleSign(sign),
    mood: getRandomMood(),
    color: getRandomColor(),
    lucky_number: Math.floor(Math.random() * 100) + 1,
    lucky_time: `${Math.floor(Math.random() * 12) + 1}:00 ${Math.random() > 0.5 ? 'AM' : 'PM'}`
  };
};

const getCompatibleSign = (sign) => {
  const compatibility = {
    aries: 'Leo',
    taurus: 'Virgo',
    gemini: 'Libra',
    cancer: 'Scorpio',
    leo: 'Aries',
    virgo: 'Taurus',
    libra: 'Gemini',
    scorpio: 'Cancer',
    sagittarius: 'Aquarius',
    capricorn: 'Pisces',
    aquarius: 'Sagittarius',
    pisces: 'Capricorn'
  };
  return compatibility[sign.toLowerCase()] || 'Aries';
};

const getRandomMood = () => {
  const moods = ['Energetic', 'Calm', 'Focused', 'Creative', 'Adventurous', 'Reflective'];
  return moods[Math.floor(Math.random() * moods.length)];
};

const getRandomColor = () => {
  const colors = ['Blue', 'Green', 'Red', 'Purple', 'Orange', 'Pink', 'Yellow'];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Calculate compatibility between two signs
export const calculateCompatibility = (sign1, sign2) => {
  const compatibilityMatrix = {
    aries: { aries: 60, taurus: 40, gemini: 70, cancer: 50, leo: 90, virgo: 45, libra: 75, scorpio: 55, sagittarius: 95, capricorn: 40, aquarius: 80, pisces: 60 },
    taurus: { aries: 40, taurus: 70, gemini: 50, cancer: 85, leo: 45, virgo: 95, libra: 60, scorpio: 80, sagittarius: 40, capricorn: 90, aquarius: 50, pisces: 85 },
    gemini: { aries: 70, taurus: 50, gemini: 60, cancer: 45, leo: 80, virgo: 55, libra: 95, scorpio: 50, sagittarius: 75, capricorn: 45, aquarius: 90, pisces: 60 },
    cancer: { aries: 50, taurus: 85, gemini: 45, cancer: 70, leo: 55, virgo: 80, libra: 60, scorpio: 95, sagittarius: 50, capricorn: 75, aquarius: 45, pisces: 90 },
    leo: { aries: 90, taurus: 45, gemini: 80, cancer: 55, leo: 70, virgo: 50, libra: 85, scorpio: 60, sagittarius: 95, capricorn: 45, aquarius: 75, pisces: 55 },
    virgo: { aries: 45, taurus: 95, gemini: 55, cancer: 80, leo: 50, virgo: 70, libra: 60, scorpio: 85, sagittarius: 45, capricorn: 95, aquarius: 55, pisces: 75 },
    libra: { aries: 75, taurus: 60, gemini: 95, cancer: 60, leo: 85, virgo: 60, libra: 70, scorpio: 55, sagittarius: 80, capricorn: 50, aquarius: 95, pisces: 65 },
    scorpio: { aries: 55, taurus: 80, gemini: 50, cancer: 95, leo: 60, virgo: 85, libra: 55, scorpio: 75, sagittarius: 50, capricorn: 80, aquarius: 50, pisces: 95 },
    sagittarius: { aries: 95, taurus: 40, gemini: 75, cancer: 50, leo: 95, virgo: 45, libra: 80, scorpio: 50, sagittarius: 70, capricorn: 45, aquarius: 85, pisces: 60 },
    capricorn: { aries: 40, taurus: 90, gemini: 45, cancer: 75, leo: 45, virgo: 95, libra: 50, scorpio: 80, sagittarius: 45, capricorn: 75, aquarius: 50, pisces: 85 },
    aquarius: { aries: 80, taurus: 50, gemini: 90, cancer: 45, leo: 75, virgo: 55, libra: 95, scorpio: 50, sagittarius: 85, capricorn: 50, aquarius: 70, pisces: 60 },
    pisces: { aries: 60, taurus: 85, gemini: 60, cancer: 90, leo: 55, virgo: 75, libra: 65, scorpio: 95, sagittarius: 60, capricorn: 85, aquarius: 60, pisces: 75 }
  };

  const score = compatibilityMatrix[sign1.toLowerCase()]?.[sign2.toLowerCase()] || 50;
  
  let message = '';
  if (score >= 80) {
    message = 'Excellent Match! You two are cosmically aligned with great potential for harmony.';
  } else if (score >= 60) {
    message = 'Good Match! With effort and understanding, this relationship can flourish.';
  } else if (score >= 40) {
    message = 'Moderate Match. Differences exist but can be overcome with patience.';
  } else {
    message = 'Challenging Match. Requires significant effort and compromise.';
  }

  return { score, message };
};
