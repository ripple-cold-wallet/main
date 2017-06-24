var qrcode1 = new QRCode("qrcode1", {
    width: 131,
    height: 131,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

var qrcode2 = new QRCode("qrcode2", {
    width: 131,
    height: 131,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

function generateKey() {
  return Math.random().toString(36).substr(2, 8) + Math.random().toString(36).substr(2, 8) + Math.random().toString(36).substr(2, 8) + Math.random().toString(36).substr(2, 8)
}

$('#generate').click(function(){
  var qr1 = generateKey();
  var qr2 = generateKey();

  qrcode1.makeCode(qr1);
  qrcode2.makeCode(qr2);

  $('.receive').html(qr1);
  $('.send').html(qr2);
});

$('#clear').click(function(){
  qrcode1.clear();
  qrcode2.clear();

  $('.receive').html('');
  $('.send').html('');
});
