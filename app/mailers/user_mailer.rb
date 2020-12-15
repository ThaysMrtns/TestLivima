class UserMailer < ApplicationMailer
  default from: 'thays@livima.com.br'

  #Função que envia email para o usuário
  def welcome_email
    @funcionario = params[:funcionario];
    @url = 'http://localhost:3000';
    mail(to: @funcionario.email, subject: 'Welcome to my site!');
  end
end
