block = userblock.block
codeblock = block[:codeblock]
block_level = 0
block_level += 1 unless !codeblock || codeblock["editLines"].empty?
block_level += 1 unless !codeblock || codeblock["editRanges"].empty?
block_level += 1 unless block[:output].nil?
block_mastery =
  case block_level - userblock.level
  when 0
    'Master'
  when 1
    'Intermediate'
  when 2
    'Novice'
  when 3
    'Unanswered'
  else
    'Master'
  end
json.mastery block_mastery
json.level userblock.level
json.max_level block_level
json.partial! 'api/blocks/block', block: block
