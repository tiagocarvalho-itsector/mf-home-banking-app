# Home Banking App

This project was created using Webpack5, Module Federation, ReactJS and Typescript! It also uses Zustand for store management. It's a simple web application that allows authenticated users to see their bank account balance, their account extract and also their personal info. It uses Dynamic Routing so container doesn't need to know their remote apps inner routes.

## Features

- **Container**: Home page, which hosts login and banking record apps (remotes) using Webpack5 Module Federation.
- **Login**: Login app that keeps the users login info in a zustand store and (un)authorizes them into the other apps.
- **Banking Record**: Calls a mock API to get user's bank extract and bank balance; hosts Personal Data app.
- **Personal Data**: Uses a zustand store to show user's personal data (remote of Banking Record app).
- **Utils**: Remote of all other apps.

## How to Run the App

### Prerequisites

- Node.js (version 18 or later)
- npm (usually comes with Node.js)
- Dependencies installed as described in the Installation Proccess section

### Installation Proccess

Clone the repository and install dependencies for each application:

```bash
# Clone the repository
git clone https://github.com/tiagocarvalho-itsector/mf-home-banking-app
cd mf-home-banking-app

# Install dependencies for all aps
powershell -ExecutionPolicy Bypass -File .\install.ps1
```

### Running the Applications

You need to run all applications at the same time.

```bash
# Create types (webpack module federation plugin)
powershell -ExecutionPolicy Bypass -File .\make-types.ps1

# Run all apps
powershell -ExecutionPolicy Bypass -File .\run.ps1
```

Open localhost:3000 in your browser and check out the final result for yourself!
