# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170525181247) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "block_concepts", force: :cascade do |t|
    t.integer  "block_id",   null: false
    t.integer  "concept_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["block_id", "concept_id"], name: "index_block_concepts_on_block_id_and_concept_id", unique: true, using: :btree
  end

  create_table "blocks", force: :cascade do |t|
    t.json     "codeblock"
    t.string   "output"
    t.string   "prompt",                      null: false
    t.boolean  "public",      default: false, null: false
    t.integer  "author_id",                   null: false
    t.integer  "language_id",                 null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.index ["author_id"], name: "index_blocks_on_author_id", using: :btree
    t.index ["language_id"], name: "index_blocks_on_language_id", using: :btree
  end

  create_table "concepts", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_concepts_on_name", unique: true, using: :btree
  end

  create_table "deck_concepts", force: :cascade do |t|
    t.integer  "deck_id",    null: false
    t.integer  "concept_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["deck_id", "concept_id"], name: "index_deck_concepts_on_deck_id_and_concept_id", unique: true, using: :btree
    t.index ["deck_id"], name: "index_deck_concepts_on_deck_id", using: :btree
  end

  create_table "deck_languages", force: :cascade do |t|
    t.integer  "deck_id",     null: false
    t.integer  "language_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["deck_id", "language_id"], name: "index_deck_languages_on_deck_id_and_language_id", unique: true, using: :btree
    t.index ["deck_id"], name: "index_deck_languages_on_deck_id", using: :btree
  end

  create_table "decks", force: :cascade do |t|
    t.string   "name",                       null: false
    t.boolean  "public",     default: false, null: false
    t.integer  "author_id",                  null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.index ["author_id"], name: "index_decks_on_author_id", using: :btree
    t.index ["name", "author_id"], name: "index_decks_on_name_and_author_id", unique: true, using: :btree
  end

  create_table "languages", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_languages_on_name", unique: true, using: :btree
  end

  create_table "user_blocks", force: :cascade do |t|
    t.integer  "level",      default: 0, null: false
    t.integer  "user_id",                null: false
    t.integer  "block_id",               null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.index ["user_id", "block_id"], name: "index_user_blocks_on_user_id_and_block_id", unique: true, using: :btree
    t.index ["user_id"], name: "index_user_blocks_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "session_token",   null: false
    t.string   "password_digest", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  end

end
