document.addEventListener("DOMContentLoaded", function () {
    const languageSelector = document.getElementById("language-selector");
    if (!languageSelector) {
        console.error("No se encontró el selector de idioma (#language-selector). Verifica tu HTML.");
        return;
    }

    const translations = {
        es: {
            title: "Los Lusers - Entretenimiento Circense para Niños",
            inicio: "Inicio",
            sobre_mi: "Sobre Mí",
            servicios: "Servicios",
            galeria: "Galería",
            testimonios: "Testimonios",
            blog: "Blog",
            contacto: "Contacto",
            welcome: "¡Bienvenidos a Los Lusers!",
            reserva: "¡Reserva tu espectáculo ahora!",
            descripcion_inicio: "Transformamos eventos infantiles en experiencias mágicas y emocionantes. Ofrecemos espectáculos circenses profesionales, animación de calidad y talleres creativos para niños de todas las edades. Nuestro equipo de artistas especializados crea ambientes llenos de color, risas y sorpresas que harán que tu evento sea inolvidable.",
            sobre_mi: "Sobre Mí",
            descripcion_sobre_mi: "Con más de 10 años de experiencia en el entretenimiento infantil, soy especialista en crear momentos mágicos que encantan a niños y adultos por igual. Mi pasión por el circo comenzó desde la infancia y he dedicado mi carrera a perfeccionar habilidades como malabarista, payaso, mago y animador. Cada espectáculo está diseñado con cuidado para adaptarse a las necesidades de tu evento, garantizando diversión garantizada y recuerdos inolvidables para los pequeños asistentes.",
            espectaculos: "Espectáculos",
            talleres: "Talleres",
            eventos: "Eventos",
            payaso: "Espectáculo de Payaso",
            magia: "Magia Infantil",
            malabares: "Taller de Malabares",
            acrobacias: "Taller de Acrobacias",
            animacion: "Animación de Fiestas",
            circo_movil: "Circo Móvil",
            descripcion_payaso: "Un show lleno de humor, travesuras y magia que hará reír a todos los asistentes. Incluye malabares, juegos de participación y sorpresas.",
            descripcion_magia: "Un viaje lleno de asombro con trucos visuales, ilusiones y participaciones que dejarán a los niños con la boca abierta.",
            descripcion_malabares: "Aprendizaje divertido de técnicas básicas de malabares con bolas, clubes y aros. Desarrolla coordinación motriz y destreza.",
            descripcion_acrobacias: "Introducción segura a las acrobacias circenses, con ejercicios básicos y juegos corporales que fomentan el trabajo en equipo.",
            descripcion_animacion: "Paquete completo de entretenimiento para fiestas infantiles, incluyendo shows, juegos, música y actividades adaptadas a la edad de los invitados.",
            descripcion_circo_movil: "Instalación de estructuras circenses móviles para eventos especiales, creando un ambiente auténtico de circo con todas las atracciones incluidas.",
            galeria: "Galería",
            instagram: "Síguenos en Instagram",
            instagram_placeholder: "Conéctate con nosotros en Instagram para ver nuestras últimas actuaciones y crear contenido exclusivo.",
            instagram_link: "@loslusers",
            contacto: "Contacto",
            nombre: "Nombre:",
            email: "Email:",
            mensaje: "Mensaje:",
            enviar: "Enviar",
            policy_title: "Política de Privacidad",
            policy_text: "Esta política de privacidad describe cómo Los Lusers recopila, utiliza y protege la información personal de sus usuarios.",
            copyright_title: "Derechos de Autor",
            copyright_text: "© 2025 Los Lusers. Todos los derechos reservados.",
            informacion_contacto: "Información de Contacto:",
            telefono: "Teléfono:",
            testimonios: "Testimonios",
            testimonial1: "\"El espectáculo de payaso en la fiesta de mi hijo fue increíble. Los niños estaban encantados y no paraban de reír durante todo el show.\"",
            autor1: "- María López",
            testimonial2: "\"Contratamos el Circo Móvil para el cumpleaños de mi hija y fue todo un éxito. Las instalaciones eran impresionantes y las actividades mantuvieron entretenidos a todos los niños.\"",
            autor2: "- Juan Rodríguez",
            blog: "Blog",
            blog_nuevo_espectaculo: "¡Nuevo Espectáculo de Malabares!",
            blog_texto1: "Descubre nuestro nuevo show de malabares con fuego y agua que sorprenderá a todos los asistentes.",
            blog_oferta_verano: "Oferta Especial de Verano",
            blog_texto2: "Contrata nuestros servicios antes del 31 de diciembre y obtén un 20% de descuento en todos nuestros paquetes."
        },
        en: {
            title: "Los Lusers - Circus Entertainment for Children",
            inicio: "Home",
            sobre_mi: "About Me",
            servicios: "Services",
            galeria: "Gallery",
            testimonios: "Testimonials",
            blog: "Blog",
            contacto: "Contact",
            welcome: "Welcome to Los Lusers!",
            reserva: "Book your show now!",
            descripcion_inicio: "We transform children's events into magical and exciting experiences. We offer professional circus shows, quality entertainment and creative workshops for children of all ages. Our team of specialized artists creates environments full of color, laughter and surprises that will make your event unforgettable.",
            sobre_mi: "About Me",
            descripcion_sobre_mi: "With over 10 years of experience in children's entertainment, I specialize in creating magical moments that delight both children and adults alike. My passion for the circus began in childhood and I have dedicated my career to perfecting skills as a juggler, clown, magician and entertainer. Each show is carefully designed to adapt to your event's needs, guaranteeing guaranteed fun and unforgettable memories for the young attendees.",
            espectaculos: "Shows",
            talleres: "Workshops",
            eventos: "Events",
            payaso: "Clown Show",
            magia: "Children's Magic",
            malabares: "Juggling Workshop",
            acrobacias: "Acrobatics Workshop",
            animacion: "Party Entertainment",
            circo_movil: "Mobile Circus",
            descripcion_payaso: "A show full of humor, mischief and magic that will make all attendees laugh. Includes juggling, participation games and surprises.",
            descripcion_magia: "A journey full of wonder with visual tricks, illusions and participations that will leave children amazed.",
            descripcion_malabares: "Fun learning of basic juggling techniques with balls, clubs and hoops. Develops motor coordination and dexterity.",
            descripcion_acrobacias: "Safe introduction to circus acrobatics, with basic exercises and body games that promote teamwork.",
            descripcion_animacion: "Complete entertainment package for children's parties, including shows, games, music and activities adapted to the age of the guests.",
            descripcion_circo_movil: "Installation of mobile circus structures for special events, creating an authentic circus atmosphere with all attractions included.",
            galeria: "Gallery",
            instagram: "Follow us on Instagram",
            instagram_placeholder: "Connect with us on Instagram to see our latest performances and exclusive content.",
            instagram_link: "@loslusers",
            contacto: "Contact",
            nombre: "Name:",
            email: "Email:",
            mensaje: "Message:",
            enviar: "Send",
            policy_title: "Privacy Policy",
            policy_text: "This privacy policy describes how Los Lusers collects, uses, and protects user personal information.",
            copyright_title: "Copyright",
            copyright_text: "© 2025 Los Lusers. All rights reserved.",
            informacion_contacto: "Contact Information:",
            telefono: "Phone:",
            testimonios: "Testimonials",
            testimonial1: "\"The clown show at my son's party was incredible. The children were delighted and didn't stop laughing during the entire show.\"",
            autor1: "- Maria Lopez",
            testimonial2: "\"We hired the Mobile Circus for my daughter's birthday and it was a complete success. The installations were impressive and the activities kept all the children entertained.\"",
            autor2: "- Juan Rodriguez",
            blog: "Blog",
            blog_nuevo_espectaculo: "New Juggling Show!",
            blog_texto1: "Discover our new juggling show with fire and water that will amaze all attendees.",
            blog_oferta_verano: "Special Summer Offer",
            blog_texto2: "Book our services before December 31st and get 20% off on all packages."
        }
    };

    function loadLanguage(lang) {
        if (!translations[lang]) lang = "es";
        console.log("Loading language:", lang);

        document.querySelectorAll("[data-translate]").forEach(element => {
            const key = element.getAttribute("data-translate");
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            } else {
                console.warn(`No translation found for key: ${key}`);
                element.textContent = key; // Show the key if no translation is available
            }
        });

        const titleElement = document.querySelector("title");
        if (titleElement && translations[lang].title) {
            titleElement.textContent = translations[lang].title;
        }
    }

    function saveLanguagePreference(lang) {
        localStorage.setItem("preferredLanguage", lang);
    }

    function getSavedLanguage() {
        const savedLang = localStorage.getItem("preferredLanguage");
        return translations[savedLang] ? savedLang : "es";
    }

    const savedLanguage = getSavedLanguage();
    loadLanguage(savedLanguage);

    languageSelector.value = savedLanguage;
    languageSelector.addEventListener("change", function () {
        const selectedLang = this.value;
        loadLanguage(selectedLang);
        saveLanguagePreference(selectedLang);
    });

    // Smooth scroll for menu links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Validate contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            if (!nombre || !email || !mensaje) {
                e.preventDefault();
                alert('Por favor complete todos los campos del formulario');
            }
        });
    }

    // Testimonials carousel
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length > 1) {
        let currentTestimonial = 0;

        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                if (i === index) {
                    testimonial.style.display = 'flex';
                } else {
                    testimonial.style.display = 'none';
                }
            });
        }

        // Change testimonial every 8 seconds
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 8000);

        // Show the first testimonial on load
        showTestimonial(currentTestimonial);
    }

    // Enlarge gallery images on click
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(image => {
        image.addEventListener('click', function () {
            const lightbox = document.createElement('div');
            lightbox.style.position = 'fixed';
            lightbox.style.top = '0';
            lightbox.style.left = '0';
            lightbox.style.width = '100%';
            lightbox.style.height = '100%';
            lightbox.style.backgroundColor = 'rgba(0,0,0,0.8)';
            lightbox.style.display = 'flex';
            lightbox.style.justifyContent = 'center';
            lightbox.style.alignItems = 'center';
            lightbox.style.cursor = 'pointer';
            lightbox.style.zIndex = '1000';

            const img = document.createElement('img');
            img.src = this.src;
            img.style.maxWidth = '90%';
            img.style.maxHeight = '90%';

            lightbox.appendChild(img);
            document.body.appendChild(lightbox);

            lightbox.addEventListener('click', function () {
                document.body.removeChild(lightbox);
            });
        });
    });

    // Add loader animation
    const loader = document.createElement("div");
    loader.className = "loader";
    document.body.prepend(loader);
    
    // Mostrar loader durante 1 segundo al cargar
    setTimeout(() => {
        loader.style.display = "block";
        setTimeout(() => {
            loader.style.display = "none";
        }, 1500);
    }, 100);
});