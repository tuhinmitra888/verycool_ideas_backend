# verycool_ideas_backend
Graphql API for your cool ideas

# Technologies used:
* Apollo Server 3.6.1
* GraphQL 15.5.0
* Prisma ORM
* The service has been developed using node.js (v16.13.2), in vscode IDE, in macOS environment
* The MongoDB instance has been created using a free cluster of MongoDB atlas

# How to run the app locally
Pre-requisite:
Node.js is installed in the host machine

Steps:
* Checkout the repo from github
* From the root folder, please run `npm i` to install all the dependencies
* Once done, please run `node src/index.js` to run the application. The GraphQL API service is then available on `http://localhost:4000/`
* Alternatively running `npm test` will run the tests in the `test` folder and run the application

# How to functionally test the GraphQL API
* User sign up:
```
mutation {
  signup(name: "Test User 1", email: "testuser@prisma.io", password: "graphql124") {
    token
    user {
      id
    }
}
```
User Login:
Post ideas:
Fetch posted ideas:


