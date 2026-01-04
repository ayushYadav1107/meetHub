# MeetHub

MeetHub is a modern web application starter kit built with Next.js 15, designed to provide a robust foundation for scalable and performant web applications. It integrates best-in-class technologies for authentication, database management, and UI development.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/)
- **Database:** [Drizzle ORM](https://orm.drizzle.team/) with [Neon](https://neon.tech/) (Serverless Postgres)
- **Authentication:** [Better Auth](https://www.better-auth.com/)
- **Forms:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Theming:** [Next Themes](https://github.com/pacocoursey/next-themes)

## ✨ Features

- **Secure Authentication:** Complete auth flow including Sign In, Sign Up, and Sign Out using Better Auth.
- **Protected Routes:** Middleware and server-side checks to protect sensitive pages.
- **Type-Safe Database:** Full type safety with Drizzle ORM and PostgreSQL.
- **Modern UI:** Clean and accessible UI components built with Radix UI and styled with Tailwind CSS 4.
- **Responsive Design:** Fully responsive layout optimized for all devices.
- **Dark Mode:** Built-in support for light and dark themes.

## 🛠️ Getting Started

Follow these steps to get the project running locally.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/meethub.git
    cd meethub
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root directory and add the necessary environment variables. You can use `.env.example` as a reference if available, or ensure you have the following:

    ```env
    DATABASE_URL=postgresql://...
    BETTER_AUTH_SECRET=...
    BETTER_AUTH_URL=http://localhost:3000
    # Add other provider secrets (Google, GitHub, etc.) as needed
    ```

4.  **Push database schema:**

    ```bash
    npm run db:push
    ```

5.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

A quick look at the top-level files and directories:

- `src/app`: App Router pages and layouts.
- `src/components`: Reusable UI components.
- `src/db`: Database schema and connection configuration.
- `src/lib`: Utility functions and shared logic.
- `src/modules`: Feature-based modules (e.g., `auth`, `home`).
- `public`: Static assets.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
