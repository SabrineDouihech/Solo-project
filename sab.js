var index= 0;
$(document).ready(function(){
    
    $(".container1").hide()
    $(".container2").hide()
    $(".container3").hide()
    $("#score").hide()
    $(".level").hide()

    $("#start").click(function(){
        index= 0
        console.log('hello')
        $(".container").hide()
        $(".container1").show()
    });
    $("#next1").click(function(){
        index= 1
        $(".container2").show()
        $(".container1").hide()
    });
    $("#previous2").click(function(){
        index= 0
        $(".container1").show()
        $(".container2").hide()
    });
    $("#next2").click(function(){
        index= 2
        $(".container3").show()
        $(".container2").hide()
    });
    $("#previous3").click(function(){
        index= 1
        $(".container2").show()
        $(".container3").hide()
    });
    $("#next3").click(function(){
        
        $(".container3").hide()
        $("#score").show()
    });
    $("button").click(function(){
        $(this).css("color","green");
    })
    $("#answer3").click(function(){
        /*var ans=this.innerText;
    for(i=0;i<questions.length;i++){
        if(questions[i].answers[ans]===true){*/
         var count=0;
            count++;
        })
})

/*$('button').click(function(){
//function counter(array){
    var count=0;
        for(var i=0; i<array.length ; i++) {
            var val=array[i].answers ;
                for (var key in val){
        console.log(val) ;  
        if (val[key]=== true){
        count++;
        }       
                }

        }
        return count;
//}
});
});*/

    

