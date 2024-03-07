const formulario = document.getElementById('formulario');
const userName = document.getElementById('userName')
const userEmail = document.getElementById('userEmail')

const alertSuccess = document.getElementById('alertSuccess');
const alertEmail = document.getElementById('alertEmail');
const alertName = document.getElementById('alertName');

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const pintarMensajeExito = () => {
    alertSuccess.classList.remove('d-none');
    alertSuccess.textContent = 'Mensaje enviado con exito';
}

const pintarMensageError = (errores) => {
    errores.forEach(item => {
        item.tipo.classList.remove('d-none')
        item.tipo.textContent = item.msg
    })
}

formulario.addEventListener('submit', e => {

    e.preventDefault();

    alertSuccess.classList.add('d-none');

    const errores = []

    //estp devuelve true si existe solo espacios
    // console.log(!userName.value.trim());


    console.log(userName.value)
    console.log(userEmail.value)

    if (!regUserName.test(userName.value) || !userName.value.trim()) {
        userName.classList.add("is-invalid")
        errores.push({
            tipo: alertName,
            msg: "Formato no valido en el campo, solo letras",
        })
    } else {
        userName.classList.remove("is-invalid")
        userName.classList.add("is-valid")
        alertName.classList.add("d-none")

    }
    if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
        userEmail.classList.add("is-invalid")

        errores.push({
            tipo: alertEmail,
            msg: "Escriba un correo valido",
        })
    } else {
        userEmail.classList.remove("is-invalid")
        userEmail.classList.add("is-valid")
        alertEmail.classList.add("d-none")
    }
    if (errores.length !== 0) {
        pintarMensageError(errores)
        return
    }
    console.log('formulario enviado')
    pintarMensajeExito()

})