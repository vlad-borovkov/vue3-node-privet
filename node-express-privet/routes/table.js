/* eslint-disable comma-dangle */
/* eslint-disable quotes */
// eslint-disable-next-line quotes
const router = require("express").Router();
// eslint-disable-next-line quotes

const { getTable } = require("../controllers/table");

// eslint-disable-next-line quotes
router.get("/", getTable);

module.exports = router;
