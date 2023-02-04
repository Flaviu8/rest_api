import pg from "pg"
// const Pool = require('pg').Pool


const { Pool } = pg


export const pool = new Pool({
    user: "postgres_mm2l_user",
    host: "dpg-cff7v49gp3jjsefsr73g-a",
    database: "postgres_mm2l",
    password: "ixvmSAZlQnAGojZQUvbxwPvn2p7aCH7d",
    port: 5432


})