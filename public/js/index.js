var qrcode1 = new QRCode("qrcode1", {
    width: 140,
    height: 140,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

var qrcode2 = new QRCode("qrcode2", {
    width: 130,
    height: 130,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

var qrcode3 = new QRCode("qrcode3", {
    width: 130,
    height: 130,
    colorDark : "#ffffff",
    colorLight : "#000000",
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
    console.log("public: " + data.responseJSON.secret);
    qrcode1.makeCode(qr1);
    qrcode2.makeCode(qr2);
    qrcode3.makeCode(qr1);

    $('.receive').html(qr1);
    $('.send').html(qr2);
  }
});

  //return Math.random().toString(36).substr(2, 8) + Math.random().toString(36).substr(2, 8) + Math.random().toString(36).substr(2, 8) + Math.random().toString(36).substr(2, 8)
}

$('#generate').click(function(){
  qr1 = $('p.receive').text();
  qr2 = generateKey();

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
