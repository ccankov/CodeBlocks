# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/user/:id/blocks`
  - returns block progress stats from user_blocks table for this user

### Session

- `POST /api/session`
- `DELETE /api/session`

### Blocks

- `GET /api/blocks`
  - Blocks index/search
  - accepts `topic_ids` query param to filter blocks by topics
  - accepts `lang_ids` query param to filter blocks by languages
  - accepts `user_id` query param to filter blocks by author
- `POST /api/blocks`
- `GET /api/blocks/:id`
- `PATCH /api/blocks/:id`
- `DELETE /api/blocks/:id`

**NOTE:** All block operations always include associated topic, and language records.

### Languages

- `GET /api/languages`
  - includes query param for typeahead suggestions
- `POST /api/languages`
- `DELETE /api/languages/:id`

### Topics

- `GET /api/topics`
  - includes query param for typeahead suggestions
- `POST /api/topics`
- `DELETE /api/topics/:id`

### Decks

- `GET /api/decks`
  - decks index/search
  - returns all decks made by the current user
- `POST /api/decks`
  - handles creating associated deck_topics and deck_languages
- `GET /api/decks/:id`
  - gets a single deck along with its blocks
- `PATCH /api/decks/:id`
  - handles modifying associated deck_topics and deck_languages
- `DELETE /api/decks/:id`
  - deletes orphaned deck_topics and deck_languages

**NOTE:** All deck operations always include associated topic and language records.
