/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
require("dotenv").config();
const express = require("express");

// вызываем библиоетку express
const app = express();


const { PORT = 3000 } = process.env; // локальный порт нашего сервера

const cors = require("cors"); // контролируем кросс-доменные запросы
const bodyParser = require("body-parser"); // преобразуем общение клиент-сервер в json

app.use(bodyParser.json()); // для собирания JSON-формата

const { config } = require("dotenv");
const { requestLogger, errorLogger } = require("./middlewares/logger"); // для ведения логов ошибок

const NotFoundError = require("./errors/not-found-error");

app.use(requestLogger); // подключаем логгер запросов

const options = {
  origin: [
    "http://localhost:8080",
    "https://localhost:8080",
  ],
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: [
    "Content-Type",
    "origin",
    "Authorization",
    "Access-Control-Allow-Methods",
  ],
  credentials: true,
};

app.use("*", cors(options));

app.use("/table", require("./routes/table"));

app.use((req, res, next) => {
  next(new NotFoundError("Такой страницы не существует"));
});

app.use(errorLogger); // подключаем логгер ошибок

app.use((err, req, res, next) => {
  // централизованный обработчик ошибок
  // если у ошибки нет статуса, выставляем 500
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    // проверяем статус и выставляем сообщение в зависимости от него
    message: statusCode === 500 ? "На сервере произошла ошибка" : message,
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
