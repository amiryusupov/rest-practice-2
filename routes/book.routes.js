import { Router } from "express";
import { addBook, allBooks, delBook, getbyGenre } from "../services/books.service.js";

const router = Router()

router.get("/", async (req, res) => {
    try {
        const result = await allBooks()
        res.status(200).json({
            message: "All books retrived",
            books: result.rows
        })
    }
    catch (err) {
        res.status(500).json({
            message: "Inteval Server Error",
            error: err
        })
    }
})
router.get("/:genre", async (req, res) => {
    try {
        const genre = req.params.genre
        const search = await getbyGenre(genre)
        res.status(200).json({
            message: "Search was successfully",
            books: search.rows
        })
    }
    catch (err) {
        res.status(500).json({
            message: "Inteval Server Error",
            error: err
        })
    }
})
router.post("/", async (req, res) => {
    try {
        const {name, author, genre, since} = req.body
        await addBook(name, author, genre, since)
        res.status(200).json({
            message: "Book added",
        })
    }
    catch (err) {
        res.status(500).json({
            message: "Inteval Server Error",
            error: err
        })
    }
})
router.delete("/:id", (req, res) => {
    try {
        delBook(req.params.id)
        res.status(200).json({
            message: "Book deleted",
        })
    }
    catch (err) {
        res.status(500).json({
            message: "Inteval Server Error",
            error: err
        })
    }
})

export default router