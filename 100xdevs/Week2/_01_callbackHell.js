function callbackHell () {
  console.log("Start the hell");
  setTimeout(() => {
    console.log("First callback");
    
    setTimeout(() => {
      console.log("Second callback");
      
      setTimeout(() => {
        console.log("Third callback");
        
        setTimeout(() =>{
          console.log("Hell Ends");
        }, 1000);

      }, 2000);

    }, 3000);

  }, 4000);

  
}

callbackHell();