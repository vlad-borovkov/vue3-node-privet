/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
const tableSchema = require("../models/table");
const NotFoundError = require("../errors/not-found-error");
const BadRequestError = require("../errors/bad-request-error");
const ForbiddenError = require("../errors/forbidden-error");

const OK = {
  OK: 200,
};

module.exports.getTable = (req, res, next) => {
  // забираем из объекта таблицу

  const getTable = new Promise((resolve, reject) => {
    const tableObject = tableSchema;

    if (tableObject) {
      resolve(tableObject);
    } else {
      reject(NotFoundError);
    }
  });

  getTable.then((table) => {
    res.status(OK.OK).send(table);
  })
    .catch(next);
};
