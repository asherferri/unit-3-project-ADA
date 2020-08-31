const db = require('../db/config')
const prettyLog = require("../logging/pretty-logs");

const moment = require("moment");
moment().format();

class Groceries {
    constructor({ id, name, recurrence, lastPurchasedDate, user_id}) {
        this.id = id || null
        this.name = name
        this.recurrence = recurrence
        this.lastPurchasedDate = lastPurchasedDate
        this.user_id = user_id
    }

    static getAllUserGroceries(id) {
      // Hard coding user_id to 1 since there is no req.user.id yet  
      
      // return db.manyOrNone(
        //     `SELECT * FROM tracked_groceries WHERE user_id = $1;`
        //     , id
        // )

        return db.manyOrNone(
            `SELECT * FROM groceries WHERE user_id = $1;`, 
            id
        )
        .then(groceries => {
            prettyLog(
              "DB object returned from getAllUserGroceries(id) in groceries-model.js",
              groceries
            );

            return groceries.map(grocery => {
                const userGrocery = new this(grocery)

                prettyLog(
                  "userGrocery before moment manipulation in getAllUserGroceries(id) in groceries-model.js",
                  userGrocery
                );

                const lastPurchasedDate = moment(grocery.last_purchased_date);
                const readablelastPurchasedDate = lastPurchasedDate.format(
                  "dddd, MMMM Do, YYYY"
                );
                userGrocery.lastPurchasedDate = readablelastPurchasedDate;
                prettyLog(
                  "DB -> Grocery object in getAllUserGroceries(id) in groceries-model.js",
                  userGrocery
                )

                return userGrocery
            })
        })
    }

    static getById(id) {
      return db.oneOrNone(
        'SELECT * FROM groceries WHERE id = $1', 
        id
      )
      .then(grocery => {
        prettyLog(
          "DB object returned from getById(id) in groceries-model.js",
          grocery
        );
        
        if(grocery) {
          const foundGrocery = new this(grocery);
          prettyLog(
            "DB object -> Grocery object in getById(id) in groceries-model.js (before moment.js)",
            foundGrocery
          )

          const lastPurchasedDate = moment(grocery.last_purchased_date);
          const readablelastPurchasedDate = lastPurchasedDate.format(
            "dddd, MMMM Do, YYYY"
          );
          foundGrocery.lastPurchasedDate = readablelastPurchasedDate;
          prettyLog(
            "DB -> Grocery object in getById(id) in groceries-model.js (after momnent.js)",
            foundGrocery
          );

          return foundGrocery;
        }
        else {
          throw new Error('No entry found')
        }
      })
    }
}

module.exports = Groceries