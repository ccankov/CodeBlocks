class Block < ApplicationRecord
  validates :prompt, :author, :language, presence: true
  validates :public, inclusion: { in: [true, false] }

  belongs_to :language
  belongs_to :author,
             primary_key: :id,
             foreign_key: :author_id,
             class_name: :User
  has_many :user_blocks,
           dependent: :destroy
  has_many :users,
           through: :user_blocks,
           source: :user
  has_many :block_concepts,
           dependent: :destroy
  has_many :concepts,
           through: :block_concepts,
           source: :concept

  def self.filter(user_id, language_ids, concept_ids, current_user)
    blocks = Block.left_joins(:concepts).includes(:author, :language)
    blocks = blocks.where('author_id = ? or public = ?', current_user.id, true)
    blocks = blocks.where(author_id: user_id) if user_id
    blocks = blocks.where(language_id: language_ids) if language_ids
    blocks = blocks.where('concepts.id IN (?)', concept_ids) if concept_ids
    blocks.load
  end

  def process_and_save
    self.codeblock = setup_levels(self.codeblock)
    self.output = nil if output && output.length == 0
    self.save!
  end

  private

  def setup_levels(codeblock)
    unless codeblock['editRanges'].empty?
      setup_keyword_level(codeblock)
    end
    unless codeblock['editLines'].empty?
      setup_logic_level(codeblock)
    end
    codeblock
  end

  def setup_keyword_level(codeblock)
    edit_ranges = codeblock['editRanges']
    keyword_lines = codeblock['allLines'].map(&:dup)
    edit_ranges.each do |range|
      row = range[0]
      start_col = range[1]
      end_col = range[3]
      (start_col...end_col).each do |idx|
        keyword_lines[row][idx] = ' '
      end
    end
    codeblock['keywordLines'] = keyword_lines
    codeblock['keywordRanges'] = flip_ranges(
      edit_ranges.sort,
      codeblock['allLines']
    )
  end

  def setup_logic_level(codeblock)
    edit_lines = codeblock['editLines']
    logic_lines = codeblock['allLines'].map(&:dup)
    edit_lines.each do |line|
      logic_lines[line] = '   '
    end
    codeblock['logicLines'] = logic_lines
    codeblock['logicRanges'] = flip_line_ranges(
      edit_lines.sort,
      codeblock['allLines']
    )
  end

  def flip_ranges(edit_ranges, all_lines)
    flipped_ranges = []
    start_pos = [0, 0]
    edit_ranges.each do |range|
      end_pos = [range[0], range[1]]
      flipped_ranges.push(start_pos.concat(end_pos)) unless start_pos == end_pos
      start_pos = [range[2], range[3]]
    end
    last_ch_col = all_lines.last.length - 1 < 0 ? 0 : all_lines.last.length
    doc_end_pos = [all_lines.length, last_ch_col]
    unless start_pos == doc_end_pos
      flipped_ranges.push(start_pos.concat(doc_end_pos))
    end
    flipped_ranges
  end

  def flip_line_ranges(edit_lines, all_lines)
    flipped_ranges = []
    start_pos = [0, 0]
    edit_lines.each do |line|
      next if line.zero?
      end_pos = [line, 0]
      flipped_ranges.push(start_pos.concat(end_pos)) unless start_pos == end_pos
      start_pos = [line + 1, 0]
    end
    end_pos = [all_lines.length - 1, all_lines.last.length]
    unless start_pos[0] > end_pos[0]
      flipped_ranges.push(start_pos.concat(end_pos))
    end
    flipped_ranges
  end
end
