A full-stack web application where users can upload, download, tag, search, and rate film & anime resources such as scripts, fan art, and episode guides.

This project was built to demonstrate full-stack development skills with React (frontend) and Node.js + Express + MongoDB (backend).

Film-Anime-Resource-Hub/
│
├── server/ # Backend (Node.js + Express + MongoDB)
│ ├── index.js # Main server entry
│ ├── models.js # Mongoose models (User, Resource)
│ ├── middleware.js # Auth middleware
│ ├── routes/ # Auth & Resource routes
│ └── uploads/ # Uploaded files (auto-created)
│
├── client/ # Frontend (React)
│ ├── src/ # React components
│ └── public/
│
└── README.md

🚀 Features

🔐 User Authentication – Secure login & registration using JWT.

📂 Upload & Download – Share and access fan art, scripts, or guides.

🏷 Tagging System – Add tags like genre, studio, or release year.

🔎 Smart Search – Search by title, actor, director, or tags.

⭐ Rating System – Rate resources (1–5 stars).

⚙️ Tech Stack

Frontend: React

Backend: Node.js, Express

Database: MongoDB + Mongoose

Authentication: JWT

File Handling: Multer


📖 API Endpoints

Auth

POST /api/auth/register → Register new user

POST /api/auth/login → Login and get token

Resources

POST /api/resources/upload → Upload file (auth required)

GET /api/resources/search?q=keyword → Search by keyword

POST /api/resources/:id/rate → Rate a resource (auth required)

📌 Future Enhancements

📊 Sort by rating, date, or tags

💬 Add comments under resources

👤 User profile pages

🛡️ Admin controls for moderation

👨‍💻 Author

Bala Veera Venkata Satya Sai Mupparthi

💻 Passionate about Web Development & Python

🌟 Skilled in React, Node.js, Python, MySQL, Java, and more

🚀 Looking for opportunities in Full Stack Development & Software Engineering

📜 License

MIT License – free to use and modify.

👉 Do you want me to also make a short one-liner GitHub repo description (the tagline under the repo name) so your project looks professional on GitHub?
