import express from "express"
import cors from "cors"
import bookRoute from "./routes/book.routes.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/books", bookRoute)
app.listen(8080, () => {
    console.log("Server is running...")
})