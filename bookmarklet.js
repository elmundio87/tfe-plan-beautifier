var style = document.createElement("style");
style.innerHTML = `
.has-border-bottom-lighter:has(span[title="read"]){
  display:none !important;
}
.has-border-bottom-lighter:has(span[title="delete"], span[title="replace"]){
  background-color:RGBA(255,0,0,0.2) !important;
}
`;
document.head.appendChild(style);
const warnings = document.getElementsByClassName('is-warning');
for (i = warnings.length - 1; i >= 0; i--) {
  const childNodes = warnings[i].childNodes;
  for (j = 0; j < childNodes.length; j++) {
    if (childNodes[j].nodeType === Node.ELEMENT_NODE && childNodes[j].textContent.includes('is deprecated')) {
      warnings[i].parentNode.removeChild(warnings[i]);
    }
  }
}