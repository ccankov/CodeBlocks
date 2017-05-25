class Api::DecksController < ApplicationController
  before_action :logged_in?

  def index
    @decks = Deck.where(author_id: current_user.id)
    render :index
  end

  def create
    @deck = Deck.new(deck_params)
    @deck.author_id = current_user.id
    begin
      Deck.transaction do
        @deck.save
        process_concepts(params[:concepts]) if params[:concepts]
        process_languages(params[:languages]) if params[:languages]
      end
      render :show
    rescue ActiveRecord::RecordInvalid => invalid
      render json: ["ERROR: Unable to save block - #{invalid}"], status: 500
    end
  end

  def destroy
    @deck = Deck.find_by(id: params[:id])
    if @deck && @deck.author_id == current_user.id
      @deck.destroy
      render json: @deck
    else
      render json: ["Deck with id #{params[:id]} not found."], status: 400
    end
  end

  private

  def deck_params
    params.require(:deck).permit(:name, :public)
  end

  def process_concepts(concepts)
    db_concepts = Concept.where(name: concepts)
    concepts.each do |concept|
      matches = db_concepts.select { |db| db.name == concept }
      db_concept = matches.empty? ? Concept.create(name: concept) : matches[0]
      DeckConcept.create(deck_id: @deck.id, concept_id: db_concept.id)
    end
  end

  def process_languages(languages)
    db_languages = Language.where(name: languages)
    languages.each do |language|
      matches = db_languages.select { |db| db.name == language }
      db_lang = matches.empty? ? Language.create(name: language) : matches[0]
      DeckLanguage.create(deck_id: @deck.id, language_id: db_lang.id)
    end
  end
end
