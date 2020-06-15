/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      title
      author
      price
      description
      releaseDate
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        author
        price
        description
        releaseDate
      }
      nextToken
    }
  }
`;
export const searchBooks = /* GraphQL */ `
  query SearchBooks(
    $filter: SearchableBookFilterInput
    $sort: SearchableBookSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchBooks(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        author
        price
        description
        releaseDate
      }
      nextToken
      total
    }
  }
`;
