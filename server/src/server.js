import express from "express";
import cors from 'cors';
import path from 'path';
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { serve } from 'inngest/express'
import { clerkMiddleware } from "@clerk/express";
import { inngest, functions } from "./lib/inngest.js";
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";
import executeRoutes from "./routes/executeRoutes.js";
import router from "./routes/problemRoutes.js";
import subRouter from "./routes/submissionRoutes.js";
import aiRouter from "./routes/aiRoutes.js";

const app = express();

app.use((req, res, next) => {
    res.setHeader("ngrok-skip-browser-warning", "true");
    next();
});


const __dirname = path.resolve();

// Middleware
app.use(express.json());
// credentials:true meaning?? => server allows a browser to include cookies on request 
app.use(
    cors({
        origin: [
            process.env.CLIENT_URL, // allow our frontend to access the api
        ],
        credentials: true,
    })
);

app.use(clerkMiddleware()); // this adds auth field to the request object: req.auth()

app.use("/api/inngest", serve({ client: inngest, functions }))

app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes)

// बाकी routes के नीचे जोड़ो
app.use("/api/execute", executeRoutes);

app.use("/api/problems", router);

app.use("/api/sub", subRouter);


app.use("/api/ai", aiRouter);

app.get("/health", (req, res) => {
    res.status(200).json({ msg: "api is up and running" });
});




// make our app ready for deployment
if (ENV.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../client", "dist", "index.html"));
    });
};


const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, () =>
            console.log("Server is running on port:", ENV.PORT)
        )
    } catch (error) {
        console.error("💥Error starting the server", error);
    }
}

startServer()