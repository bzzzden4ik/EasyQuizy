# 📝 EasyQuizy — Automated Testing & Quiz Platform

> **Status:** 🛠️ In Active Development

EasyQuizy is a high-performance, secure, and intuitive web-based testing and quiz constructor designed to streamline knowledge evaluation, academic examinations, and interactive quizzes. The platform focuses on flexible test creation, strict access control, and seamless user experience.

---

## 🚀 Key Features (In Progress & Planned)

- **Quiz Constructor:** Dynamic creation of custom tests with various question types (single choice, multiple choice, text inputs).
- **Robust Authentication:** Secure user signup, login, and session persistence powered by **JWT (JSON Web Tokens)** with encrypted password hashing.
- **Role-Based Access Control:** Distinct workflows and interfaces for Instructors (quiz creators) and Students (test takers).
- **Instant Evaluation:** Automated real-time score calculation and performance analytics upon quiz submission.

---

## 🛠️ Technical Stack

### Client-Side (Frontend)
- **Core:** ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
- **Build Tool:** ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
- **Language:** ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
- **State Management & Routing:** Standard modern React ecosystem hooks and router layouts.

### Server-Side (Backend) & Storage
- **Runtime:** ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
- **Framework:** ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
- **Database:** ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white) (Relational data modeling for users, quizzes, questions, and results)
- **Security:** Security middleware layers and JWT token verification.

---

## 📁 Repository Structure

```text
easyquizy/
├── client/                 # Frontend application (React + Vite + TS)
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
├── server/                 # Backend application (Node.js + Express + PG)
│   ├── src/
│   ├── .env.example
│   └── package.json
└── README.md
