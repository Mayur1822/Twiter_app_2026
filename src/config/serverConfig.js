import dns from "dns";
import dotenv from "dotenv";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const MONGO_URL = process.env.MONGO_URL;