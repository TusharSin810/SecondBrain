import dotenv from "dotenv"

dotenv.config()

if (!process.env.PORT || !process.env.DB_CONNECTION) {
  throw new Error('Missing required environment variables');
}

export const config = {
    port: process.env.PORT,
    dbConnection: process.env.DB_CONNECTION,
    jwtSecret: process.env.JWT_SECRET,
};