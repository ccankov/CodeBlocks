class Api::LanguagesController < ApplicationController
  before_action :logged_in?, only: [:create, :destroy]

  def index
    @languages = Language.all
    render :index
  end

  def create
    @language = Language.new(language_params)
    if @language.save
      render :show
    else
      render json: @language.errors.full_messages, status: 422
    end
  end

  def destroy
    @language = Language.find_by(id: params[:id])
    if @language
      @language.destroy
      render :show
    else
      render json: ["Language with id #{params[:id]} not found."], status: 400
    end
  end

  private

  def language_params
    params.require(:language).permit(:name)
  end
end
