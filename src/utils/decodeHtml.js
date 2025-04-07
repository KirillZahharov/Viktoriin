// Funktsioon HTML-entiteetide (nagu &quot;, &amp;, jne) dekodeerimiseks tavalisteks sümboliteks
export function decodeHtml(html) {
  // Loome ajutise <textarea> HTML elemendi
  const txt = document.createElement('textarea');
  // Määrame elemendi sisuks antud HTML stringi
  txt.innerHTML = html;
  // Tagastame selle tegeliku tekstiväärtuse, kus HTML-entiteedid on dekodeeritud
  return txt.value;
}
