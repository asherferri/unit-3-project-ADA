CREATE TABLE IF NOT EXISTS tracked_groceries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    recurrance INTEGER, 
    last_purchased_date date,
    user_id INTEGER NOT NULL FOREIGN KEY REFERENCES users(id)
);

/* Allowing NULL in recurrance and last_purchased_date to account for one-off groceries added to a list */
