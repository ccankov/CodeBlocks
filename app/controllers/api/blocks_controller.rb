class Api::BlocksController < ApplicationController
  before_action :logged_in?, only: [:create, :destroy]

  def index
    user_id = params[:user_id]
    lang_ids = params[:language_ids] ? params[:language_ids].split(',') : nil
    concept_ids = params[:concept_ids] ? params[:concept_ids].split(',') : nil
    @blocks = Block.includes(:language, :concepts).filter(
      user_id,
      lang_ids,
      concept_ids,
      current_user
    )
    render :index
  end

  def create
    @block = Block.new(block_params)
    @block.codeblock = JSON.parse(block_params[:codeblock])
    @block.author_id = current_user.id
    begin
      Block.transaction do
        @block.process_and_save
        process_concepts(params[:concepts]) if params[:concepts]
      end
      render :show
    rescue ActiveRecord::RecordInvalid => invalid
      render json: ["ERROR: Unable to save block - #{invalid}"], status: 500
    end
  end

  def show
    @block = Block.includes(:language, :concepts)
                  .find_by(id: params[:id])
    if @block
      render :show
    else
      render json: ["Block with id #{params[:id]} not found."], status: 400
    end
  end

  def destroy
    @block = Block.find_by(id: params[:id])
    if @block && @block.author_id == current_user.id
      @block.destroy
      render json: @block
    else
      render json: ["Block with id #{params[:id]} not found."], status: 400
    end
  end

  private

  def block_params
    params.require(:block).permit(
      :codeblock, :output, :prompt, :public, :language_id
    )
  end

  def process_concepts(concepts)
    db_concepts = Concept.where(name: concepts)
    concepts.each do |concept|
      matches = db_concepts.select { |db| db.name == concept }
      db_concept = matches.empty? ? Concept.create(name: concept) : matches[0]
      BlockConcept.create(block_id: @block.id, concept_id: db_concept.id)
    end
  end
end
