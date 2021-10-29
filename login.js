let registros = []
exports.registros = registros;

exports.agregarRegistro = () => 
{
    const { value: contrasena } = document.getElementById('contrasena')
    const { value: correo } = document.getElementById('correo')
        registros.push(({
        contrasena,
        correo,
    }))
}

const captcha = document.getElementById('captcha');

function validarCAPTCHA(captcha) {
    if (captcha != 15) {
        return false;
    } else {
        return true;
    }
}


exports.login = () => 
{

    const contraLog = document.getElementById('contrasena')
    const correoLog = document.getElementById('correo')
    const captcha = document.getElementById('captcha')

    for (var i = 0; i < registros.length; i++){
        if(registros[i].correo !=0){
            if(correo  == correoLog && contrasena == contraLog && (validarCAPTCHA(captcha) == true)){
                return true; 
            }else{
                return false; 
            }
        }else{
            return false; 
        };
    };

};

module.exports.validarCAPTCHA = validarCAPTCHA;

