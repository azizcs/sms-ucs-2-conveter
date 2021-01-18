	
	var el;                                                    
	function countCharacters(e) {                                    
	  var textEntered, countRemaining, counter;  

	  
	  textEntered = document.getElementById('sms').value;  
	  counter = (180 - (textEntered.length));
	  countRemaining = document.getElementById('charactersRemaining'); 
	  charactersFound = document.getElementById('charactersContains');
	  countRemaining.textContent = textEntered.length; 
	  //textEntered.some(r=> TRCHART.includes(r))

	}

	function createMessage(c){
		  const TRCHART = ["i", "ğ", "ü", "ü", "ö", "ç", "ş", "İ", "Ğ", "Ü", "Ö", "Ç", "Ş"]; 
		  var letter_Count =0;
		  var NB_Message  =0;
		  var mesge = 70;
	  	  for (var position = 0; position < textEntered.length; position++) {
		    if (TRCHART.includes(textEntered.charAt(position))) {
		    	ıf(position <= mesge){
		    		NB_Message += 1;
		    		position= mesge;
		    		mesge += mesge;
		    	} 
		      	letter_Count += 1;
		    	charactersFound.textContent = 'We found '+letter_Count;
		      }
		    }

		}

	el = document.getElementById('sms');                   
	el.addEventListener('keyup', countCharacters, false);




	var el;  
	function convert(e) {
	  var output = document.getElementById("result");
	  var input = document.getElementById("sms").value;
	  var chartBits = 0;
	  output.value = "";

	  for (var i = 0; i < input.length; i++) {
	      totalBitsNb = input[i].charCodeAt(0).toString(2);
	      output.value += totalBitsNb;
	      countRemaining = document.getElementById('charactersContains'); 
	      
	      if(totalBitsNb.length > 7) {
      		q = 16 - totalBitsNb.length;
	     	chartBits = chartBits + totalBitsNb.length + q;
	     	//countRemaining.textContent =  chartBits;	      
	  	}else{
	  		nbOfBits = document.getElementById("result").value.length; 
	  		chartBits += totalBitsNb.length;
			//countRemaining.textContent = chartBits; 
			
	  	}
	  	countRemaining.textContent = chartBits;
	  }
	}
	el = document.getElementById('sms');                   
	el.addEventListener('keyup', convert, false);