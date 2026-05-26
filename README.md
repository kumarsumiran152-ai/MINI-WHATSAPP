# WhatsApp Clone 💬

A chat application inspired by WhatsApp built using **MongoDB, Express.js, Node.js, JavaScript, HTML, and CSS**.

This project allows users to send and view messages with chat data stored in **MongoDB** through a **Node.js + Express** backend.

---

## 🚀 Features

- Chat functionality
- Send and receive messages
- Store messages in MongoDB
- Dynamic frontend using JavaScript
- REST API integration
- Responsive interface
- Express server handling requests

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

---

## 📂 Project Structure

```plaintext
whatsapp-clone/
│
├── models/
│   └── chat.js                # MongoDB schema/model for chat messages
│
├── public/
│   └── style.css              # Styling files
│
├── views/
│   ├── index.ejs              # Main chat page
│   ├── new.ejs                # Create/send new message page
│   └── edit.ejs               # Edit existing chat message
│
├── .gitignore                 # Ignore node_modules, env files, etc.
├── init.js                    # Initial database setup / sample data
├── index.js                   # Main server entry point
├── package.json               # Project metadata & dependencies
├── package-lock.json          # Dependency lock file
│
└── README.md                  # Project documentation
```

---

### 📌 Folder Explanation

- **models/** → Contains MongoDB models and schema definitions.
- **public/** → Stores static files like CSS.
- **views/** → Contains EJS templates rendered by Express.
- **init.js** → Used for database initialization or inserting sample chat data.
- **index.js** → Starts the Express server and handles routing.
- **package.json** → Stores project dependencies and scripts.

This structure fits an **Express + MongoDB + EJS + HTML/CSS + JavaScript chat application** without authentication.

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/whatsapp-clone.git
```

### 2. Move into the project folder

```bash
cd whatsapp-clone
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 5. Start the application

```bash
npm start
```

Open:

```plaintext
http://localhost:8080
```

---

## 💬 How It Works

1. User opens the chat interface.
2. User sends a message.
3. Message is processed through Express routes.
4. Data is stored in MongoDB.
5. Stored chats are displayed in the interface.

---

## 🔮 Future Improvements

- Real-time messaging
- Authentication system
- Group chats
- Message notifications
- Media sharing
- Dark mode

---

## 📄 License

This project is built for learning and educational purposes.

---

Made with ❤️ using MongoDB, Express.js, Node.js, JavaScript, HTML & CSS
