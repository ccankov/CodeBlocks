@blocks.each do |block|
  json.set! block.id do
    json.partial! 'api/blocks/block', block: block
  end
end
