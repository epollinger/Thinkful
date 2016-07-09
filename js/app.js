$(document).ready(function(){
    $("#Button1").click(function(){
        $("p").html(function(n){
        	var res = "Results for FizzBuzz... <br>"
        	for(var a = 1; a <= 100; a++){
        		if ((a%3 == 0) && (a%5 == 0)){
        			res = res + "fizzbuzz" + '<br>'
        		}
        		else if (a%3 == 0){
        			res = res + "fizz" + '<br>'
        		}
        		else if (a%5 == 0){
        			res = res + "buzz" + '<br>'
        		}
        		else
        		{
        			res = res + a + '<br>'
        		}
        	}
            return res;
        })
    })
    $("#Button2").click(function(){
    	$("p").html("Results for FizzBuzz... <br>");
        for(var a = 1; a <= 100; a++){
        	if ((a%3 == 0) && (a%5 == 0)){
        		$("p").append("fizzbuzz" + '<br>')
        	}
        	else if (a%3 == 0){
        		$("p").append("fizz" + '<br>')
        	}
        	else if (a%5 == 0){
        		$("p").append("buzz" + '<br>')
        	}
        	else
        	{
       			$("p").append(a + '<br>')
        	}
        }
            return;
    })
});
