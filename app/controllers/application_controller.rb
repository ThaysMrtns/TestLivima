class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  #Adicionando o active devise que detecta os formatos de tela de usuário
  include ActiveDevice
end
