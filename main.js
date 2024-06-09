let express = require("express");
let app = express();
app.use(express.urlencoded({ extended: false }));
function getWeather(req, res, next) {
    req.var = true;
    next();
}
app.get('/', getWeather, (req, res) => {
    res.send(`
    <h1>Submit your answer</h1>
    <form action="/result" method="POST">
    <input type="text" name="color">
    <button>Submit</button>
    </form>
    <p>${req.var ? "Editing" : "NO"}</p>
    `)
})
app.get('/about', (req, res) => {
    res.send("Welcome to about")
})
app.post("/result", (req, res) => {
    res.send(`${req.body.color} is the entered data`);
})

app.listen(3000);