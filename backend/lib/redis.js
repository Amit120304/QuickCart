import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();
console.log("Connecting to Redis at:", process.env.UPSTASH_REDIS_URL);

export const redis = new Redis(process.env.UPSTASH_REDIS_URL, {
    maxRetriesPerRequest: 100,
});
// await redis.set("key", "value");
// redis.on("error", (err) => {
//     console.error("Redis connection error:", err);
// });
