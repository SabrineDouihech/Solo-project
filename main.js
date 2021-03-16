var score = 0
$(document).ready(function () {
    $(".answer").unbind().click(function () {
        var question = questions[index]
        var answer = $(this).attr("data-id")
        if(question.answer===answer){
            score++
        }
        console.log(question,answer)
        console.log("score",score)
        $(".container"+(index+1)).hide()
        $(".container"+(index+2)).show()
        index=index+1
        
    });
    return score;
})