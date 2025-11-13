document.addEventListener('DOMContentLoaded', function () {
  var copyBtn = document.getElementById('copyButton');
  var contractValue = document.getElementById('contractAddress');
  if (!copyBtn || !contractValue) return;

  function setButtonLabel(tempText) {
    var original = copyBtn.innerHTML;
    copyBtn.innerHTML = tempText;
    setTimeout(function(){ copyBtn.innerHTML = original; }, 1600);
  }

  copyBtn.addEventListener('click', function () {
    var text = contractValue.textContent.trim();
    navigator.clipboard.writeText(text).then(function(){
      setButtonLabel('Copied! ✅');
    }).catch(function(){
      var textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      try { document.execCommand('copy'); setButtonLabel('Copied! ✅'); } catch (e) { setButtonLabel('Copy failed'); }
      document.body.removeChild(textarea);
    });
  });
});



