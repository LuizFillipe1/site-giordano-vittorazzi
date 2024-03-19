const btn = document.getElementById('button');
const btnm = document.getElementById('button-m');
document.getElementById('contact-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando';

        const serviceID = 'default_service';
        const templateID = 'template_yvnmemg';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'E-mail enviado';
                alert('Enviado!');
            }, (err) => {
                btn.value = 'Enviar';
                alert(JSON.stringify(err));
            });
    })
// mobile
document.getElementById('contactForm')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btnm.value = 'Enviando';

        const serviceID = 'default_service';
        const templateID = 'template_b1jw95l';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btnm.value = 'E-mail enviado';
                alert('Enviado!');
            }, (err) => {
                btnm.value = 'Enviar';
                alert(JSON.stringify(err));
            });
    })
