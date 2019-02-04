class UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if !(User.any?{|user| user.username == @user.username} || User.any?{|user| user.email == @user.email}) && @user.save
      render :json => @user, status: 201
    else
      binding.pry
      render :json => { :errors => @user.errors}, status: 422
    end
  end

  private

  def user_params
     params.require("user").permit(
       :username,
       :email,
       :password,
       :password_confirmation
     )
   end


end
