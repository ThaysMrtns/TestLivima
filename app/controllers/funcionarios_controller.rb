class FuncionariosController < ApplicationController
    before_action :authenticate_user!#, except: [:index, :new, :destroy, :create]

    def index
        #Renderizar o componente aqui e passar por meio de uma props a lista de funcionários
        #A lista de funcionários está no formato de um array
        @funcionarios = Funcionario.all
        @nomes = Funcionario.pluck(:nome);
        @cargos = Funcionario.pluck(:cargo);
        @salarios = Funcionario.pluck(:salario);
        @emails = Funcionario.pluck(:email);
        @ids = Funcionario.pluck(:id);
    end

    def new
    end

    def create
        binding.pry
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
