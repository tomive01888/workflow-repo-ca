# Workflow repo for the CA

This forked repository features a project equipped with modern development tools to maintain code quality, consistency, and robust testing. The setup includes ESLint for linting, Prettier for formatting, Vitest for unit testing, and Playwright for end-to-end (E2E) testing.

---

## Cloning and installation of dependencies

1. Clone the repository:

```bash
https://github.com/tomive01888/workflow-repo-ca.git
```

2. Install dependencies

```bash
npm install
```

<details>
  <summary>Installed Packages</summary>
  <div>

    Linting & Formatting
    - ESLint
    - Prettier
    - Globals

    Development Tools
    - TailwindCSS
    - Live Server
    - dotenv
    - Husky (for Git hooks)

    Testing
    - Playwright
    - Vitest
    - JSDOM

    TypeScript Support
    - Type definitions (`@types/node`)

  </div>
</details>

---

### Vitest

Test files for Vitest is at root level in folder name **vitest_test_folder**

- To test all Vitest related test files run:

```bash
npm run test:unit

or

npx vitest test
```

- To run a single file test, add file name at the end:

```bash
npx vitest test example.vitest.js
```

---

### Playwright

Test files for Playwright is at root level in folder name **playwright_test_folder**

- To test all Vite related test files run:

```bash
npm run test:e2e

or

npx playwright test
```

- To run a single file test, add file name at the end:

```bash
npx playwright test example.spec.js
```

---

#### Copy `.env.example` to `.env`:

1. **Copy the `.env.example` file** to `.env`:

   - Example contents of `.env.example`:

   ```env
   TEST_USER_EMAIL = example@stud.noroff.no
   TEST_USER_PASSWORD = example123
   ```

   - **Note**: This is just an example. Replace these values with your actual email and password (e.g., the credentials you use when registering or your existing account details).

2. **Location**: The `.env` file should be placed at the **root level** of the project.

3. **Security**: Add the `.env` file to `.gitignore` to ensure that it is not accidentally pushed to a public repository. This keeps sensitive information, such as your user credentials, secure and only accessible locally.

   Example `.gitignore` entry:

   ```gitignore
   # Ignore .env files
   .env
   ```

---
