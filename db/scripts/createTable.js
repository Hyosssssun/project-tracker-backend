import { pool } from "../index.js";

// async function createTable() {
//     const projectTable = await pool.query(
//         `CREATE TABLE IF NOT EXISTS projects (
//             projectId SERIAL PRIMARY KEY,
//             team BOOLEAN NOT NULL,
//             week INTEGER,
//             day INTEGER,
//             projectName TEXT NOT NULL);`
//     );
//     console.log("project table created", projectTable.command);
    
//     const urlTable = await pool.query(
//         `CREATE TABLE IF NOT EXISTS urls (
//             projectName TEXT NOT NULL,
//             url TEXT NOT NULL);`
//     );
//     console.log("url table created", urlTable.command);
// }

async function createTable() {
    const projectsTable = await pool.query(
        `CREATE TABLE IF NOT EXISTS projects (
            projectId SERIAL PRIMARY KEY,
            team BOOLEAN,
            week INTEGER,
            day INTEGER,
            projectName TEXT,
            url TEXT,
            projectStatus TEXT);`
    );
    console.log("projects table created with command of ", projectsTable.command);
}

try {
    await createTable();
} catch (err) {
    console.error(err);
} finally {
    await pool.end();
}
