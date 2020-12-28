exports.info = (id, ROBOCOP, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `*MENU {ROBOCOP}*
  
❉──────────❉
  Hi. *{id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

╔════════════════════
║ *Info {ROBOCOP}*
╠════════════════════
║├≽️⚜ *AUTOR* : _AFFIS_
║├≽️⚜ *DESIGNER* : _ARMAN_
║├≽️⚜ *OWNER* : _INDRA NURDIANSYAH_
╠════════════════════
║  *{ROBOCOP}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${ROBOCOP}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY INDRA NURDIANSYAH*_
╠════════════════════
║ゞ📆 *${tampilTanggal}*
║ゞ⏱️ *${tampilWaktu}*
║ゞ📢 Bot Aktif ; *${aktif}*
╚════════════════════`
}
