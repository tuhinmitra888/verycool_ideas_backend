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
Navigate to the URL where the GraphQL API is running locally
* User sign up:
Run the following mutation using appropriate data
```
mutation {
  signup(name: "Test User 1", email: "testuser@prisma.io", password: "foo") {
    token
    user {
      id
    }
  }
} 
```
![image](https://user-images.githubusercontent.com/13495092/149681889-6ec16ed1-9614-4501-b2f0-731f8f43ff00.png)

* Post idea:
Copy the token generated in the sign up step and use it as Authorization header bearer token - the bearer token string should look like `Bearer <copied token>`
Run the following mutation
```
mutation {
  post(type: "type 2", name: "name 2", description: "desc 2") {
    id
  }
}
```
![image](https://user-images.githubusercontent.com/13495092/149681913-27858167-b5b5-4f7e-a597-c7d1313526a2.png)

* Fetch posted ideas:
Run the following query, the authorization is not required
```
query{
  ideas{
    id
    name
    type
    description
    postedBy {
      email
    }
  }
}
```
![image](https://user-images.githubusercontent.com/13495092/149681953-15c7450c-c870-4338-96c8-61bbb2189a87.png)

* Login and fetch ideas posted by a specific user
Run the following mutation, the authorization is not required
```
mutation {
  login(email: "testuser@prisma.io", password: "graphql124") {
    token
    user {
      ideas {
        type
        name
        description
      }
    }
  }
}
```
![image](https://user-images.githubusercontent.com/13495092/149681993-19fe1280-2c0a-40bf-8a31-c56e34f78297.png)

