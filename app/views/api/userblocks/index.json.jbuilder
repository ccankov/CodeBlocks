@userblocks.each do |userblock|
  json.set! userblock.block.id do
    json.partial! 'api/userblocks/userblock', userblock: userblock
  end
end
