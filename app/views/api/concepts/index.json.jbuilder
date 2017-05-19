@concepts.each do |concept|
  json.set! concept.id do
    json.partial! 'api/concepts/concept', concept: concept
  end
end
