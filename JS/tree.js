/*Add the JavaScript here for the function billingFunction().
It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){
  if(document.getElementById('same').checked)
  {
    var c1 = document.getElementById('shippingName').value;
    document.getElementById('billingName').value = c1;
    var c2 = document.getElementById('shippingZip');
    document.getElementById('billingZip').value = c1;
  }
  else {
    document.getElementById('billingName').value = "";
    document.getElementById('billingZip').value = "";
  }
}
