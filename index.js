import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

let daily = [];
let work = [];

app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.get("/daily",(req,res)=>{
    res.render("daily.ejs", {data: daily});
});

app.get("/work",(req,res)=>{
    res.render("work.ejs",{data: work});
})

app.post("/work",(req,res)=>{
    // console.log(req.body);
    const x= {
        taskName: req.body["task-name"],
        description: req.body.description,
        dueDate: req.body["due-date"],
    }
    work.push(x);
    console.log(work);
    res.render("work.ejs",{data: work});

    // res.render("index.ejs",data);
});

app.post("/daily",(req,res)=>{
    // console.log(req.body);
    const x= {
        taskName: req.body["task-name"],
        description: req.body.description,
        dueDate: req.body["due-date"],
    }
    daily.push(x);
    console.log(daily);
    res.render("daily.ejs",{data: daily});

    // res.render("index.ejs",data);
});

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
});
