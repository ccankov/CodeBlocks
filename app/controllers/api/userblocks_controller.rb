class Api::UserblocksController < ApplicationController
  before_action :logged_in?

  def index
    @userblocks = UserBlock.includes(:block).where(user_id: current_user.id)
    render :index
  end

  def create
    @oldentry = UserBlock.find_by(
      user_id: current_user.id,
      block_id: userblock_params[:block_id]
    )
    @newentry = UserBlock.new(
      user_id: current_user.id,
      block_id: userblock_params[:block_id],
      level: userblock_params[:level]
    )
    begin
      UserBlock.transaction do
        @oldentry.destroy
        @newentry.save
      end
      render :show
    rescue ActiveRecord::RecordInvalid => invalid
      render json: ["ERROR: Unable to save progress - #{invalid}"], status: 500
    end
  end

  private

  def userblock_params
    params.require(:userblock).permit(:block_id, :level)
  end
end
