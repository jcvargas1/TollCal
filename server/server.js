require('dotenv').config();
const express = require("express");
const app = express();
const pool = require("./db");
const cors = require('cors');

app.use(express.json())
app.use(cors());

// Retrieves all the toll data for the user

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});

app.get("/api/getschedule_oceb",  (req, res) => {
            pool.query("SELECT * FROM orangecounty_eb" , function(error,result) {
                if (error) throw error;
                res.status(200).json(result.rows)
                console.log("oceb")
            });
});


app.get("/api/getschedule_ocwb",  (req, res) => {
        pool.query("SELECT * FROM orangecounty_wb", function(error,result) {
            if (error) throw error;
            res.status(200).json(result.rows)
            console.log("ocwb")

        });
});

app.get("/api/getschedule_rcwb1",  (req, res) => {
        pool.query("SELECT * FROM riversidecounty_wb1" , function(error,result) {
            if (error) throw error;
            res.status(200).json(result.rows)
            console.log("ocwb1")

        });
});

app.get("/api/getschedule_rcwb2",  (req, res) => {
        pool.query("SELECT * FROM riversidecounty_wb2" , function(error,result) {
            if (error) throw error;
            res.status(200).json(result.rows)
            console.log("ocwb2")

        });
});

app.get("/api/getschedule_rceb1",  (req, res) => {
        pool.query("SELECT * FROM riversidecounty_eb1" , function(error,result) {
            if (error) throw error;
            res.status(200).json(result.rows)
            console.log("rceb1")

        });
});

app.get("/api/getschedule_rceb2",  (req, res) => {
        pool.query("SELECT * FROM riversidecounty_eb2" , function(error,result) {
            if (error) throw error;
            res.status(200).json(result.rows)
            console.log("rceb2")
        });
});
