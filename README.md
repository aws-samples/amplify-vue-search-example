# Amplify Vue Search Example

A Vue.js sample Book Search project integrated with aws-amplify.
The Book Search project implements a book information registration and search service using REST API and GraphQL.

![Dashboard](/public/images/dashboard.png)

## Architecture

![Dashboard](/public/images/architecture.png)

- The book search using REST API uses API Gateway, Lambda, and DynamoDB.
- GraphQL API uses AppSync, DynamoDB, Lambda (triggered by DynamoDB Stream), and Elasticsearch to perform searches, while Elasticsearch implements more flexible searches using full-text search.

All of these architectures are implemented using the Amplify CLI.

## Getting Started

1. Install Amplify CLI

```bash
$ npm install -g @aws-amplify/cli
```

2. Clone project and install dependencies

```bash
$ git clone https://github.com/aws-samples/amplify-vue-search-example.git
$ cd amplify-vue-search-example
$ npm install
```

3. Create backend

```bash
$ amplify init
$ amplify push
```

4. Start the project

```bash
$ npm run serve
```

open http://localhost:8080/

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
