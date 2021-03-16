var questions = []
function addQuestion(question, answer) {
        questions.push({
                question: question, answer: answer
        })
}
addQuestion("The baby boy saw ... in the mirror and started to cry.", "3")
addQuestion(" A lot of trains ... late today due to the heavy storms.", "2")
addQuestion(" ... was a strong wind last night.", "1")
/*function counter(array){
    var count=0;
        for(var i=0; i<array.length ; i++) {
            var val=array[i].answer ;
                for (var key in val){
        console.log(val) ;  
        if (val[key]=== true){
        count++;
        }       
                }

        }
        return count;
}*/
function counter(array) {
        var count = 0;
        for (var i = 0; i < array.length; i++) {
                if (array[0].answer === true) {
                        count++;
                }
        }
        return count;
}

function score(number) {
        if (score >= 20 && score <= 25) {
                return "Advanced";
        }
        else if (score >= 15 && score <= 20) {
                return "intermediate to advanced"
        }
        else if (score >= 15 && score <= 10) {
                return "pre-intermediate to intermediate"
        }
        else if (score >= 10 && score <= 0) {
                return "beginner to pre-intermediate"
        }
        else {
                return 'INVALID SCORE'
        }
}

