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
        @funcionario = params.require(:funcionario).permit(:nome, :cargo, :salario, :email)
        
        if Funcionario.create @funcionario
            UserMailer.with(funcionario: @funcionario).welcome_email
            redirect_to '/'
        else
            redirect_to '/'
            puts "Erro ao criar funcionário!"
        end
    end

    def destroy
        funcionario = params[:id]
        Funcionario.destroy funcionario
        redirect_to '/funcionarios'
    end
end
