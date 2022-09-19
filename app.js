const express = require("express");
const cors = require("cors");
const contactRouter = require("./app/routes/contact.route");

const ApiError = require("./app/api-error");

const app = express();

app.use("/api/contacts", contactRouter);

//hardle 404 reponse
app.use((req, res, next) => {
    //Code o day se chay khi khong co route duoc dinh nghia nao
    //khop voi yeu cau. Goi next() de chuyen sang middleware xu ly loi
    return next(new ApiError(404, "Resource not found"));
});

//define error-handling middleware last, after other app.use() and routes calls
app.use((err, req, res, next) => {
    //Middleware xu ly loi tap trung
    //Trong cac doan code xu ly o cac route, goi next(error)
    //se chuyen ve middleware xu ly loi nay
    return res.status(error.statusCode ||500).json({
        message: error.message || "Internal Server Error",
    });
});
app.use(cors());
app.use(express.json());

app.get("/", (rep, res) => {
    res.json({ message: "Welcome to contact book application." });
});
app.use("/api/contacts", contactRouter);
module.exports = app;