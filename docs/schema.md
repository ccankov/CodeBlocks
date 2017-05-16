# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## blocks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
prompt      | string    | not null
codeblock   | text      |
output      | text      |
public      | boolean   | not null
author_id   | integer   | not null, foreign key (references users), indexed
language_id | integer   | not null, foreign key (references languages), indexed

## user_blocks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
block_id    | integer   | not null, foreign key (references blocks), indexed
level       | integer   | not null

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

## block_topics
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
block_id     | integer   | not null, foreign key (references blocks), indexed, unique [topic_id]
topic_id    | integer   | not null, foreign key (references topics), indexed

## decks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
mastery     | integer   | not null
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

## deck_blocks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
deck_id     | integer   | not null, foreign key (references decks), indexed, unique [block_id]
block_id     | integer   | not null, foreign key (references blocks), indexed
