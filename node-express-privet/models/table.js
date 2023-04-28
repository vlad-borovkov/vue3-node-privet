/* eslint-disable comma-dangle */
/* eslint-disable quote-props */
/* eslint-disable quotes */
// const mongoose = require("mongoose");
// const validator = require("validator");

// здесь ожидается взаимодействие с Mongo через Mongoose, имитируем исходным JSON файлом.

const tableSchema = {
  "items": [
    {
      "countView": 328,
      "countPlay": 335,
      "countSend": 5,
      "countOrder": 0,
      "countPay": 0,
      "parentId": 0,
      "categoryId": 4,
      "nameId": null,
      "id": 4,
      "title": "Поздравления с Днем Рождения",
      "viewSend": 1.52,
      "viewPay": 0,
      "children": [
        {
          "countView": 274,
          "countPlay": 275,
          "countSend": 4,
          "countOrder": 0,
          "countPay": 0,
          "parentId": 4,
          "categoryId": 15,
          "nameId": null,
          "id": 15,
          "title": "Папе",
          "viewSend": 1.46,
          "viewPay": 0
        },
        {
          "countView": 27,
          "countPlay": 27,
          "countSend": 0,
          "countOrder": 0,
          "countPay": 0,
          "parentId": 4,
          "categoryId": 108048,
          "nameId": null,
          "id": 108048,
          "title": "Топ 100",
          "viewSend": 0,
          "viewPay": 0
        },
        {
          "countView": 17,
          "countPlay": 23,
          "countSend": 1,
          "countOrder": 0,
          "countPay": 0,
          "parentId": 4,
          "categoryId": 30,
          "nameId": null,
          "id": 30,
          "title": "По именам",
          "viewSend": 5.88,
          "viewPay": 0,
          "children": [
            {
              "countView": 14,
              "countPlay": 20,
              "countSend": 1,
              "countOrder": 0,
              "countPay": 0,
              "parentId": 30,
              "categoryId": null,
              "nameId": 3394,
              "id": null,
              "title": "Камиль",
              "viewSend": 7.14,
              "viewPay": 0
            },
            {
              "countView": 2,
              "countPlay": 2,
              "countSend": 0,
              "countOrder": 0,
              "countPay": 0,
              "parentId": 30,
              "categoryId": null,
              "nameId": 35,
              "id": null,
              "title": "Никита",
              "viewSend": 0,
              "viewPay": 0
            },
            {
              "countView": 1,
              "countPlay": 1,
              "countSend": 0,
              "countOrder": 0,
              "countPay": 0,
              "parentId": 30,
              "categoryId": null,
              "nameId": 1,
              "id": null,
              "title": "Александр",
              "viewSend": 0,
              "viewPay": 0
            }
          ]
        },
        {
          "countView": 4,
          "countPlay": 4,
          "countSend": 0,
          "countOrder": 0,
          "countPay": 0,
          "parentId": 4,
          "categoryId": 10,
          "nameId": null,
          "id": 10,
          "title": "В стихах",
          "viewSend": 0,
          "viewPay": 0
        },
        {
          "countView": 4,
          "countPlay": 4,
          "countSend": 0,
          "countOrder": 0,
          "countPay": 0,
          "parentId": 4,
          "categoryId": 102023,
          "nameId": null,
          "id": 102023,
          "title": "Женщине",
          "viewSend": 0,
          "viewPay": 0
        },
        {
          "countView": 1,
          "countPlay": 1,
          "countSend": 0,
          "countOrder": 0,
          "countPay": 0,
          "parentId": 4,
          "categoryId": 222114,
          "nameId": null,
          "id": 222114,
          "title": "От Путина",
          "viewSend": 0,
          "viewPay": 0,
          "children": [
            {
              "countView": 1,
              "countPlay": 1,
              "countSend": 0,
              "countOrder": 0,
              "countPay": 0,
              "parentId": 222114,
              "categoryId": null,
              "nameId": 31,
              "id": null,
              "title": "Лев",
              "viewSend": 0,
              "viewPay": 0
            }
          ]
        },
        {
          "countView": 1,
          "countPlay": 1,
          "countSend": 0,
          "countOrder": 0,
          "countPay": 0,
          "parentId": 4,
          "categoryId": 222103,
          "nameId": null,
          "id": 222103,
          "title": "По временам года",
          "viewSend": 0,
          "viewPay": 0
        }
      ]
    },
    {
      "countView": 7,
      "countPlay": 7,
      "countSend": 2,
      "countOrder": 0,
      "countPay": 0,
      "parentId": 0,
      "categoryId": 2,
      "nameId": null,
      "id": 2,
      "title": "Праздники",
      "viewSend": 28.57,
      "viewPay": 0,
      "children": [
        {
          "countView": 3,
          "countPlay": 3,
          "countSend": 0,
          "countOrder": 0,
          "countPay": 0,
          "parentId": 2,
          "categoryId": 222150,
          "nameId": null,
          "id": 222150,
          "title": "День Пожилых людей",
          "viewSend": 0,
          "viewPay": 0,
          "children": [
            {
              "countView": 3,
              "countPlay": 3,
              "countSend": 0,
              "countOrder": 0,
              "countPay": 0,
              "parentId": 222150,
              "categoryId": 222151,
              "nameId": null,
              "id": 222151,
              "title": "Красивые",
              "viewSend": 0,
              "viewPay": 0
            }
          ]
        },
        {
          "countView": 1,
          "countPlay": 1,
          "countSend": 0,
          "countOrder": 0,
          "countPay": 0,
          "parentId": 2,
          "categoryId": 222122,
          "nameId": null,
          "id": 222122,
          "title": "День Уголовного розыска",
          "viewSend": 0,
          "viewPay": 0,
          "children": [
            {
              "countView": 1,
              "countPlay": 1,
              "countSend": 0,
              "countOrder": 0,
              "countPay": 0,
              "parentId": 222122,
              "categoryId": 222123,
              "nameId": null,
              "id": 222123,
              "title": "Прикольные поздравления",
              "viewSend": 0,
              "viewPay": 0
            }
          ]
        },
        {
          "countView": 1,
          "countPlay": 1,
          "countSend": 1,
          "countOrder": 0,
          "countPay": 0,
          "parentId": 2,
          "categoryId": 222154,
          "nameId": null,
          "id": 222154,
          "title": "Всемирный день мужчин",
          "viewSend": 100,
          "viewPay": 0,
          "children": [
            {
              "countView": 1,
              "countPlay": 1,
              "countSend": 1,
              "countOrder": 0,
              "countPay": 0,
              "parentId": 222154,
              "categoryId": 222232,
              "nameId": null,
              "id": 222232,
              "title": "По именам",
              "viewSend": 100,
              "viewPay": 0,
              "children": [
                {
                  "countView": 1,
                  "countPlay": 1,
                  "countSend": 1,
                  "countOrder": 0,
                  "countPay": 0,
                  "parentId": 222232,
                  "categoryId": null,
                  "nameId": 3198,
                  "id": null,
                  "title": "Мирон",
                  "viewSend": 100,
                  "viewPay": 0
                }
              ]
            }
          ]
        },
        {
          "countView": 1,
          "countPlay": 1,
          "countSend": 1,
          "countOrder": 0,
          "countPay": 0,
          "parentId": 2,
          "categoryId": 109108,
          "nameId": null,
          "id": 109108,
          "title": "День святых Веры, Надежды, Любови",
          "viewSend": 100,
          "viewPay": 0,
          "children": [
            {
              "countView": 1,
              "countPlay": 1,
              "countSend": 1,
              "countOrder": 0,
              "countPay": 0,
              "parentId": 109108,
              "categoryId": 119857,
              "nameId": null,
              "id": 119857,
              "title": "Красивые",
              "viewSend": 100,
              "viewPay": 0
            }
          ]
        },
        {
          "countView": 1,
          "countPlay": 1,
          "countSend": 0,
          "countOrder": 0,
          "countPay": 0,
          "parentId": 2,
          "categoryId": 109930,
          "nameId": null,
          "id": 109930,
          "title": "День морской пехоты",
          "viewSend": 0,
          "viewPay": 0,
          "children": [
            {
              "countView": 1,
              "countPlay": 1,
              "countSend": 0,
              "countOrder": 0,
              "countPay": 0,
              "parentId": 109930,
              "categoryId": 222237,
              "nameId": null,
              "id": 222237,
              "title": "По именам",
              "viewSend": 0,
              "viewPay": 0,
              "children": [
                {
                  "countView": 1,
                  "countPlay": 1,
                  "countSend": 0,
                  "countOrder": 0,
                  "countPay": 0,
                  "parentId": 222237,
                  "categoryId": null,
                  "nameId": 31,
                  "id": null,
                  "title": "Лев",
                  "viewSend": 0,
                  "viewPay": 0
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "countView": 3,
      "countPlay": 3,
      "countSend": 0,
      "countOrder": 0,
      "countPay": 0,
      "parentId": 0,
      "categoryId": 222097,
      "nameId": null,
      "id": 222097,
      "title": "Важные события",
      "viewSend": 0,
      "viewPay": 0,
      "children": [
        {
          "countView": 3,
          "countPlay": 3,
          "countSend": 0,
          "countOrder": 0,
          "countPay": 0,
          "parentId": 222097,
          "categoryId": 222144,
          "nameId": null,
          "id": 222144,
          "title": "Поздравления с праздником",
          "viewSend": 0,
          "viewPay": 0
        }
      ]
    },
    {
      "countView": 2,
      "countPlay": 2,
      "countSend": 0,
      "countOrder": 0,
      "countPay": 0,
      "parentId": 0,
      "categoryId": 5,
      "nameId": null,
      "id": 5,
      "title": "Розыгрыши",
      "viewSend": 0,
      "viewPay": 0,
      "children": [
        {
          "countView": 2,
          "countPlay": 2,
          "countSend": 0,
          "countOrder": 0,
          "countPay": 0,
          "parentId": 5,
          "categoryId": 28,
          "nameId": null,
          "id": 28,
          "title": "От знаменитостей",
          "viewSend": 0,
          "viewPay": 0
        }
      ]
    },
    {
      "countView": 2,
      "countPlay": 3,
      "countSend": 1,
      "countOrder": 0,
      "countPay": 0,
      "parentId": 0,
      "categoryId": 7,
      "nameId": null,
      "id": 7,
      "title": "Свадебные",
      "viewSend": 50,
      "viewPay": 0,
      "children": [
        {
          "countView": 2,
          "countPlay": 3,
          "countSend": 1,
          "countOrder": 0,
          "countPay": 0,
          "parentId": 7,
          "categoryId": 222198,
          "nameId": null,
          "id": 222198,
          "title": "По именам",
          "viewSend": 50,
          "viewPay": 0,
          "children": [
            {
              "countView": 2,
              "countPlay": 3,
              "countSend": 1,
              "countOrder": 0,
              "countPay": 0,
              "parentId": 222198,
              "categoryId": null,
              "nameId": 56,
              "id": null,
              "title": "Алина",
              "viewSend": 50,
              "viewPay": 0
            }
          ]
        }
      ]
    },
    {
      "countView": 1,
      "countPlay": 1,
      "countSend": 0,
      "countOrder": 0,
      "countPay": 0,
      "parentId": 0,
      "categoryId": 3,
      "nameId": null,
      "id": 3,
      "title": "Признания в любви",
      "viewSend": 0,
      "viewPay": 0,
      "children": [
        {
          "countView": 1,
          "countPlay": 1,
          "countSend": 0,
          "countOrder": 0,
          "countPay": 0,
          "parentId": 3,
          "categoryId": 20043,
          "nameId": null,
          "id": 20043,
          "title": "С добрым утром по именам",
          "viewSend": 0,
          "viewPay": 0,
          "children": [
            {
              "countView": 1,
              "countPlay": 1,
              "countSend": 0,
              "countOrder": 0,
              "countPay": 0,
              "parentId": 20043,
              "categoryId": null,
              "nameId": 3189,
              "id": null,
              "title": "Лада",
              "viewSend": 0,
              "viewPay": 0
            }
          ]
        }
      ]
    },
    {
      "countView": 1,
      "countPlay": 1,
      "countSend": 0,
      "countOrder": 0,
      "countPay": 0,
      "parentId": 0,
      "categoryId": 6,
      "nameId": null,
      "id": 6,
      "title": "Юбилеи",
      "viewSend": 0,
      "viewPay": 0,
      "children": [
        {
          "countView": 1,
          "countPlay": 1,
          "countSend": 0,
          "countOrder": 0,
          "countPay": 0,
          "parentId": 6,
          "categoryId": 64,
          "nameId": null,
          "id": 64,
          "title": "35 лет",
          "viewSend": 0,
          "viewPay": 0,
          "children": [
            {
              "countView": 1,
              "countPlay": 1,
              "countSend": 0,
              "countOrder": 0,
              "countPay": 0,
              "parentId": 64,
              "categoryId": null,
              "nameId": 3245,
              "id": null,
              "title": "Алмаз",
              "viewSend": 0,
              "viewPay": 0
            }
          ]
        }
      ]
    }
  ],
  "count": 7
};

module.exports = tableSchema;
