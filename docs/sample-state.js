{
  session: {
    currentUser: {
      id: 1,
      email: "ccankov@codeblocks.us",
      block_levels: {
        1: 0, // block with id 1 is at level 0
        3: 2 // block with id 3 is at level 2
      }
    }
  },
  currentModal: null, // "LOGIN_MODAL" for example
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createCard: {errors: ["language can't be blank"]},
    createDeck: {errors: []}
  },
  languages {
    1: {
      id: 1,
      name: "JavaScript"
    }
  },
  concepts {
    1: {
      id: 1,
      name: "Inheritance"
    }
  },
  blocks: {
    1: {
      id: 1,
      prompt: "Set up prototypal inheritance between Dog and Animal.",
      codeblock: "function Animal(name){this.name=name};Animal.prototype.sayHello=function(){console.log("Hello, my name is "+this.name)};function Dog(){};Dog.prototype=Object.create(Animal.prototype);Dog.prototype.constructor=Dog;Dog.prototype.bark=function(){console.log("Bark!")}",
      output: null,
      public: true,
      author_id: 1,
      language_id: 1,
      concept_ids: [1, 2, 3]
    }
  },
  decks: {
    1: {
      id: 1,
      name: "Ruby on Rails",
      mastery: 37,
      author_id: 1,
      concept_ids: [1, 3],
      language_ids: [1, 2],
      block_ids: [1, 35, 83, 93]
    }
  }
}
