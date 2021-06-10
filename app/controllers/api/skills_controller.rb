class Api::SkillsController < ApplicationController
  before_action :set_skill, only: [:show, :destroy]

  def index
    skills = Skill.all
    render json: skills
  end

  def show
  #   render json: @skill
    render json: @skill.users_with_scores
  end

  def create
    @skill = Skill.new(user_params)

    if @skill.save
      render json: @skill
    else
      render json: {error: @skill.errors}, status: 422
    end
  end

  def destroy
    @skill.destroy
    render json: @skill
  end

  private
    def set_skill
      @skill = Skill.find(params[:id])
    end

    def skill_params
      params.require(:skill).permit(:name)
    end
end
