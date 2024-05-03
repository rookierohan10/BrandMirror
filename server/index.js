import express from "express";
import cors from 'cors';
import puppeteer from "puppeteer";
import {createClient} from "@supabase/supabase-js";
import e from "express";

//Port Number
const port = 5000;

//Express App
const app = express();
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//Supabase Client
const supabaseUrl = "https://ceqcenjplvnvecutmlhl.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlcWNlbmpwbHZudmVjdXRtbGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwNTA3NDQsImV4cCI6MTk5ODYyNjc0NH0.WO3-uR0tXKXiky5mPpQ2O_sRhr3kDtMsbYPpFbYXa54";
const supabase = createClient(supabaseUrl, supabaseKey);

//Index Page Listener
app.get("/", (req, res) => {
    res.send(`<h1>BrandMirror Server</h1>`);
});

//Register User
app.post("/sign-up", async (req, res) => {
    let {name, email, brand, password} = req.body;

    const {data} = await supabase
        .from('bm_users')
        .select()
        .eq("email", email);
    if (data[0]) res.send("exists");
    else {
        const {error} = await supabase
            .from('bm_users')
            .insert({name: name, email: email, password: password, brand: brand});
        error && res.send("fail");
        res.send("success");
    }
});

//Login User
app.post("/sign-in", async (req, res) => {
    let {email, pass} = req.body;

    const {data} = await supabase
        .from("bm_users")
        .select()
        .eq("email", email);

    if (data[0]) {
        if (data[0].password === pass) {
            res.send("success");
        } else {
            res.send("!pass");
        }
    } else {
        res.send("!exist");
    }
});

//Server Listener
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${5000}`);
});