# EasyTask – Angular Task Manager

EasyTask is a modern Angular application for managing users and their tasks.  
It demonstrates component-based architecture, service-driven data management, and a clean, responsive UI.

---

## ✨ Features

- **User List:** Browse and select users with avatars.
- **Task Management:** View, add, and manage tasks for each user.
- **Component-Based:** Modular Angular components for scalability and maintainability.
- **Responsive Design:** Clean layout with a header and main content area.
- **Dummy Data:** Preloaded users and tasks for demonstration.

---

## 🏗️ Project Structure

```
src/
├── app/
│   ├── header/           # App header component
│   ├── user/             # User list item component
│   ├── tasks/            # Task list, new task, and task item components
│   │   ├── new-task/     # Add new task component
│   │   └── task/         # Single task display component & model
│   ├── shared/
│   │   └── card/         # Reusable card UI component
│   ├── dummy-users.ts    # Dummy user data
│   ├── app.component.*   # Main app component
│   └── tasks.service.ts  # Task management service
│
├── assets/
│   ├── task-management-logo.png
│   └── users/            # User avatar images
│
├── styles.css            # Global styles
└── index.html            # App entry point
```

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/easytask.git
   cd easytask
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   ng serve
   ```
   Visit [http://localhost:4200](http://localhost:4200) in your browser.

---

## 🧩 Usage

- **Select a user** from the left panel to view their tasks.
- **Add new tasks** using the provided form.
- **View and manage tasks** for each user.
- If no user is selected, a prompt appears:  
  _“Select a user to see their tasks!”_

---

## 🛠️ Technologies Used

- [Angular](https://angular.io/)
- TypeScript
- HTML & CSS

---

## 📂 Assets

- **Logo:** `assets/task-management-logo.png`
- **User Avatars:** `assets/users/user-1.jpg`, ..., `user-6.jpg`

---

## 📦 Build & Deployment

To build for production:
```sh
ng build --configuration production
```

To deploy to GitHub Pages (recommended):
1. Install `gh-pages`:
   ```sh
   npm install --save-dev gh-pages
   ```
2. Add this to your `package.json` scripts (replace `easytask` with your project name if different):
   ```json
   "deploy": "ng build --base-href /easytask/ && npx gh-pages -d dist/easytask"
   ```
3. Deploy:
   ```sh
   npm run deploy
   ```

---

## 📄 License

[MIT](LICENSE)

---

**EasyTask** – Manage your tasks, the easy way!
