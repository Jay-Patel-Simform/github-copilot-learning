# Git Hooks Setup (Optional)

To set up automatic linting and formatting on commit, you can install and configure Husky:

```bash
npm install --save-dev husky lint-staged
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
```

Then add this to your package.json:

```json
{
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,css,md}": [
      "prettier --write"
    ]
  }
}
```

This will automatically run ESLint and Prettier on staged files before each commit.
