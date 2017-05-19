json.extract! block, :id, :codeblock, :output, :prompt, :public, :language, :concepts
json.author do
  json.partial! 'api/users/user', user: block.author
end
