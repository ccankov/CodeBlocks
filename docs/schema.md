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
codeblock   | JSON      |
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

## concepts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## block_concepts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
block_id     | integer   | not null, foreign key (references blocks), indexed, unique [concept_id]
concept_id    | integer   | not null, foreign key (references concepts), indexed

## decks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
public      | boolean   | not null, default false
author_id   | integer   | not null, foreign key (references users), indexed

## deck_concepts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
deck_id     | integer   | not null, foreign key (references decks), indexed, unique [concept_id]
concept_id    | integer   | not null, foreign key (references concepts), indexed

## deck_languages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
deck_id     | integer   | not null, foreign key (references decks), indexed [language_id]
language_id | integer   | not null, foreign key (references languages), indexed
