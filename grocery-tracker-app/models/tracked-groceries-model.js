const db = require('../db/config')
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
            groceries.map(grocery => {
                return new this(grocery);
            })
        })
    }
}

module.exports = Groceries