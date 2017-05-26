# CodeBlocks
[Live](https://code-blocks.herokuapp.com/)

CodeBlocks is a web application that enables users to transcribe code blocks from literature into interactive flash cards. It was built using Ruby on Rails, React/Redux, and PostgreSQL.

The entire project was conceived, designed, and completed in a strict two-week timeframe, with the potential for future enhancement.

## Technologies
Rails is a back-end MVC web framework that was used for data fetching and storage with a connection to a PostGreSQL database. Rails potential to get up and running as a simple RESTful API was part of its appeal as a back end. The front end application was written using javascript's React library for reuseable, modular code. It was used in conjunction with the Redux framework to add in the benefits of a unidirectional dataflow which made the application easier to debug.

## Features & Implementation
### Transcribing Personalized Code Blocks

![CodeBlock Creation](docs/screenshots/block_creation.png)

In order to develop a deep understanding of programming concepts, it is crucial to study and review code samples. CodeBlocks allows users to copy code samples into a web-based code editor and indicate what output, keywords, or entire lines of logic are critical to understanding the concept at hand.

Specifying the CodeBlock's output, keywords, and key lines result in varying levels of difficulty when studying. When a user first sees the CodeBlock while studying, they will be prompted to fill in the output. The next time the block is encountered, the user will have to fill in the missing keywords. The final difficulty level involves filling in entire missing lines of logic. A block does not need to have all 3 difficulty levels, which allows for flexibility when creating blocks.

### Interactive Studying and Persistent Statistics

![Study Layout](docs/screenshots/study_screen.png)

Users can choose to study an individual deck or their entire library of CodeBlocks at any given time. When studying, the user is prompted to fill in the solution to the current block, and then has the option of comparing their solution to the original code sample. By indicating whether their answer was correct, the user can advance up or down the difficulty levels for that block.

While studying, the application naturally progresses through the various difficulty levels by consistently providing a random card from the lowest difficulty level. The user's progress for each CodeBlock is tracked and persisted between sessions to allow for a personalized study experience.

### Deck Creation and Public CodeBlocks

![Deck Creation](docs/screenshots/deck_creation.png)

Users may create decks to focus their studyig on particular concepts and languages. By specifying a combination of languages and concepts, a user can quickly and easily build collections of cards to study. The deck view UI also tracks the user's mastery for a given deck, and tracks the code blocks that are included in that deck.

When creating CodeBlocks, users have the option to share them by making them public. When creating decks, users can study public CodeBlocks by selecting that option when creating the deck. Including public cards in your deck allows users to jump into studying new concepts quickly and easily. Decks with public CodeBlocks will automatically be updated when other users create new CodeBlocks with the matching criteria, ensuring that new challenges will consistently be available to the user.

## Technical details
### Code Editor
CodeBlocks utilizes [Ace Code Editor](https://ace.c9.io/), an open-source web code editor that is widely used and supports a huge number of programming languages and DSLs. The study functionality uses partial read-only ranges to allow for fill-in-the-blanks functionality, which was a custom implementation and is not natively provided by Ace.

### Storing and Dissecting CodeBlocks
When a user marks up a code block and saves it, the backend handles processing the user's markup and translating it into various difficulty levels and fill-in-the-blank ranges. The resulting marked-up codeblock is stored as a JSON document in the PostGreSQL server.

The following code gives a small example of how marked lines are processed and stored in the resulting JSON document.
````````Ruby
def setup_logic_level(codeblock)
  edit_lines = codeblock['editLines']
  logic_lines = codeblock['allLines'].map(&:dup)
  edit_lines.each do |line|
    logic_lines[line] = '   '
  end
  codeblock['logicLines'] = logic_lines
  codeblock['logicRanges'] = flip_line_ranges(
    edit_lines.sort,
    codeblock['allLines']
  )
end
````````

### Additional Resources

* [Database Schema](docs/schema.md)
* [API Endpoints](docs/api-endpoints.md)
* [Design Wireframes](docs/wireframes)
* [Sample Redux State](docs/sample-state.js)

## Future Improvements
### Upvoting system for CodeBlocks
By keeping track of the number of upvotes for public CodeBlocks, users would be able to filter their decks to ensure only high-quality content. This would provide for a smoother, more professional study experience when studying public decks.
### Executable CodeBlocks
The current state of the application does not run any of the code that users provide. By implementing the ability to execute code, the user would not have to indicate whether their answer was correct, which would reduce a possible source of user confusion and provide a more fluid and meaningful coding experience.
### Fine tuned control of deck blocks
Allowing the user to manually add or remove CodeBlocks from their decks would provide the user with a more customizable experience.
