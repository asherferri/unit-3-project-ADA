CREATE TABLE IF NOT EXISTS groceries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    recurrence INTEGER, 
    last_purchased_date date,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

/* Allowing NULL in recurrance and last_purchased_date to account for one-off groceries added to a list */
