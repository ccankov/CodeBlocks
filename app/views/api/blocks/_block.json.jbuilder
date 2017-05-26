json.extract! block, :id, :codeblock, :output, :prompt, :public, :language_id, :author_id
concepts = []
block.concepts.map { |concept| concepts.push(concept.id) }
json.concepts concepts
