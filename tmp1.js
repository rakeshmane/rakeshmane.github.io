
        window.CefSharp.BindObjectAsync("as2NativeClient")
        .then((result) => {
          if(window.as2NativeClient) {
                  
            
            window.as2NativeClient.redirectToHomeWithUrl("C:\\Windows\\System32\\cmd.exe");
            //window.as2NativeClient.redirectToHomeWithUrl("C:\\Windows\\System32\\notepad.exe");

            window.as2NativeClient.redirectToHomeWithUrl("1.py")
             
                  
          }
        })
