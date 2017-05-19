json.extract! block, :id, :codeblock, :output, :prompt, :public, :language
concepts = []
block.concepts.map { |concept| concepts.push(concept.name) }
json.concepts concepts
json.author do
  json.partial! 'api/users/user', user: block.author
end
