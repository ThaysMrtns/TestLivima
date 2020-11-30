class FuncionariosController < ApplicationController
    before_action :authenticate_user!, except: [:index, :new, :destroy, :create]

    def index
        @funcionarios = Funcionario.all
    end

    def new
    end

    def create
        funcionario = params.require(:funcionario).permit(:nome, :cargo, :salario, :email)
        Funcionario.create funcionario
        redirect_to '/'
    end

    def destroy
        funcionario = params[:id]
        Funcionario.destroy funcionario
        redirect_to '/funcionarios'
    end
end
