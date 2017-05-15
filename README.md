# CodeBlocks

[Heroku link][heroku] **Note:** Not yet live

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/zRckxIiQ/codeblocks

## Minimum Viable Product

CodeBlocks is a web application inspired by BrainScape that allows programmers
to transcribe textbook code blocks into interactive flash cards. It is built
using Ruby on Rails and React/Redux.  By the end of Week 9, this app will, at a
minimum, satisfy the following criteria with smooth, bug-free navigation,
adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Create/Delete Decks
- [ ] Topics & Languages
- [ ] Study Decks
- [ ] Embedded Code Editor
- [ ] Difficulty Levels
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication and static home page.

**Soft due date:** 6:00 PM, Wed May 17

### Phase 2: Create blocks (1 day)

**Objective:** Transcribe code blocks and specify which lines/words will be user input through a form.

**Soft due date:** 6:00 PM, Thu May 18

### Phase 3: Display blocks and solutions (2 days)

**Objective:** Display blocks as questions, and allow solution comparison. Include Ace code editor.

**Soft due date:** 6:00 PM, Mon May 22

### Phase 4: Languages, Topics and Decks (1 day)

**Objective:** Tag blocks with a single languages and multiple topics. Form decks via combinations of languages and topics.

**Soft due date:** 6:00 PM, Tue May 23

### Phase 5: Study decks and study sessions (2 days)

**Objective:** Study decks and persist progress for each deck. Advance through difficulty levels.

**Soft due date:** 6:00 PM, Thu May 25

### Phase 6: - Upvoting system and polished animations (1 day)

**Objective:** Implement simple voting review system for blocks. Polish styling and animations.

**Soft due date:** 6:00 PM, Fri May 26

### Bonus Feature List
- [ ] Upvoting system
- [ ] Animations
- [ ] Completion Stats/Badges
- [ ] Multiple sessions
