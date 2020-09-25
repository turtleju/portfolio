# frozen_string_literal: true

class ContactsController < ApplicationController
  before_action :contact_params, only: [:create]

  def create
    @contact = ContactForm.new(params[:contact_form])
    @contact.request = request
    if @contact.deliver
      redirect_to root_path(anchor: 'contact-form'), notice: 'Le message a bien été envoyé !'
    else
      redirect_to root_path(anchor: 'contact-form'), alert: "Mmmm... quelquechose n'a pas fonctionné !"
    end
  end

  private

  def contact_params
    params.require(:contact_form).permit(:name, :email, :message, :nickname, :captcha)
  end
end
