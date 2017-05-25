json.extract! deck, :id, :name, :public
concepts = []
languages = []
deck.concepts.map { |concept| concepts.push(concept.name) }
deck.languages.map { |language| languages.push(language.name) }
json.concepts concepts
json.languages languages
json.author do
  json.partial! 'api/users/user', user: deck.author
end
