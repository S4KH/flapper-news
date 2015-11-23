class PostsController < ApplicationController

  before_filter :authenticate_user!, only: [:create, :vote]

  def index
    respond_with Post.all
  end

  def create
    respond_with Post.create(post_params.merge(user_id: current_user.id)
  end

  def show
    respond_with Post.find(params[:id])
  end

  def vote
    post = Post.find(params[:id])
    post.increment!(:votes)

    respond_with post
  end

  def as_json(options={})
    super(options.merge(include: [:user, comments: {include: :user}]))
  end

  private
  def post_params
    params.require(:post).permit(:link, :title)
  end

end
