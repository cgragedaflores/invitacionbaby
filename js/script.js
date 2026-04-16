// Estado global
let selectedTeam = null;
let isPlayingMusic = false;

// Elemento de audio
const audio = document.getElementById('backgroundMusic');
const musicBtn = document.getElementById('musicBtn');

// Inicializar cuando carga la página
const teamCards = document.querySelectorAll('.team-card');
const confirmBtn = document.querySelector('.confirm-btn');
const modal = document.getElementById('confirmModal');
const closeModalBtn = document.querySelector('.modal-close');
const submitBtn = document.querySelector('.modal-submit');
const nameInput = document.getElementById('nameInput');
const teamSelect = document.getElementById('teamSelect');

function initPage() {
    musicBtn.addEventListener('click', toggleMusic);

    teamCards.forEach(card => {
        const team = card.dataset.team || card.id.replace('team', '').toLowerCase();
        card.addEventListener('click', () => selectTeam(team));
    });

    if (confirmBtn) {
        confirmBtn.addEventListener('click', openModal);
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (submitBtn) {
        submitBtn.addEventListener('click', submitConfirmation);
    }

    window.addEventListener('click', event => {
        if (event.target === modal) {
            closeModal();
        }
    });
}

document.addEventListener('DOMContentLoaded', initPage);

/**
 * Seleccionar equipo
 */
function selectTeam(team) {
    const teamGirl = document.getElementById('teamGirl');
    const teamBoy = document.getElementById('teamBoy');

    // Remover selección anterior
    teamGirl.classList.remove('selected');
    teamBoy.classList.remove('selected');

    // Aplicar selección
    if (team === 'girl') {
        teamGirl.classList.add('selected');
        selectedTeam = 'girl';
        showNotification('¡Bienvenida al Team Niña! 👧💕');
    } else if (team === 'boy') {
        teamBoy.classList.add('selected');
        selectedTeam = 'boy';
        showNotification('¡Bienvenido al Team Niño! 👦💙');
    }
}

/**
 * Mostrar notificación
 */
function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #ff69b4 0%, #87ceeb 100%);
        color: white;
        padding: 15px 30px;
        border-radius: 25px;
        z-index: 2000;
        animation: slideDown 0.4s ease;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        font-weight: 600;
    `;

    document.body.appendChild(notification);

    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * Abrir modal de confirmación
 */
function openModal() {
    const modal = document.getElementById('confirmModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Enfocar en el input del nombre
    setTimeout(() => {
        document.getElementById('nameInput').focus();
    }, 300);
}

/**
 * Cerrar modal de confirmación
 */
function closeModal() {
    const modal = document.getElementById('confirmModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

/**
 * Enviar confirmación por WhatsApp
 */
function submitConfirmation() {
    const name = document.getElementById('nameInput').value.trim();
    const team = document.getElementById('teamSelect').value;

    if (!name) {
        alert('Por favor ingresa tu nombre');
        document.getElementById('nameInput').focus();
        return;
    }

    if (!team) {
        alert('Por favor selecciona tu equipo');
        return;
    }

    // Crear mensaje para WhatsApp
    const teamName = team === 'girl' ? 'Team Niña 👧' : 'Team Niño 👦';
    const mensaje = encodeURIComponent(
        `¡Hola! Me confirmo para el Baby Shower 🎉\n\n` +
        `👤 Nombre: ${name}\n` +
        `👥 Equipo: ${teamName}\n` +
        `📅 Fecha: 3 de Mayo de 2026 a las 15:00 hs\n` +
        `📍 Lugar: Salon Oropeza\n\n` +
        `¡Nos vemos allá! 💕`
    );

    // Número de WhatsApp (sin espacios ni símbolos)
    const numeroWhatsapp = '59174955734'; // Reemplazar con número real

    // Abrir WhatsApp
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensaje}`;
    window.open(urlWhatsapp, '_blank');

    // Cerrar modal
    closeModal();

    // Mostrar mensaje de éxito
    showNotification('¡Confirmación enviada! Gracias por confirmar 💕');

    // Limpiar formulario
    document.getElementById('confirmForm').reset();
}

/**
 * Controlar reproducción de música
 */
function toggleMusic() {
    if (isPlayingMusic) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    audio.play().then(() => {
        isPlayingMusic = true;
        musicBtn.classList.add('playing');
        musicBtn.title = 'Pausar música';
        showNotification('🎵 Música activada');
    }).catch(error => {
        console.log('Error al reproducir música:', error);
        showNotification('Error al reproducir la música');
    });
}

function pauseMusic() {
    audio.pause();
    isPlayingMusic = false;
    musicBtn.classList.remove('playing');
    musicBtn.title = 'Reproducir música';
    showNotification('🔇 Música pausada');
}

/**
 * Detectar si la música está sonando
 */
audio.addEventListener('play', () => {
    isPlayingMusic = true;
    musicBtn.classList.add('playing');
});

audio.addEventListener('pause', () => {
    isPlayingMusic = false;
    musicBtn.classList.remove('playing');
});

audio.addEventListener('ended', () => {
    // La música se repite automáticamente con el atributo loop
});

// Permitir reproducción automática con interacción del usuario
document.addEventListener('click', () => {
    if (audio.paused && isPlayingMusic) {
        playMusic();
    }
}, { once: true });

/**
 * Animación suave al scrollear
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar observador a elementos
document.querySelectorAll('.team-card, .event-details').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

/**
 * Prevenir envío del formulario con Enter
 */
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
        e.preventDefault();
        const nextInput = e.target.nextElementSibling;
        if (nextInput && nextInput.tagName === 'INPUT') {
            nextInput.focus();
        } else {
            submitConfirmation();
        }
    }
});
