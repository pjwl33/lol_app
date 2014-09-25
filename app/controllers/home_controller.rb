class HomeController < ApplicationController

  def index
  end

  def get_champs
    respond_to do |f|
      f.json { render json: Champion.all }
    end
  end

end