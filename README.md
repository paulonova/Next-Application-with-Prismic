This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Link to Repo: https://github.com/aluiziodeveloper/nextjs-devnews-instalacao

## Getting Started

First, run the development server:

> npm run dev => Starts the development server.

> npm run build => Builds the App for production

> npm run start => To run the built App in production mode

## Install TypeScript

> npm install -D typescript @types/react @types/node

## Move the folder Page into a SRC folder:

<p>I can create a folder name posts and inside a file named index.tsx that will be the principal file in the folder</p>

src- - posts - index.tsx

## Using SASS

> npm install sass

<p>Nothing more! Next compile the scss file</p>

## Run Json Server using api.json file in the root project

> sudo chown -R $USER /usr/local/lib/node_modules

> npx json-server api.json -p 3333 -w -d 2000

<p>This will start server in port 3333, watch over changings and have a delay of 2 seconds</p>

########################################################################
########################################################################
########################################################################

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
