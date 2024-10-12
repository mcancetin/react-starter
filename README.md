# React Starter

This project allows users to quickly start a React project without dealing with configurations for React, Vite, ESLint, Prettier, and TailwindCSS.

## Features

-   **React**: A JavaScript library for building user interfaces.
-   **Vite**: A fast build tool and development server.
-   **ESLint**: A tool for identifying and fixing problems in JavaScript code.
-   **Prettier**: An opinionated code formatter.
-   **TailwindCSS**: A utility-first CSS framework.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1. Clone the repository:

    ```sh
    git clone <repository-url>
    cd react-starter
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

### Available Scripts

-   **Development**: Start the development server.

    ```sh
    npm run dev
    ```

-   **Build**: Build the project for production.

    ```sh
    npm run build
    ```

-   **Lint**: Run ESLint to check for linting errors.

    ```sh
    npm run lint
    ```

-   **Preview**: Preview the production build locally.
    ```sh
    npm run preview
    ```

### Project Structure

-   [src/](src/): Contains the source code.

    -   [`App.jsx`](src/App.jsx): Main application component.
    -   [`main.jsx`](src/main.jsx): Entry point of the application.
    -   [`assets/`](src/assets/): Static assets like images and fonts.
    -   [`index.css`](src/index.css): Global CSS file.

-   [public/](public/): Contains static files that are served directly.

-   Configuration files:
    -   [`.prettierrc`](.prettierrc): Prettier configuration.
    -   [`eslint.config.js`](eslint.config.js): ESLint configuration.
    -   [`tailwind.config.js`](tailwind.config.js): TailwindCSS configuration.
    -   [`vite.config.js`](vite.config.js): Vite configuration.
    -   [`postcss.config.js`](postcss.config.js): PostCSS configuration.

## License

This project is licensed under the MIT License.

## Using the Starter Project

1. **Clone the Starter Repository:**

    ```sh
    git clone <starter-repository-url> new-project
    cd new-project
    ```

2. **Remove the Existing Git History:**

    ```sh
    rm -rf .git
    ```

3. **Initialize a New Git Repository:**

    ```sh
    git init
    ```

4. **Create a New Repository on GitHub:**

    - Go to GitHub and create a new repository.
    - Do not initialize the repository with a README, .gitignore, or license.

5. **Add the New GitHub Repository as a Remote:**

    ```sh
    git remote add origin <new-repository-url>
    ```

6. **Add All Files and Commit:**

    ```sh
    git add .
    git commit -m "Initial commit"
    ```

7. **Push to GitHub:**
    ```sh
    git push -u origin main
    ```

By following these steps, you can use the starter project to create a new React project and upload it to GitHub.
