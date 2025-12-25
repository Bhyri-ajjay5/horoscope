# 🚀 Deployment Guide - Astro Vision

## Production Build

### Build Command
```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build Locally
```bash
npm run preview
```

---

## Deployment Options

### 1. Vercel (Recommended)

#### Setup
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow prompts to link your project

#### Configuration
Create `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### 2. Netlify

#### Via Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### Via Git Integration
1. Push code to GitHub
2. Connect repository in Netlify dashboard
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`

#### Configuration
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/horoscope",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/horoscope/',
     plugins: [react()]
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### 4. Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login and initialize:
   ```bash
   firebase login
   firebase init hosting
   ```

3. Configure `firebase.json`:
   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. Deploy:
   ```bash
   npm run build
   firebase deploy
   ```

### 5. Docker Deployment

#### Dockerfile
Create `Dockerfile`:
```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### nginx.conf
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Build and Run
```bash
docker build -t astro-vision .
docker run -p 8080:80 astro-vision
```

#### Docker Compose
Create `docker-compose.yml`:
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "8080:80"
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```

---

## Environment Variables

### Development (.env.development)
```env
VITE_API_BASE_URL=https://aztro.sameerkumar.website
```

### Production (.env.production)
```env
VITE_API_BASE_URL=https://aztro.sameerkumar.website
# Add your production API URLs
```

---

## Performance Optimization

### 1. Code Splitting
Already configured with Vite - routes are lazy loaded

### 2. Image Optimization
- Use WebP format for images
- Compress images before deployment
- Use lazy loading for images

### 3. Build Optimization
Vite automatically:
- Minifies JavaScript and CSS
- Tree-shakes unused code
- Optimizes chunk splitting

### 4. CDN Configuration
For static assets, configure CDN in `vite.config.js`:
```javascript
export default defineConfig({
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  }
})
```

---

## SSL Certificate (HTTPS)

### Let's Encrypt (Free)
Most hosting platforms (Vercel, Netlify) provide automatic SSL.

### Manual Setup with Certbot
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## Monitoring & Analytics

### 1. Google Analytics
Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Error Tracking (Sentry)
```bash
npm install @sentry/react
```

In `main.jsx`:
```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: import.meta.env.MODE,
});
```

---

## CI/CD Pipeline

### GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
          working-directory: ./
```

---

## Security Best Practices

1. **Environment Variables**: Never commit `.env` files
2. **API Keys**: Use environment variables for all keys
3. **CORS**: Configure proper CORS headers
4. **Content Security Policy**: Add CSP headers
5. **HTTPS**: Always use HTTPS in production

---

## Troubleshooting

### Build Fails
- Check Node.js version (use 18+)
- Clear `node_modules` and reinstall
- Check for ESLint errors

### Routing Issues
- Ensure server redirects all routes to `index.html`
- Check `base` configuration in `vite.config.js`

### API Not Working
- Verify environment variables are set
- Check CORS configuration
- Test API endpoints separately

---

## Post-Deployment Checklist

- [ ] Test all pages and routes
- [ ] Verify API integrations
- [ ] Check responsive design on mobile
- [ ] Test form submissions
- [ ] Verify analytics tracking
- [ ] Check page load speed (use Lighthouse)
- [ ] Test on different browsers
- [ ] Ensure SSL certificate is active
- [ ] Set up error monitoring
- [ ] Configure backups

---

## Support

For deployment issues:
- Check hosting provider documentation
- Review build logs
- Test locally with `npm run preview`

---

🚀 Happy Deploying!
