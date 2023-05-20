const submit = document.getElementsByClassName("contact-form")[0];
console.log(submit);
const baseUrl = "";
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxk9vKyN1F2XAduvSSWIfbnjVaHegU0VpnIE7k-GZvdpWP0qiGBCTCX7nMEXhIMSglq/exec";

submit.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fname = document.getElementById("name3").value;
  const email = document.getElementById("email3").value;
  const number = document.getElementById("number").value;
  const dropdown1 = document.getElementById("dropdown1");
  var value = dropdown1.options[dropdown1.selectedIndex].value;

  const res = await fetch(scriptURL, {
    method: "POST",
    body: new FormData(submit),
  })
    .then((response) =>
      alert("Thanks for Contacting us..! We Will Contact You Soon...")
    )
    .catch((error) => console.error("Error!", error.message));

  console.log(res);

  // Email.send({
  //   Host: "smtp.elasticemail.com",
  //   Username: "lalitkmr5100@gmail.com",
  //   Password: "6B2FE6CBC47F7EE2C2836EF6385F6FC224C7",
  //   From: "lalitkmr5100@gmail.com",
  //   To: "shashikantprajapti17@gmail.com",
  //   Subject: "This is the subject",
  //   Body:
  //     "Name: " + fname + "<br/> E-mail: " + email + "<br/> Phone: " + number + "<br/>"+ "Course: " + value,
  // }).then((message) =>{
  //   console.log(message)
  //   // window.location.href =`${window.location.origin}/thanks.html`
  // }
  // );
});
