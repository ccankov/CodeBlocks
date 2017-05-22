# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

guest = User.create(email: 'guest@codeblocks.us', password: 'password')
chris = User.create(email: 'chris@codeblocks.us', password: 'password')

js = Language.create(name: 'javascript')
ruby = Language.create(name: 'ruby')

inheritance = Concept.create(name: 'inheritance')
closure = Concept.create(name: 'closure')

codeblock1 = Block.create(
  codeblock: {"allLines"=>["class SuperUser < User", "  attr_reader :super_powers", "", "  def initialize(first_name, last_name, super_powers)", "    super(first_name, last_name)", "    @super_powers = super_powers", "  end", "", "  def upvote_article(article)", "    # extra votes", "    article.upvotes += 3", "  end", "", "  def delete_user(user)", "    return unless super_powers.include?(:user_deletion)", "", "    # super user is authorized to delete user", "    puts \"Goodbye, \#{user.full_name}!\"", "  end", "end"], "editRanges"=>[[0, 15, 0, 17], [4, 3, 4, 10]], "editLines"=>[3, 5], "keywordLines"=>["class SuperUser   User", "  attr_reader :super_powers", "", "  def initialize(first_name, last_name, super_powers)", "           irst_name, last_name)", "    @super_powers = super_powers", "  end", "", "  def upvote_article(article)", "    # extra votes", "    article.upvotes += 3", "  end", "", "  def delete_user(user)", "    return unless super_powers.include?(:user_deletion)", "", "    # super user is authorized to delete user", "    puts \"Goodbye, \#{user.full_name}!\"", "  end", "end"], "keywordRanges"=>[[0, 0, 0, 15], [0, 17, 4, 3], [4, 10, 20, 3]], "logicLines"=>["class SuperUser < User", "  attr_reader :super_powers", "", "   ", "    super(first_name, last_name)", "   ", "  end", "", "  def upvote_article(article)", "    # extra votes", "    article.upvotes += 3", "  end", "", "  def delete_user(user)", "    return unless super_powers.include?(:user_deletion)", "", "    # super user is authorized to delete user", "    puts \"Goodbye, \#{user.full_name}!\"", "  end", "end"], "logicRanges"=>[[0, 0, 3, 0], [4, 0, 5, 0], [6, 0, 19, 3]]},
  output: nil,
  prompt: "Fill in the blanks to make SuperUser inherit from User and call User's initialize method.",
  public: false,
  author_id: guest.id,
  language_id: ruby.id
)

codeblock2 = Block.create(
  codeblock: {"allLines"=>["function sum(nums) {", "  let count = 0;", "", "  function addNum(num) {", "    count += num;", "  }", "", "  for (let i = 0; i < nums.length; i++){", "    addNum(nums[i]);", "  }", "", "  return count;", "}", "", "sum([1, 3, 5]);"], "editLines"=>[5], "editRanges"=>[], "logicLines"=>["function sum(nums) {", "  let count = 0;", "", "  function addNum(num) {", "    count += num;", "   ", "", "  for (let i = 0; i < nums.length; i++){", "    addNum(nums[i]);", "  }", "", "  return count;", "}", "", "sum([1, 3, 5]);"], "logicRanges"=>[[0, 0, 5, 0], [6, 0, 14, 15]]},
  output: '9',
  prompt: 'Fill in the blanks to make addNum close over count in Sum.',
  public: true,
  author_id: chris.id,
  language_id: js.id
)

codeblock1_concept = BlockConcept.create(
  block_id: codeblock1.id, concept_id: inheritance.id
)

codeblock2_concept = BlockConcept.create(
  block_id: codeblock2.id, concept_id: closure.id
)

guest_codeblock2 = UserBlock.create(
  user_id: guest.id, block_id: codeblock2.id, level: 1
)
