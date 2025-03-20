# Home Banking App

This project was created using Webpack5, Module Federation, ReactJS and Typescript! It also uses Redux for store management.

## Features

- **Container**: Home page, which keeps the users login info in a store and (un)authorizes them.
- **Banking Record**: Calls a mock API to get user's banking extract.
- **Personal Data**: Calls a mock API to get user's personal data.

## How to Run the App

### Prerequisites

- Node.js (version 18 or later)
- npm (usually comes with Node.js)
- Dependencies installed as described in the Installation Proccess section

### Installation Proccess

Clone the repository and install dependencies for each application:

```bash
# Clone the repository
git clone https://github.com/crestianiam/template-react-webpack-ts-module-federation
cd template-react-webpack-ts-module-federation

# Install dependencies for the container app
cd container
npm i

# Install dependencies for bankingRecord app
cd ../bankingRecord
npm i

# Install dependencies for personalData app
cd ../personalData
npm i
```

### Running the Applications

You need to run all applications att the same time.

```bash
# Run the container app (on port 3000 - open this one in a browser to see the "final result")
cd container
npm start

# Run the bankingRecord app (on port 3001)
cd bankingRecord
npm start

# Run the personalData app (on port 3002)
cd personalData
npm start
```

And there you go!
