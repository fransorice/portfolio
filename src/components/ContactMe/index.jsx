import React from 'react'
import './styles.scss' 
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

const ContactMe = () => {

    const clearForm = () => {
        document.getElementsByTagName("input")[0].value = "";
        document.getElementsByTagName("input")[1].value = "";
        document.getElementsByTagName("textarea")[0].value = "";
    };

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_ptoxp5r', 'template_2rumrle', event.target, 'ePmxOXxXJJxZ6qsFt')
        .then(() => {
            Swal.fire({
                title: 'Mensaje enviado correctamente',
                icon: 'success'
              })
              clearForm();
        })
        .catch(error => console.log(error))
    }

  return (
    <div className='form__container' id='contactMe'>
        <h2 className='form__container-h2'>Contactame</h2>
        <div className='contact__container'>
            <svg xmlns="http://www.w3.org/2000/svg" width="500" height="490" viewBox="0 0 24 24"><path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path><path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path></svg>
            <form className='form__container-form' onSubmit={sendEmail}>
                <label>Nombre</label>
                <input type="text" name='user_name'/>
                <label>Email</label>
                <input type="email" name="user_email"/>
                <label>Mensaje</label>
                <textarea name="user_message" id="" cols="30" rows="10"></textarea>
                <button>Enviar</button>
            </form>
        </div>   
    </div>
  )
}

export default ContactMe