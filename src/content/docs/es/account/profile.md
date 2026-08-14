---
title: Perfil y configuración
description: Gestiona tu imagen de perfil, contraseña y la configuración de la aplicación.
---

Tu perfil y configuración te permiten personalizar solyto para que se adapte a tu forma de trabajar.

## Perfil

La página **Perfil** muestra tu avatar, tu nombre y tu ID de usuario. Desde aquí puedes:

- **Cambiar tu imagen de perfil** — haz clic en el avatar y elige una nueva imagen (2 MB como máximo)
- **Gestionar amigos** — consulta tu lista de amigos y gestiona las solicitudes de amistad entrantes y salientes
- **Administración** — si eres administrador, un icono de escudo enlaza al área de administración
- **Cerrar sesión** — cierra sesión en el dispositivo actual

## Configuración

La configuración se organiza en ocho pestañas:

### Tareas

Configura cómo se comportan las tareas en toda la aplicación:

- Gestiona las **categorías** (crear, renombrar, eliminar)
- Gestiona los **espacios de trabajo** — vincula o desvincula categorías y activa o desactiva la marca **Ocultar**

### Etiquetas

Gestiona tus etiquetas de forma global. Crea, renombra, cambia el color y elimina etiquetas.

### Localización

Controla cómo se muestran las fechas, las horas y los números:

| Ajuste | Opciones |
|---------|---------|
| Idioma | Inglés, alemán, francés, español |
| Zona horaria | Cualquier zona horaria IANA (p. ej. `Europe/Berlin`, `America/New_York`) |
| Formato de fecha | `dd.mm.YYYY`, `dd.mm.YY`, `YYYY/mm/dd`, `YY/mm/dd`, `YYYY-mm-dd`, `YY-mm-dd` |
| Formato de hora | 24 horas (`13:37`) o 12 horas (`1.37 PM`) |

### Funciones

Activa o desactiva funciones individuales. Si no usas una función, puedes ocultarla de la barra lateral y del panel. Esto mantiene tu interfaz despejada.

### Notificaciones

Configura cómo y cuándo te notifica solyto:

- Conecta el [bot de Telegram](/integrations/telegram/) y activa las notificaciones push
- Activa o desactiva cada tipo de notificación por canal (UI, correo, push, bot)

Consulta [Notificaciones](/customization/notifications/) para más detalles.

### App

Configuración a nivel de aplicación:

- **Tema** — elige entre 10 temas (consulta [Temas](/customization/themes/))
- **Animaciones** — activa o desactiva las animaciones CSS/JS
- **Reiniciar el recorrido de bienvenida** — vuelve a reproducir el recorrido guiado
- **Instalar como app** — instala solyto como [aplicación web progresiva](/account/pwa/)
- **Versión** — la versión instalada de la aplicación

### Seguridad

Gestiona tus claves de acceso (passkeys):

- Añade una clave de acceso (WebAuthn), renómbrala o elimínala
- Consulta cuándo se usó por última vez cada clave de acceso

### Exportar datos

Exporta tus datos de solyto. Consulta [Exportación](/integrations/exporting/) para más detalles sobre los formatos admitidos.

## Cambiar tu contraseña

Las contraseñas se establecen al registrarte y mediante el proceso de restablecimiento de contraseña. Las contraseñas deben tener al menos **12 caracteres** y solyto comprueba las contraseñas nuevas contra una base de datos de contraseñas comprometidas conocidas, rechazando cualquiera que aparezca en una filtración conocida.
