const db = require('../db/config')

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
        return db.manyOrNone(
            `SELECT * FROM tracked_groceries WHERE user_id = $1;`
            , id
        )
        .then(groceries => {
            prettyLog(
              "DB object returned from getAllUserGroceries(id) in groceries-model.js",
              groceries
            );

            groceries.map(grocery => {
                const userGrocery = new this(grocery)

                prettyLog(
                  "userGrocery before moment manipulation in getAllUserGroceries(id) in tracked-groceries.js",
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
                );

                return userGrocery; 
            })
        })
    }
}

module.exports = Groceries