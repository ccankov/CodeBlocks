@languages.each do |language|
  json.set! language.id do
    json.partial! 'api/languages/language', language: language
  end
end
