# Home Banking App

This project was created using Webpack5, Module Federation, ReactJS and Typescript! It also uses Redux for store management.

## Features

- **Container**: Home page, which keeps the users login info in a zustand store and (un)authorizes them.
- **Banking Record**: Calls a mock API to get user's bank extract and bank balance.
- **Personal Data**: Uses a zustand store to get user's personal data.

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

You need to run all applications att the same time.

```bash
# Create types (webpack module federation plugin)
powershell -ExecutionPolicy Bypass -File .\make-types.ps1

# Run all apps
powershell -ExecutionPolicy Bypass -File .\run.ps1
```

Open localhost:3000 in your browser and check out the final result for yourself!
