function test() {
  alert("test");
}

function getWeatherData(name, email, message, recaptcha) {

  //TODO:本番用と切り替える
  //const API_URL = "https://cool-torrone-de9fa2.netlify.app/.netlify/functions/sendMailsWithSlack";
  const API_URL = "http://localhost:9000/.netlify/functions/getweather";

  let body = {
    name: name,
    to: email,
    msg: message,
    recaptcha: recaptcha
  };

  // バックエンドAPIへPOST
  const payload = JSON.stringify(body);

  fetch(API_URL, {
    method: "POST",
    body: payload,
  })

    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      var target = document.getElementById("result");
      target.textContent = data.text
    })
    .catch(error => {
      console.log(error);
      alert("通信エラーが発生しました。再度送信ください。");
    });
  /**
 
.then(response => {
  //成功した場合
  var target = document.getElementById("result");
  target.textContent = response.body
}).catch(error => {
  console.log(error);
  alert("通信エラーが発生しました。再度送信ください。");
});
 */

}

