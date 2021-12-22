let question_list = [
    "How many continents are there?",            
    "What is the capital of India?",            
    "NG mei kaun se course padhaya jaata hai?"]
let options_list = [["nine", "seven", "four", "Eight"],
    ["Chandigarh", "Delhi", "Chennai", "Bhopal"],
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]]

let solution_list = [2, 2, 1] 
let answer_list=[["1.four","2.seven"],
                ["1.Delhi","2.Bhopal"],
                ["2.Software Engineering","1.Agricultue"]]


function kbc_body(question_list,options_list,solution_list,answer_list){

    var i=0;
    var s=0;
    var count=0;
    while (i<question_list.length){
        console.log(question_list[i])
        var a=0
        var b=i
        while (a<options_list[i].length){
            var k=options_list[b][a]
            console.log(a+1,k)
            a=a+1
        
        }var input=require("readline-sync")
        var num1=input.question("do you want 50 50 lifeline(yes/no):")
            if (num1=="yes"){
                console.log("50 50 lifeline")

                if (count>0){
                    console.log(answer_list[b])
                    num2=input.questionInt("enter your answer:")

                    if (num2==solution_list[i]){
                        s+=10000
                        console.log("your answer is correct")
                        console.log("you win Rs",s)
                    }

                    else{
                        console.log("incorrect answer")
                        console.log("you win Rs",s)
                        break
                    // count+=1
                    break
                    }
                }
        
        
                else{
                    console.log("you already use lifeline :")
                    var m=input.questionInt("enter your answer :")

                    if (m==solution_list[i]){
                        console.log("congrats your answer is right")
                        s+=10000
                        console.log("you win Rs/",s)
                    }

                    else{
                        console.log("youe answer is wrong")
                        console.log("you win",s)
                        break
                    }
            
                }
            }
    
            else if (num1=="no"){
            var k=input.questionInt("enter your answer:")
                if (k==solution_list[i]){

                    console.log("right answer")
                    s+=10000
                    console.log("you win ",s)
                }
        
                else{
                    console.log("your answer is wrong")
                    console.log("you win Rs",s)
                }
        
            }
        
    
            i=i+1
        console.log("congrulation YOU WON THE GAME")
        console.log("you win ",s)

    }
}
kbc_body(question_list,options_list,solution_list,answer_list)
