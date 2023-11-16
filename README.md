Next.js starter

## Prerequisites

Before running this project, you must have the following installed:

- Node.js (**v18.12.0** or later)
- Yarn

## Installation

1. Clone this repository to your local machine.
2. Run `yarn` in the project directory to install all required dependencies.
3. Create a `.env` file at the root directory of the project and add the necessary environment variables. See the `.env.sample` file for reference.
4. Run `yarn start` or `yarn dev` to start the application.

## NPM scripts

Available development scripts:

- `yarn dev`： Start the development server.
- `yarn build`：Build the production version
- `yarn start`：Start the production server.
- `yarn lint`：Run ESLint for syntax checking.
- `yarn prepare`：Install Husky.

## Tech Stack

This project utilizes the following technologies and dependencies:

- `@hookform/resolvers`: Resolvers for working in conjunction with React Hook Form.
- `@radix-ui/react-*`: A series of Radix UI React components, offering a rich set of UI functionalities.
- `@tanstack/react-query`: A powerful data fetching and caching library.
- `class-variance-authority`: Provides flexible CSS management.
- `clsx`: A utility for constructing className strings.
- `cmdk`: A toolkit for building command menus.
- `date-fns`: A modern JavaScript date utility library.
- `lucide-react`: A React icon library.
- `next`: A high-performance React framework for building static or dynamic websites and applications.
- `next-themes`: A tool for theme switching in Next.js.
- `react` and `react-dom`: Core libraries for building user interfaces.
- `react-day-picker`: A flexible date picker for React.
- `react-hook-form`: An efficient form management library.
- `tailwind-merge`: A utility for merging Tailwind CSS utility classes.
- `tailwindcss-animate`: Provides animation effects for Tailwind CSS.
- `zod`: A TypeScript validation library.
- `zustand`: A lightweight state management library.

Development dependencies include:

- `@types/*`: Type definitions for TypeScript.
- `@typescript-eslint/*`: ESLint plugins and configurations for TypeScript.
- `autoprefixer`: A tool for automatically adding CSS prefixes.
- `eslint` and related plugins: For code quality and style checks.
- `postcss`: A tool for processing CSS.
- `tailwindcss`: A utility-first CSS framework.
- `typescript`: A superset of JavaScript that adds static typing.

The package manager used is `yarn@4.0.2`.

## Project structure

```javascript
.
├── .git                    // Git version control system folder, storing the project's version history and changes.
├── .husky                  // Husky configuration folder, used for managing Git hooks
├── .next                   // Next.js compilation output folder, containing generated static files and server-side code.
├── .storybook              // Holds Storybook configuration and setup files.
├── .vscode                 // Visual Studio Code workspace settings, such as editor preferences and extensions.
├── .yarn                   // Yarn package manager configuration and cache data.
├── cypress                 // Folder for Cypress end-to-end test files and configurations.
├── node_modules            // Node.js module folder, storing all dependencies.
├── public                  // Static resource folder, used for storing static files like images and fonts that don't require compilation.
├── src                     // Source code folder, containing the main code of the application.
│   ├── app                 // Folder for Next route pages.
│   ├── components          // Reusable UI components.
│   │   ├── Providers       // React Context providers, used for sharing state across components.
│   │   └── ui              // UI components, such as buttons, input boxes, etc.
│   ├── hooks               // Custom React hooks for logic reuse and state management.
│   ├── lib                 // Common libraries and utility functions.
│   │   └── validators      // Functions related to form validation or other data validations.
│   ├── stores              // State management-related code, like stores using Zustand or ReactQuery.
│   │   └── react-query     // Configuration and state management for react-query.
│   └── stories             // Contains Storybook stories for UI components.
│   └── types               // TypeScript type definitions and interfaces.
├── .commitlintrc.json      // CommitLint configuration file, used for checking the format of Git commit messages
├── .eslintrc.json          // ESLint configuration file, defining code quality and formatting rules.
├── .gitignore              // Specifies files or folders to be ignored by Git, such as node modules, build artifacts, etc.
├── .nvmrc                  // nvm (Node Version Manager) configuration file, specifying the version of Node.js.
├── .yarnrc                 // Yarn's old configuration file, setting Yarn's behavior and options.
├── .yarnrc.yml             // Yarn's new configuration file in YAML format, setting Yarn's behavior and options.
├── Dockerfile              // Docker configuration file for building the project's Docker container.
├── README.md               // Project's readme file, usually containing project information, build steps, and usage instructions.
├── components.json         // Shadcn ui config file
├── cypress.config.js       // For setting up Cypress testing options.
├── next-env.d.ts           // Next.js TypeScript type definition file, supporting TypeScript.
├── next.config.js          // Next.js configuration file, customizing build and runtime behavior.
├── package.json            // NPM configuration file defining project metadata, dependencies, and scripts.
├── postcss.config.js       // PostCSS configuration file, for processing CSS (like adding automatic prefixes).
├── tailwind.config.ts      // Tailwind CSS configuration file, for customizing styles and themes.
├── tsconfig.json           // TypeScript configuration file, setting options for the TypeScript compiler.
└── yarn.lock               // Yarn lock file, ensuring consistent installation of dependencies.
```

## Specifications

### Commit Message Guidelines

#### Rules

To keep the commit history neat and easy to understand, we require all Git commit messages to follow the format:
`[type]: [title]`

- type

  - `build`：修改構建系統或外部依賴
  - `ci`：修改 CI 配置文件或腳本
  - `chore`：對非業務邏輯程式碼的更改，例如更新開發工具
  - `docs`：文件更新
  - `feat`：新增功能
  - `fix`：修復 bug
  - `perf`：改善程式的性能
  - `refactor`：重構程式碼，不添加新功能或修復 bug
  - `revert`：還原先前的 commit
  - `style`：改善程式碼風格，例如縮排、空格等
  - `test`：增加或修改測試程式

- title (sentence-case)
  - 簡短地描述提交的改變。主題應遵循句子格式，即首字母大寫，其餘字母小寫。 Ex:`This is an example of sentence case.`

#### Example

- `build: Update eslint config for production`
- `ci: Add GitHub Actions workflow for automated testing`
- `chore: Update project dependencies to latest versions`
- `docs: Add usage instructions to README`
- `feat: Add new user registration feature`
- `fix: Resolve login issue for locked accounts`
- `docs: Update API documentation`
- `perf: Optimize image loading for faster page rendering`
- `refactor: Simplify error handling in API client`
- `revert: Roll back to previous version of login form`
- `style: Enforce consistent indentation with Prettier`
- `test: Add unit tests for user registration endpoint`
