const btn = document.getElementById('button');
const btnm = document.getElementById('button-m');
document.getElementById('contact-form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.innerHTML = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_yvnmemg';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.innerHTML = 'E-mail Enviado!';
                alert('Enviado!');
            }, (err) => {
                btn.innnerHTML = 'Enviar';
                alert(JSON.stringify(err));
            });
    })
// mobile
document.getElementById('contactForm')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btnm.innerHTML = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_b1jw95l';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btnm.innerHTML = 'E-mail enviado!';
                alert('Enviado!');
            }, (err) => {
                btnm.innnerHTML = 'Enviar';
                alert(JSON.stringify(err));
            });
    })
