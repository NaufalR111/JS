<script>
  var y = 200;
  var x = 200;
  var vy = 0;
  var kecepatanpipa = 2;
  var menang = true;
window.addEventListener('click',kontrolmouse,false);

  //MEMBUAT PIPA
   //buat array pipa[x][ketinggian]
   pipa = [
   [400, Math.floor(Math.random() * 150) + 50, 0], //antara 50-200
   [500, Math.floor(Math.random() * 150) + 50, 0],
   [600, Math.floor(Math.random() * 150) + 50, 0],
   [700, Math.floor(Math.random() * 150) + 50, 0],
   [800, Math.floor(Math.random() * 150) + 50, 0]
   ];

  canv=document.getElementById("canv");
  ctx=canv.getContext("2d");
  setInterval(game, 1000/30);

  function game(){
   ctx.clearRect(0,0,canv.width,canv.height); //menghapus semua isi canvas
   vy += 1;
   y += vy;

   var image = new Image();
   image.src="https://i.imgur.com/tUFOHUP.png";
   ctx.drawImage(image, x, y,40,40);

   for(i = 0;i<5;i++)
   {
    //MEMBUAT PIPA
    ctx.fillStyle="grey";
    ctx.fillRect(pipa[i][0],0,50,pipa[i][1]); //pipa atas
    ctx.fillStyle="grey";
    ctx.fillRect(pipa[i][0],pipa[i][1] + 150, 50, 250 - pipa[i][1]); //pipa bawah

    //cek jika burung terkena pipa
    if(pipa[i][0] < 240 && pipa[i][0] > 160 && (pipa[i][1] > y || pipa[i][1] + 150 <= y + 30))
    {
     alert("Burung terkena pipa.. ohhh ! Anda kalah.. !");
    }

    //MENYETTING KOORDINAT X PADA PIPA
    if(pipa[i][0] > -50) //jika masih terlihat di map
    {
     pipa[i][0] -= kecepatanpipa;
    }
    else if(pipa[i][0] == -50)  //jika sudah tidka terlihat, maka pindah pipa ke kanan
    {
     //pindah posisi
     pipa[i][0] = 450;
    }
   }

   if(y > 400)
   {
    vy = -10
   }
  }

  function kontrolmouse(evt) //pemilihan menu
  {
   vy = -10;
  }

</script>
