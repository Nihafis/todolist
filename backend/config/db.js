import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST || "127.0.0.1", // Use 'mysql_db' if set, otherwise 'localhost'
  user: process.env.DB_USER || "root",
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
}); 

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the MySQL database.");
});
export default db;
 