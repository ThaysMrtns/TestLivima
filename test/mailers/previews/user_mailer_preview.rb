# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview
  def new_user_email
    # Set up a temporary order for the preview
    funcionario = Funcionario.new(email: "thays@livima.com.br")

    UserMailer.with(funcionario: funcionario).new_user_email
  end
end
