# 🍕 pizza.shop

**pizza.shop** is a web application built with React.js, Shadcn, and Tailwind CSS. The app was developed during the  [Rocketseat Ignite](https://www.rocketseat.com.br/) program as part of my learning journey. It aims to provide a seamless experience for managing restaurant deliveries.

## ✨ Features

- Manage restaurant deliveries
- Monitor monthly revenue and financial performance
- User-friendly dashboard with detailed analytics
- Responsive design

## 👾 Getting Started

Follow these steps to get the app up and running on your local machine.

### Prerequisites

- Node.js v18.17.1 or higher
- pnpm (package manager)

### Installation

*before running this front-end, you will have to clone the back-end from https://github.com/msvalandro/pizzashop-api and follow the instructions on README.md file*

create a `.env.local` file copying the environment variables from `.env.example` file to run it locally

```sh
# Clone the repository
git clone https://github.com/msvalandro/pizzashop-web.git
cd pizzashop-web

# Install dependencies
pnpm i

# Run the app
pnpm dev

# Run the app w/ mocked requests (no back-end needed)
pnpm dev:test

# Run tests
pnpm test

# Run e2e tests w/ playwright
pnpm test:e2e
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.