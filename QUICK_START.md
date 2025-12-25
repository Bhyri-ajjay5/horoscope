# ⚡ Quick Start Guide - Astro Vision

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd c:\work\horoscope
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: **http://localhost:3000**

---

## 📱 Features to Explore

### 1. Home Page (/)
- Beautiful landing page with cosmic design
- Overview of all features
- Call-to-action buttons

### 2. Zodiac Signs (/zodiac-signs)
- View all 12 zodiac signs
- Click any sign to see detailed information
- Learn about personality traits, compatibility, and more

### 3. Daily Horoscope (/daily-horoscope)
- Select your zodiac sign
- Choose Today, Tomorrow, or Yesterday
- Get your personalized horoscope prediction
- See lucky color, number, and time

### 4. Kundali (/kundali)
- Enter your birth details (name, date, time, place)
- Generate your Vedic birth chart
- View 12 houses and planetary positions
- Read predictions for career, health, finance, and relationships
- Print your Kundali

### 5. Compatibility (/compatibility)
- Select two zodiac signs
- Calculate compatibility score (0-100%)
- See relationship strengths and challenges
- Get relationship advice

### 6. Panchang (/panchang)
- View Hindu calendar for any date
- See Tithi, Nakshatra, Yoga, Karana
- Check auspicious and inauspicious timings
- Find Muhurat for important activities
- View festival information

---

## 🎨 Design Features

- **Cosmic Theme**: Purple, pink, and blue gradients
- **Glass Morphism**: Frosted glass effect on cards
- **Smooth Animations**: Hover effects and transitions
- **Responsive**: Works on mobile, tablet, and desktop
- **Professional Fonts**: Inter and Poppins from Google Fonts

---

## 🛠️ Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## 📂 Project Structure

```
horoscope/
├── src/
│   ├── components/     # Reusable components (Navbar, Footer)
│   ├── pages/          # Page components (Home, Zodiac, etc.)
│   ├── data/           # Static data (zodiacData.js)
│   ├── services/       # API services (horoscopeService.js)
│   ├── App.jsx         # Main app with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── index.html          # HTML template
└── package.json        # Dependencies and scripts
```

---

## 🔧 Configuration

### Change Port
Edit `vite.config.js`:
```javascript
export default defineConfig({
  server: {
    port: 3001  // Change port here
  }
})
```

### Modify Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: { ... }  // Modify colors here
    }
  }
}
```

---

## 🎯 What to Try First

1. **Browse Zodiac Signs**: Go to `/zodiac-signs` and click on your sign
2. **Get Daily Horoscope**: Visit `/daily-horoscope` and select your sign
3. **Generate Kundali**: Head to `/kundali` and enter your birth details
4. **Check Compatibility**: Try `/compatibility` with two signs
5. **View Panchang**: Check `/panchang` for today's calendar

---

## 💡 Tips

- **Responsive Design**: Resize your browser to see mobile views
- **Hover Effects**: Hover over cards and buttons for animations
- **Navigation**: Use the top navigation bar to explore all features
- **Print Kundali**: Generate a Kundali and click the print button

---

## 🐛 Troubleshooting

### Port Already in Use?
Kill the process or change port in `vite.config.js`

### Styles Not Loading?
- Check if Tailwind CSS is installed: `npm list tailwindcss`
- Restart dev server: `Ctrl+C` then `npm run dev`

### API Not Working?
The app has fallback mock data, so it works offline!

---

## 📚 Learn More

- **Full Documentation**: See `PROJECT_DOCUMENTATION.md`
- **Deployment Guide**: See `DEPLOYMENT.md`
- **API Integration**: See `API_INTEGRATION.md`

---

## ✨ Have Fun Exploring the Cosmos!

The application is fully functional and ready to use. Enjoy discovering what the stars have to say!

**Current Status**: ✅ Running at http://localhost:3000

---

🌟 **Pro Tip**: Open the browser DevTools (F12) to see React components in action!
