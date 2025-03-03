from flask import Flask, render_template, request, flash
from flask_mail import Mail, Message
from config import Config


app = Flask(__name__)
app.config.from_object(Config)
mail = Mail(app)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']
        message = request.form['message']

        msg = Message(phone, recipients=['christian.hilario07@gmail.com'])
        msg.body = 'Nombres: ' + name + '\n' 'Email: ' + email + '\n' 'Telefono: ' + phone + '\n' 'Detalles: ' + message

        mail.send(msg)
        flash('Correo enviado con éxito')
    return render_template('index.html')

if __name__ == '__main__':
    app.secret_key = 'some_secret_key'
    app.run(debug=True)

