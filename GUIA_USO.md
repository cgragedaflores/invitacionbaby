# Invitación Digital de Revelación de Género - Guía de Uso

## 🎉 ¿Qué se ha creado?

Una página web interactiva completa para una fiesta de revelación de género (Baby Shower) con:

- **Diseño Visual Profesional**: Fondo dividido en dos colores con efecto acuarela
- **Animaciones Suaves**: Ositos flotantes, corazones palpitantes, transiciones elegantes
- **Interactividad Completa**: Selección de equipos, modal de confirmación, música de fondo
- **Totalmente Responsivo**: Funciona perfectamente en móviles, tablets y escritorio
- **Integración WhatsApp**: Confirmación directa de asistencia

---

## 🔧 Cómo Personalizar

### 1. **Cambiar el Número de WhatsApp**

Abre `script.js` y busca esta línea:

```javascript
const numeroWhatsapp = '+34XXXXXXXXX'; // Reemplazar con número real
```

Reemplaza `+34XXXXXXXXX` con tu número de teléfono en formato internacional:
- Ejemplo para Argentina: `+541234567890`
- Ejemplo para España: `+34912345678`
- Ejemplo para México: `+525551234567`

### 2. **Cambiar la Música de Fondo**

En `index.html`, busca esta sección:

```html
<audio id="backgroundMusic" loop>
    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">
</audio>
```

Para usar "Little Things - Adrián Berenguer" o tu propia música:

**Opción A - Música Online**:
Reemplaza la URL con un enlace directo a tu audio:
```html
<source src="https://tu-sitio.com/little-things.mp3" type="audio/mpeg">
```

**Opción B - Música Local**:
1. Coloca el archivo `musica.mp3` en la misma carpeta que `index.html`
2. Cambia la URL a:
```html
<source src="musica.mp3" type="audio/mpeg">
```

### 3. **Cambiar Fechas y Detalles del Evento**

Abre `index.html` y busca esta sección:

```html
<div class="event-details">
    <div class="detail-item">
        <span class="detail-label">📅</span>
        <p>Domingo, 18 de Enero de 2026</p>
    </div>
    <div class="detail-item">
        <span class="detail-label">🕐</span>
        <p>16:00 hs</p>
    </div>
    <div class="detail-item">
        <span class="detail-label">📍</span>
        <p>Quinta San Isidro</p>
    </div>
</div>
```

Edita los textos para tu evento.

### 4. **Cambiar Opciones de Regalo**

Busca estas secciones en `index.html`:

**Para Team Niña**:
```html
<ul class="team-options">
    <li>🎀 Pañales</li>
    <li>✨ Talco</li>
</ul>
```

**Para Team Niño**:
```html
<ul class="team-options">
    <li>🧴 Toallitas húmedas</li>
    <li>🧼 Productos de higiene</li>
</ul>
```

---

## 🎨 Cambiar Colores

Si quieres alterar los colores rosa y azul:

En `style.css`, busca y modifica:

```css
.background-left {
    background: linear-gradient(135deg, #ffe4f0 0%, #fcc5e0 50%, #ffb6d9 100%);
    /* Cambiar a: #ffccdd, #ff99cc, #ff6699, etc. */
}

.background-right {
    background: linear-gradient(135deg, #e0f7ff 0%, #d4f1ff 50%, #c3ebff 100%);
    /* Cambiar a: #cce5ff, #99ccff, #6699ff, etc. */
}
```

---

## 📱 Funcionalidades Principales

### ✅ Seleccionar Equipo
- Haz clic en "Team Niña" o "Team Niño"
- Se ilumina con un efecto visual
- Se guarda tu selección

### ✅ Modal de Confirmación
- Botón "Confirmar Asistencia"
- Ingresa tu nombre
- Selecciona tu equipo
- Se abre WhatsApp automáticamente

### ✅ Música de Fondo
- Botón 🎵 para reproducir/pausar
- Se repite automáticamente
- Pulsa para activar/desactivar

### ✅ Notificaciones
- Aparecen mensajes visuales al seleccionar equipo
- Feedback al confirmar asistencia

---

## 🚀 Cómo Compartir

### Opción 1: Compartir Directamente
1. Abre `index.html` en tu navegador
2. Copia la URL del navegador
3. Comparte por WhatsApp, email, etc.

### Opción 2: Subir a Internet (Recomendado)

Para que la gente solo haga clic en un enlace, sube los archivos a:

**Netlify (Gratis)**:
1. Ve a netlify.com
2. Arrastra los archivos (index.html, style.css, script.js)
3. Obtén un enlace público

**Vercel (Gratis)**:
1. Ve a vercel.com
2. Carga los archivos
3. Obtén un enlace

**GitHub Pages (Gratis)**:
1. Crea un repositorio en GitHub
2. Sube los archivos
3. Activa GitHub Pages
4. Comparte el enlace

---

## 📋 Checklist Antes de Compartir

- [ ] Cambié el número de WhatsApp
- [ ] Verifiqué la fecha y hora del evento
- [ ] Cambié la ubicación si es necesario
- [ ] Agregué la música correcta (opcional)
- [ ] Probé en móvil y escritorio
- [ ] Verifiqué que el botón de WhatsApp funciona
- [ ] Probé que el modal se abre correctamente

---

## 🎯 Tips Útiles

1. **Prueba en móvil**: Usa el navegador móvil o simula con F12 en Chrome
2. **Comparte en redes**: Funciona perfectamente en historias de Instagram, estados de WhatsApp, etc.
3. **Personalización**: Puedes cambiar emojis, colores y textos sin problemas
4. **Música sin copyright**: Busca en YouTube Audio Library o Pixabay Music

---

## ⚙️ Requisitos Técnicos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para la música y WhatsApp)
- Teléfono con WhatsApp instalado (para confirmación)

---

## 💕 Créditos

Diseño: A & E Creaciones

¡Que disfrutes tu Baby Shower! 🎉👶
