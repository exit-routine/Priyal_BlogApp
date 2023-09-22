class NovelsController < ApplicationController
  before_action :set_novel, only: [:show, :edit, :update, :destroy]

  def index
    @novels = Novel.all
    render json: @novels
  end

  def show
    render json: {novel: @novel, success:true}
  end

  # def new
  #   @novel = Novel.new
  # end

  def create
    @novel = Novel.new(novel_params)
    if @novel.save
      render json: {novel: @novel, id: @novel.id, success:true}
    else
      render json: {novel: @novel.errors.full_messages, success:false}
    end
  end

  def edit
    render json: {novel: @novel, id: @novel.id, success:true}
  end

  def update
    if @novel.update(novel_params)
      render json: {novel: @novel, success:true}
    else
      render json: {novel: @novel.errors, success:false}
    end
  end

  def destroy
    if @novel.destroy
      render json: { success:true}
    else
      render json: {novel: @novel.errors, success:false}
    end
  end

  private

  def set_novel
    @novel = Novel.find(params[:id])
  end

  def novel_params
    params.require(:novel).permit(:title, :author, :blog)
  end
end
