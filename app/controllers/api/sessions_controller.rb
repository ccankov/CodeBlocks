class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params)
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username or password"], status: 401
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ["No logged in user"], status: 400
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
