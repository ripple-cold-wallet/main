var qrcode1 = new QRCode("qrcode1", {
    width: 145,
    height: 145,
    colorDark : "#000",
    colorLight : "#fff",
    correctLevel : QRCode.CorrectLevel.H
});

var qrcode2 = new QRCode("qrcode2", {
    width: 130,
    height: 130,
    colorDark : "#000",
    colorLight : "#fff",
    correctLevel : QRCode.CorrectLevel.H
});

var qrcode3 = new QRCode("qrcode3", {
    width: 128,
    height: 128,
    colorDark : "#000",
    colorLight : "#fff",
    correctLevel : QRCode.CorrectLevel.H
});

window.onload = function() {
  generateKey();
};

function generateKey() {
  //$.post('/add');

  $.ajax({
  url: '/generate',
  complete: function(data) {
    qr1 = data.responseJSON.address;
    qr2 = data.responseJSON.secret;
    // console.log("public: " + data.responseJSON.secret);
    qrcode1.makeCode(qr1);
    qrcode2.makeCode(qr2);
    qrcode3.makeCode(qr1);

    $('.receive').html(qr1);
    $('.receive2').html(qr1);
    $('.send').html(qr2);
  }
});

  //return Math.random().toString(36).substr(2, 8) + Math.random().toString(36).substr(2, 8) + Math.random().toString(36).substr(2, 8) + Math.random().toString(36).substr(2, 8)
}

$('#generate').click(function(){
  generateKey();
});

$('#clear').click(function(){
  // qrcode1.clear(); // NOT WORKING DUNNO WHY
  // qrcode2.clear(); // NOT WORKING DUNNO WHY
  // qrcode3.clear(); // NOT WORKING DUNNO WHY

  $('#qrcode1 img').attr('src','');
  $('#qrcode2 img').attr('src','');
  $('#qrcode3 img').attr('src','');

  $('.receive').html('');
  $('.receive2').html('');
  $('.send').html('');
});
