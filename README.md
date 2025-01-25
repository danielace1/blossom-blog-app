# 🌼Blossom Blog App

Blossom Blog is a dynamic blogging platform where admins can create, feature, and manage posts, while users can explore, save, and interact with content. Built with the latest web technologies, Blossom Blog delivers a seamless and responsive user experience.

## ✨Features

### 👤 User Features

- **📰 Browse Posts**: Explore a variety of blogs on different topics.
- **📌 Save Posts**: Save your favorite posts for easy access later.
- **🔒 User Authentication**: Secure login and registration via Clerk.

### 🛠️ Admin Features

- **✍️ Create Blogs**: Admins can write and publish blogs.
- **⭐ Feature Blogs**: Highlight specific blogs as featured content.
- **🗑️ Manage Content**: Edit or delete blogs as needed.

### 🌐 General Features

- **📱 Responsive Design**: Fully optimized for both desktop and mobile devices.
- **🔐 Secure API**: All endpoints are protected and follow modern security standards.
- **🎨 Interactive UI**: Smooth animations and intuitive interactions.

---

## 💻 Tech Stack

### 🖼️ Frontend

- **React-19**: Component-based UI development.
- **TailwindCSS**: Rapid and modern styling.
- **React Query**: Server state management.

### ⚙️ Backend

- **Node.js**: Server-side JavaScript runtime.
- **Express.js-5**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for efficient data storage.
- **Clerk**: Secure authentication.

### 🛠️ Tools

- **Axios**: For handling HTTP requests.
- **Toast Notifications**: User-friendly alerts.

---

## ⚙️ Installation

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/danielace1/blossom-blog.git
   cd client &&
   cd server
   ```

2. **Install dependencies**:

- in client as well as in server.

  ```bash
  npm install
  ```

3. **Set up environment variables**:
   Create a `.env` file in the both folders and add the necessary environment variables.

4. **Run the app**:

   - Start the backend server:
     ```bash
     node --env-file .env --watch index.js
     ```
   - Start the frontend:
     ```bash
     npm run dev
     ```

5. **Access the app**:
   Open your browser and navigate to `http://localhost:5173`.

---

## 🤝 Contribution

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a [pull request](https://github.com/danielace1/blossom-blog-app/pulls).

---

## License

This project is licensed under the [MIT](./License) License.

---

## 👨‍💻 Author

- 🌟 [Sudharsan](https://www.instagram.com/code_ace_/)
