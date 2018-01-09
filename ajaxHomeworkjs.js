$(document).ready();


 $('form').on('submit', function(e){
      e.preventDefault();
    })


  	let animals =["dog","cat","bird","snake","horse","pig","mouse","rabbit"];
    let newAnimalName;

  	for(let i =0; i<animals.length; i++)
    {
      		//looping as much as arry
        	const animalButton = $("<button >" +animals[i]+ "</button>");
        	//create name of animal button based on set array
        	$("#button-show").append(animalButton);
        	//display buttons 
          console.log(animals[i]);
	 }

    //new button method

 
  	$("button").on("click",function(){
  	  $("#image-show").empty();
  	 let animalName =$(this).text();


    const queryURL ="https://api.giphy.com/v1/gifs/search?q=" +
    animalName + "&api_key=dc6zaTOxFJmzC&limit=10";
     
    $.ajax({
        url: queryURL,
        method: "GET"
  	       }).done(function(response){
  		        console.log(response);
  	         	const result= response.data;
  		
  		for(let i=0; i<result.length; i++)
  		{
	  		const img = $("<img>");
	  		const imageURL =result[i].images.fixed_height.url;
       
	  		
	  		img.attr("src",imageURL);
	  		img.attr("alt","button image");
	  		$("#image-show").append(img);

  		}
  	});
	});


$("#add-button").on("click",function(event){
           event.preventDefault();
      
           newAnimalName = $("#button-input").val().trim();
           //getting string value from input text
         
           //create a new button which contains a button-input text
           const newAnimalbutton=$("<button>"+newAnimalName+"</button>");
           //create a button and give a string value which i got it from input text

           //and push it to animals 
           animals.push(newAnimalbutton);
           //display (append) to button-show
           $("#button-show").append(newAnimalbutton); 

   $("button").on("click",function(){
        $("#image-show").empty();
        newAnimalName =$(this).text();
        const queryURL ="https://api.giphy.com/v1/gifs/search?q=" +
        newAnimalName + "&api_key=dc6zaTOxFJmzC&limit=10";

           $.ajax({
              url:queryURL,
              method:"GET"
           }).done(function(response){
            const resultAdd= response.data;
            for(let i=0; i<resultAdd.length; i++)
                {
                  const img = $("<img>");
                  const imageURL =resultAdd[i].images.fixed_height.url;
                  
                  img.attr("src",imageURL);
                  img.attr("alt","button image");
                  $("#image-show").append(img);

                }
           });
         });
 });
       /*

  $(document).ready();


 $('form').on('submit', function(e){
      e.preventDefault();
    })


    let animals =["dog","cat","bird","snake","horse","pig","mouse","rabbit"];
    let newAnimalName;

    for(let i =0; i<animals.length; i++)
    {
          //looping as much as arry
          const animalButton = $("<button >" +animals[i]+ "</button>");
          //create name of animal button based on set array
          $("#button-show").append(animalButton);
          //display buttons 
          console.log(animals[i]);
   }

    //new button method

 
    $("button").on("click",function(){
      $("#image-show").empty();
     let animalName =$(this).text();


    const queryURL ="https://api.giphy.com/v1/gifs/search?q=" +
    animalName + "&api_key=dc6zaTOxFJmzC&limit=10";
     
    $.ajax({
        url: queryURL,
        method: "GET"
           }).done(function(response){
              console.log(response);
              const result= response.data;
      
      for(let i=0; i<result.length; i++)
      {
        const img = $("<img>");
        const imageURL =result[i].images.fixed_height.url;
       
        
        img.attr("src",imageURL);
        img.attr("alt","button image");
        $("#image-show").append(img);

      }
    });
  });


$("#add-button").on("click",function(event){
           event.preventDefault();
      
           newAnimalName = $("#button-input").val().trim();
           //getting string value from input text
         
           //create a new button which contains a button-input text
           const newAnimalbutton=$("<button>"+newAnimalName+"</button>");
           //create a button and give a string value which i got it from input text

           //and push it to animals 
           animals.push(newAnimalbutton);
           //display (append) to button-show
           $("#button-show").append(newAnimalbutton); 

   $("button").on("click",function(){
        $("#image-show").empty();
        newAnimalName =$(this).text();
        const queryURL ="https://api.giphy.com/v1/gifs/search?q=" +
        newAnimalName + "&api_key=dc6zaTOxFJmzC&limit=10";

           $.ajax({
              url:queryURL,
              method:"GET"
           }).done(function(response){
            const resultAdd= response.data;
            for(let i=0; i<resultAdd.length; i++)
                {
                  const img = $("<img>");
                  const imageURL =resultAdd[i].images.fixed_height.url;
                  
                  img.attr("src",imageURL);
                  img.attr("alt","button image");
                  $("#image-show").append(img);

                }
           });
         });
 });
       
    
  </script>

       */