import pg from "pg"
// const Pool = require('pg').Pool


const { Pool } = pg


export const pool = new Pool({
    user: "flaviu",
    host: "localhost",
    database: "courses",
    password: "",
    port: ""


})