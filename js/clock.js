//new Date().getHours(),":",new Date().getMinutes(),":",new Date().getSeconds()


setInterval(function(){
//  $('div class="clock"').write('<div class="clock">');
  document.getElementById("myclock").innerHTML = new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds();
}, 1000);
