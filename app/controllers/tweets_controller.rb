class TweetsController < ApplicationController

  def create
    @tweet = Tweet.new(body: params[:tweet][:body], user_id: params[:user_id])
    if @tweet.save
      render :json => @tweet, status: 201
    else
      render :json => { :errors => @tweet.errors}, status: 422
    end
  end

  def index
    @tweets = params[:user_id] ? Tweet.where(user_id: params[:user_id]) : Tweet.all
    render :json => @tweets, status: 200
  end

end
