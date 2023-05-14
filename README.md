# Login App

This is a simple login page for a frontend test built with React, Vite, and Nx. The application is deployed at [https://zog-front-end-test.vercel.app/](https://zog-front-end-test.vercel.app/).

## Prerequisites

- Node.js 14.15.1 or later
- npm 6.14.8 or later

## Getting Started

1. Clone the repository:
```git clone https://github.com/anshry/ZOG-FrontEnd-Test.git```
2. Change the current directory to the project folder:
```cd login-app```
2. Install the dependencies:
```npm install```

## Development

To start the development server, run:
```npm start```
or 
```nx serve login-app``` 

Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Building

To build the app for production, run:
```npm run build```
The built files will be generated in the `dist/login-app` directory.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Testing

To run the tests, execute:
```npm test```

## Linting

To lint the project, run:
```npm run lint```

## Deployment

The application is deployed on Vercel. To deploy your own version, follow these steps:

1. Sign up for a [Vercel account](https://vercel.com/signup).
2. Install the Vercel CLI:
```npm i -g vercel```
3. Log in to your Vercel account:
```vercel login```
4. Deploy the application:
```vercel --prod```

This will create a new deployment and provide you with a unique URL to access your application.