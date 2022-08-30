# frozen_string_literal: true

class PagesController < ApplicationController
  def home; end

  def index
    @contact = ContactForm.new
  end

  def ipm; end

  def monamap; end
end
