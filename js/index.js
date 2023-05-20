const submit = document.getElementsByClassName("contact-form")[0];
const downloadBrowser = document.getElementById("downloadBrowser");
console.log(submit);
const baseUrl = "";

submit.addEventListener("submit", async (e) => {
  e.preventDefault();
  const dropdown1 = document.getElementById("dropdown1");
  var value = dropdown1.options[dropdown1.selectedIndex].value;
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxSujOUV0SaSWELBMY0vMrUod8_2FDuJvf_u5cuLn3erto1iLVggOJ14IwPipQDfzeZ/exec";

  const res = await fetch(scriptURL, {
    method: "POST",
    body: new FormData(submit),
  })
    .then(
      (response) =>
        (window.location.href = `${window.location.origin}/thanks.html`)
    )
    .catch((error) => console.error("Error!", error.message));

  // console.log(res);

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
  // }
  // );
});

downloadBrowser.addEventListener("submit", async (e) => {
  e.preventDefault();
  const dropdown1 = document.getElementById("dropdown1");
  var value = dropdown1.options[dropdown1.selectedIndex].value;

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbxF0fChBpHfpSNDqiHxhPPHirRRzh11TNrK8_MVldBDhHi0FnhmUYP95tqqlH0mmCfqxQ/exec";

  const res = await fetch(scriptUrl, {
    method: "POST",
    body: new FormData(downloadBrowser),
  })
    .then(
      (response) =>
        (window.location.href = `${window.location.origin}/Weeb Academy.pdf`)
    )
    .catch((error) => console.error("Error!", error.message));

  // console.log(res);

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
