# 🎬 MovieHunter

> A modern movie search app built with **React** and **TMDB API**, featuring real-time search with debounce, dynamic movie listings, and a clean UI. Find your next favorite movie without the hassle.

---

## 🚀 Features

- 🔍 **Live Search** with debounce (powered by `react-use`)
- 🎞️ Fetches real movie data from **TMDB API**
- ⭐ Displays posters, ratings, release year, and language
- 🔁 Auto-loads most popular movies on startup
- ⚠️ Handles errors and loading states gracefully
- 📦 Built with React + Axios + Tailwind
- 💡 Component-based structure (Search, MovieCard, Spinner)

---

## 🖼️ Demo Preview
 
![preview.png](src/assets/preview.png)


## 🛠️ Technologies Used

- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [TMDB API](https://developer.themoviedb.org/docs)
- [react-use](https://github.com/streamich/react-use)
- CSS Modules / Tailwind (based on your choice)

---

## 📂 Folder Structure

```
src/
├── Components/
│   ├── Search.jsx
│   ├── MovieCard.jsx
│   └── Spinner.jsx
├── App.jsx
├── index.jsx
└── assets/
```

---

## 🔐 API Setup (Required)

1. Create a `.env` file in your root:

```
VITE_TMDB_API_KEY=your_tmdb_bearer_token
```

2. **Never** commit this file. Add to `.gitignore`.

---

## 🧠 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 📘 Acknowledgements

- Movie data provided by [TMDB](https://www.themoviedb.org/)

---

## ✨ Future Ideas

- 🎭 Movie details page with routing
- 🌍 Filter by genre, language, or rating
- ♾️ Infinite scroll or pagination
- 📱 Improve mobile responsiveness
- 🎨 Add animations with Framer Motion

---

## 👤 Author

Made with focus & fire by **Hunter Karan** ⚔️  
_“A hunter who never stops leveling.”_
