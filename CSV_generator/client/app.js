
  var input = document.getElementById("input");
  var submit = document.getElementById('submit');

  var initialize = () => {
    input.html = '';
  }

  submit.onclick = () => console.log(input.value)
