import pg from "pg"

export const client = new pg.Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "practice",
    password: "root"
})

client.connect()