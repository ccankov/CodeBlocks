# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
  - New user signup

### UserBlocks

- `GET /api/userblocks`
  - return all entries from user_blocks table for current user, including block objects
- `POST /api/userblocks`
  - creates a new user_blocks entry to update what level a user is on for a given block

### Session

- `POST /api/session`
  - User login action
- `DELETE /api/session`
  - User logout action

### Blocks

- `GET /api/blocks`
  - Blocks index/search
  - accepts `concept_ids` query param to filter blocks by concepts
  - accepts `lang_ids` query param to filter blocks by languages
  - accepts `user_id` query param to filter blocks by author
- `POST /api/blocks`
- `GET /api/blocks/:id`
- `DELETE /api/blocks/:id`

**NOTE:** All block operations always include associated concept and language records.

### Languages

- `GET /api/languages`
- `POST /api/languages`
- `DELETE /api/languages/:id`

### Concepts

- `GET /api/concepts`
- `POST /api/concepts`
- `DELETE /api/concepts/:id`

### Decks

- `GET /api/decks`
  - decks index/search
  - returns all decks made by the current user
- `POST /api/decks`
  - handles creating associated deck_concepts and deck_languages
- `DELETE /api/decks/:id`
  - deletes orphaned deck_concepts and deck_languages

**NOTE:** All deck operations always include associated concept and language records.
