function askMyName() {
  const name = prompt("Please enter your name", "Your name");

  if (name != null) {
     document.getElementById("name-h1").innerHTML = "My name is " + name;
  }
}

function helloWorld() {
  const h1message = document.getElementById("name-h1").innerHTML;// ใช้คำสั่ง document.getElementById เหมือนใน askMyName เพื่อเอาข้อความใน h1 มาใส่
  alert(h1message + "  ขนาดชวนยังหลีกภัย แล้วพี่เป็นใครทำไมไม่หลีกผม");
}