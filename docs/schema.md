# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## cards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
prompt      | string    | not null
output      | text      |
public      | boolean   | not null
author_id   | integer   | not null, foreign key (references users), indexed
language_id | integer   | not null, foreign key (references languages), indexed

# user_cards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
card_id     | integer   | not null, foreign key (references cards), indexed
level       | integer   | not null

## blocks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
block       | text      | not null
card_id     | integer   | not null, foreign key (references cards), indexed

## languages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## topics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## card_topics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
card_id     | integer   | not null, foreign key (references cards), indexed, unique [topic_id]
topic_id    | integer   | not null, foreign key (references topics), indexed

## decks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
author_id   | integer   | not null, foreign key (references users), indexed

## deck_topics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
deck_id     | integer   | not null, foreign key (references decks), indexed, unique [topic_id]
topic_id    | integer   | not null, foreign key (references topics), indexed

## deck_languages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
deck_id     | integer   | not null, foreign key (references decks), indexed, unique [language_id]
language_id | integer   | not null, foreign key (references languages), indexed

## deck_cards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
deck_id     | integer   | not null, foreign key (references decks), indexed, unique [card_id]
card_id     | integer   | not null, foreign key (references cards), indexed
