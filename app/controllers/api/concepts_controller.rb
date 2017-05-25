class Api::ConceptsController < ApplicationController
  before_action :logged_in?, only: [:create, :destroy]

  def index
    @concepts = Concept.joins(:block_concepts).distinct
    render :index
  end

  def create
    @concept = Concept.new(concept_params)
    if @concept.save
      render :show
    else
      render json: @concept.errors.full_messages, status: 422
    end
  end

  def destroy
    @concept = Concept.find_by(id: params[:id])
    if @concept
      @concept.destroy
      render :show
    else
      render json: ["Concept with id #{params[:id]} not found."], status: 400
    end
  end

  private

  def concept_params
    params.require(:concept).permit(:name)
  end
end
