import { client } from "../configs/database.js"

export function allBooks() {
    const getBooks = `Select * from books;`

    return client.query(getBooks)
}
export function getbyGenre(genre) {
    const search = `select * from books where genre = $1`

    return client.query(search, [genre])
}
export function addBook(name, author, genre, since) {
    const createBook = `insert into books (name, author, genre, since) values($1, $2, $3, $4);`

    return client.query(createBook, [name, author, genre, since])
}
export function delBook(id) {
    const deleteBook = `Delete from books where id = $1`

    return client.query(deleteBook, [id])
}