json.extract! deck, :id, :name, :public
concepts = []
languages = []
deck.concepts.map { |concept| concepts.push(concept.id) }
deck.languages.map { |language| languages.push(language.id) }
json.concepts concepts
json.languages languages
