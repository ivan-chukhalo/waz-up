# Waz-Up

**Waz-Up** is a web application that displays the current weather in your city.  
It uses a public API to fetch real-time weather data and presents it in a user-friendly interface.  
The project is built with a modern frontend stack: Vite, React, HTML, and CSS.

## 📦 Deployment

Check out how this project works by this [link](https://waz-up.vercel.app/). The third-party [API](https://www.visualcrossing.com) used in this project does not provide data for every city in the world 🙂. You can test the app by searching for the weather in major cities like Kyiv, New York, Chicago, Paris, Istanbul.

## 🛠️ Technologies

<div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center;">
  <img src="https://img.shields.io/badge/React-black?style=for-the-badge&logo=react&logoColor=%2361dbfb" height="40">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=%2306B6D4" height="40">
  <img src="https://img.shields.io/badge/i18next-black?style=for-the-badge&logo=i18next&logoColor=white" height="40">
  <img src="https://img.shields.io/badge/Vite-black?style=for-the-badge&logo=vite&logoColor=%23646CFF" height="40">
  <img src="https://img.shields.io/badge/NPM-black?style=for-the-badge&logo=npm&logoColor=%23CB3837" height="40">
  <img src="https://img.shields.io/badge/Git-black?style=for-the-badge&logo=git&logoColor=%23F05032" height="40">
  <img src="https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript&logoColor=%23FFFF00" height="40">
  <img src="https://img.shields.io/badge/HTML-black?style=for-the-badge&logo=html5&logoColor=%23e34c26" height="40">
  <img src="https://img.shields.io/badge/CSS-black?style=for-the-badge&logo=css&logoColor=rebeccapurple" height="40">
</div>

## ⚙️ Features

✅ Search for weather by city name using an external API: upon entering a city name, the app fetches and displays real-time weather data — temperature, humidity, and wind speed.<br>
✅ Toggle between light/dark themes and Ukrainian/English interface languages.<br>
✅ Sync of theme and language preferences across `LocalStorage`, `DOM`, and app state for a consistent experience.<br>
✅ Weather icons displayed via SVG sprite — the app dynamically shows icons (sunny, cloudy, rainy, etc.) based on current conditions.

## 🚀 Installation & Setup

### 1. Clone the repository:

```bash
git clone https://github.com/ivan-chukhalo/waz-up.git
cd waz-up
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Obtain API key and create an environment variable:

- Create an account on [VisualCrossing](https://www.visualcrossing.com/sign-up/) – the data provider for this app.
- Go to your account dashboard. Click the Account button in the top right corner or use [this link](https://www.visualcrossing.com/account/).
- In the **Your details** section, find the **Key** and copy it.
- In the project root, create a file named `.env`.
- In that file, add: `VITE_API_KEY='YOUR_KEY'`, replacing `YOUR_KEY` with your actual key.

Save the file.

### 4. Run the app in development mode:

```bash
npm run dev
```

After that, the app will be available at [http://localhost:5173](http://localhost:5173).

### 5. Build for production:

```bash
npm run build
```

The compiled files will be located in the `dist/` directory.

## 📚 What I Learned

✅ Working with asynchronous code (`fetch`, `async/await`)<br>
✅ Creating custom hooks (`useWeather()`, `useTheme()`, `useTranslation()`) for abstraction<br>
✅ Applying the Smart vs Dumb Components approach (e.g., wrapper component `<Toggler/>`, container components `<ThemeToggler/>` and `<LanguageToggler/>`)<br>
✅ Implementing a theme switcher using CSS variables<br>
✅ Integrating basic localization using [i18next](https://www.i18next.com/)<br>
✅ Working with `LocalStorage`<br>
✅ Using `SVG sprites` in React and exploring different methods to import and display them, including pros and cons<br>
Special thanks to [Maksym Rudnyi](https://github.com/MaksymRudnyi/) for the great [explanation](https://www.youtube.com/watch?v=5r9sN5Yz79A)

## 🗂️ Project Structure

```
waz-up/
├── public/           # Favicon and SVG sprite
├── src/              # Application source code
│   ├── assets/       # Images
│   ├── components/   # Components
│   ├── hooks/        # Custom hooks
│   ├── i18n /        # i18n initialization and dictionaries
│   ├── App.jsx       # Root React component
│   ├── index.css     # Font import, global styles, light/dark theme CSS variables
│   ├── main.jsx      # Entry point
├── index.html        # Main HTML page
├── vite.config.js    # Vite configuration
├── package.json      # Dependencies and scripts
└── README.md         # Documentation
```

## 🧪 Testing

Automated tests are not implemented yet.
You can manually test the app via [this link](https://waz-up.vercel.app/) or by running it in development mode.

## 🙋‍♂️ Author

Developed by [Ivan Chukhalo](https://github.com/ivan-chukhalo).
