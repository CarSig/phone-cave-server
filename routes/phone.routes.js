const express = require("express");
const router = express.Router();
const Phones = require("../data/phones.json");

router.get("/", (req, res, next) => {
    res.json(Phones);
});



// get single phone
router.get("/:id", (req, res, next) => {
    const id = req.params.id;
    let singlePhone = [];
    console.log("sss")
    Phones.forEach((phone) => {
        if (phone.id == id) {
            singlePhone.push(phone);
        }
    });
    res.json(singlePhone);
});

module.exports = router;
