# frozen_string_literal: true

class ContactForm < MailForm::Base
  attributes :name,  validate: true
  attributes :email, validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attributes :message
  attribute :nickname, captcha: true

  def headers
    {
      subject: 'New message from my portfolio',
      to: 'turtleju@gmail.com',
      from: %("#{name}" <#{email}>)
    }
  end
end
