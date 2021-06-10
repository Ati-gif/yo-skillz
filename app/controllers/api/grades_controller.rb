class Api::GradesController < ApplicationController

  def index
  #   render json: Grade.all
    render json: Grade.all_and_then_some
  end
end