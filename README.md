# PeerMentor

PeerMentor is a modern web application designed to foster peer-to-peer mentorship and collaboration. Whether you're a student, a junior developer, or an experienced professional, PeerMentor helps you connect with like-minded individuals to learn, share, and grow.

## 🚀 Features

* 🔐 Firebase Authentication (Email/Password, Google, Facebook)
* 🧠 Smart Dashboard with productivity metrics
* 📇 Interactive mentor profiles with progress stats
* 💬 Messaging/chat UI
* 🖼️ Customizable user profiles
* 📚 Posts, Publications, and Notes tabs for rich content
* 🎨 Beautiful UI built with modern React and CSS

## 🛠️ Tech Stack

* React.js
* Firebase (Auth, Hosting)
* React Router
* CSS (custom, responsive, gradient-based)

## 📂 Folder Structure

```
PeerMentor/
├── public/
├── src/
│   ├── components/        # Shared UI components (optional)
│   ├── pages/             # Page views (Home, Profile, Dashboard, etc.)
│   ├── Layout.js          # Sidebar + Top nav wrapper
│   ├── LoginSignup.js     # Auth page (register + login)
│   ├── App.js             # Router setup
│   ├── firebase.js        # Firebase config
│   └── styles/            # CSS files (e.g., LoginSignup.css, Layout.css)
├── .firebaserc
├── firebase.json
├── .gitignore
├── package.json
└── README.md
```

## 🔧 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/Maxine-ai/PeerMentor.git
cd PeerMentor
```

### 2. Install dependencies

```bash
npm install
```

### 3. Firebase Configuration

Create a `.env` file or update `firebase.js` with your Firebase config:

```js
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

### 4. Run the app locally

```bash
npm start
```

### 5. Firebase Deployment

```bash
npm run build
firebase deploy
```

## 🧪 Tips

* You don’t need to run `npm run build` for local development — just save your files and refresh.
* Ensure correct routes are nested in `Layout` to maintain nav bar visibility.

## ✨ Credits

Built with ❤️ by [Maxine-ai](https://github.com/Maxine-ai)

## 📃 License

This project is licensed under the MIT License.

