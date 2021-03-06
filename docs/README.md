# CodeBlocks

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://code-blocks.herokuapp.com/
[trello]: https://trello.com/b/zRckxIiQ/codeblocks

## Minimum Viable Product

CodeBlocks is a web application inspired by BrainScape that allows programmers
to transcribe textbook code blocks into interactive flash cards. It is built
using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a
minimum, satisfy the following criteria with smooth, bug-free navigation,
adequate seed data and sufficient CSS styling:

- [X] Hosting on Heroku
- [X] New account creation, login, and guest/demo login
- [X] Concepts & Languages
- [X] Study Blocks
- [X] Create/Delete Blocks
- [ ] Form Decks
- [X] Difficulty Levels
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.js
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication and static home page.

**Soft due date:** 6:00 PM, Wed May 17

### Phase 2: Create blocks, languages, and concepts (2 days)

**Objective:** Transcribe code blocks and specify which lines/words will be user input through a form. Blocks must have a language and may have any number of concepts.

**Soft due date:** 6:00 PM, Fri May 19

### Phase 3: Study blocks and solutions (2 days)

**Objective:** Display blocks as questions, and allow solution comparison. Include Ace code editor.

**Soft due date:** 6:00 PM, Tue May 23

### Phase 4: Decks (1 day)

**Objective:** Form decks via combinations of languages and concepts.

**Soft due date:** 6:00 PM, Wed May 24

### Phase 5: Study decks and study sessions (2 days)

**Objective:** Study decks and persist progress for each deck. Advance through difficulty levels.

**Soft due date:** 6:00 PM, Fri May 26

### Bonus Feature List
- [ ] Upvoting system
- [ ] Animations
- [ ] Completion Stats/Badges
- [ ] Multiple sessions
