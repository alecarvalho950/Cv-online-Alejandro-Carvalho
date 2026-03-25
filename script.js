AOS.init();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            history.pushState("", document.title, window.location.pathname + window.location.search);
        }
    })
})

var divMenuFixo = document.querySelector('.divMenuFixo');
var divScroll = document.querySelector('.div-scroll');
var menuList = document.querySelector('.menu-list');
var buttonMenu = document.querySelector('.button-menu');
var iconeMenu = document.querySelector('.iconeMenu');
var iconeFechar = document.querySelector('.iconeFechar');

const larguraTela = window.innerWidth;
console.log(larguraTela);
document.addEventListener('scroll', () => {
    
    var posicaoAtual = window.scrollY;
    if (posicaoAtual >= 50) {
        divMenuFixo.classList.remove('hidden');
        divMenuFixo.classList.add("flex");
        divScroll.classList.remove('hidden');
        divScroll.classList.add('flex');

        iconeMenu.addEventListener('click', () => {
            iconeMenu.classList.add('hidden');
            iconeFechar.classList.remove('hidden');

            divMenuFixo.classList.add("border-b-2", "border-gray-900");
            menuList.classList.remove("hidden");
            menuList.classList.add("flex");
            buttonMenu.classList.remove("hidden");
            buttonMenu.classList.add("flex");

            iconeFechar.addEventListener('click', () => {
                menuList.classList.remove('flex');
                buttonMenu.classList.remove('flex');
                menuList.classList.add('hidden');
                buttonMenu.classList.add('hidden');
                iconeFechar.classList.add('hidden');
                iconeMenu.classList.remove('hidden');
            });

        });

    } else if(posicaoAtual <= 50) {  
        divMenuFixo.classList.remove('flex');
        divMenuFixo.classList.remove("border-b-2", "border-gray-900");
        divMenuFixo.classList.add('hidden');
        divScroll.classList.remove('flex');
        divScroll.classList.add('hidden');

        menuList.classList.remove("flex");
        menuList.classList.add("hidden");
        buttonMenu.classList.remove("flex");
        buttonMenu.classList.add("hidden");

    }
});



window.onload = function() {
    const formContact = document.getElementById('formContact');
    const divForm = document.getElementById('divForm');
    const inputName = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    const inputMessage = document.getElementById('message');
    const label = document.querySelectorAll('label');
    const buttonSubmit = document.getElementById('buttonSubmit');

           formContact.addEventListener('submit', function(event) { 
                event.preventDefault();
                emailjs.sendForm('service_2x365w6','template_18l1u89', this)
                    .then(() => {
                        inputName.value = '';
                        inputEmail.value = '';
                        inputMessage.value = '';

                        Swal.fire({
                            title: 'Sucesso!',
                            text: 'Sua mensagem foi enviada. Verifique seu e-mail!',
                            icon: 'success',
                            confirmButtonColor: '#0891b2',
                            background: '#0a0a0a',
                            color: '#fff'
                        });
                        this.reset();

                        console.log('SUCCESS!');
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            });
        }


