document.addEventListener('DOMContentLoaded', function() {
    if (performance.navigation.type === 1) {

        console.log('Website reloaded');

        var val1 = Math.floor((Math.random()*6)+1);
        var val2 = Math.floor((Math.random()*6)+1);

        console.log("val1: " + val1);
        console.log("val2: " + val2);

        var res = document.getElementById("result");

        if(val1<val2){
            document.querySelectorAll("svg")[1].classList.remove("invisible");
            document.querySelectorAll("svg")[0].classList.add("invisible");
            res.innerHTML = "Player 2 Wins!";
        }
        else if(val1>val2){
            document.querySelectorAll("svg")[1].classList.add("invisible");
            document.querySelectorAll("svg")[0].classList.remove("invisible");
            res.textContent = "Player 1 Wins!";
        }
        else{
            document.querySelectorAll("svg")[1].classList.remove("invisible");
            document.querySelectorAll("svg")[0].classList.remove("invisible");
            res.textContent = "It's a Draw";
        }

        if(val1==1){
            var arr = document.querySelectorAll(".dot1");
            var count=0;
            while(arr[count]){
                if(!arr[count].classList.contains("invisible")){
                    arr[count].classList.add("invisible");
                }
                count++;
            }

            document.querySelector(".dot1.middle1.middle2").classList.remove("invisible");            

        }

        if(val1==2){
            var arr = document.querySelectorAll(".dot1");
            var count=0;
            while(arr[count]){
                if(!arr[count].classList.contains("invisible")){
                    arr[count].classList.add("invisible");
                }
                count++;
            }

            document.querySelector(".dot1.left.down").classList.remove("invisible");
            document.querySelector(".dot1.right.up").classList.remove("invisible");

        }
        
        if(val1==3){

            var arr = document.querySelectorAll(".dot1");
            var count=0;
            while(arr[count]){
                if(!arr[count].classList.contains("invisible")){
                    arr[count].classList.add("invisible");
                }
                count++;
            }

            document.querySelector(".dot1.left.down").classList.remove("invisible");
            document.querySelector(".dot1.right.up").classList.remove("invisible");
            document.querySelector(".dot1.middle1.middle2").classList.remove("invisible");

        }

        if(val1==4){
            var arr = document.querySelectorAll(".dot1");
            var count=0;
            while(arr[count]){
                if(!arr[count].classList.contains("invisible")){
                    arr[count].classList.add("invisible");
                }
                count++;
            }

            var arr2 = document.querySelectorAll(".dot1.corner");
            count=0;
            while(arr2[count]){
                arr2[count].classList.remove("invisible");
                count++;
            }
        }

        if(val1==5){
            var arr = document.querySelectorAll(".dot1");
            var count=0;
            while(arr[count]){
                if(!arr[count].classList.contains("invisible")){
                    arr[count].classList.add("invisible");
                }
                count++;
            }

            var arr2 = document.querySelectorAll(".dot1.corner");
            count=0;
            while(arr2[count]){
                arr2[count].classList.remove("invisible");
                count++;
            }
            document.querySelector(".dot1.middle1.middle2").classList.remove("invisible");
        }

        if(val1==6){
            var arr = document.querySelectorAll(".dot1");
            var count=0;
            while(arr[count]){
                if(arr[count].classList.contains("invisible")){
                    arr[count].classList.remove("invisible");
                }
                count++;
            }

            var arr2 = document.querySelectorAll(".dot1.middle1");
            count=0;
            while(arr2[count]){
                arr2[count].classList.add("invisible");
                count++;
            }
        }

        if(val2==1){
            var arr = document.querySelectorAll(".dot2");
            var count=0;
            while(arr[count]){
                if(!arr[count].classList.contains("invisible")){
                    arr[count].classList.add("invisible");
                }
                count++;
            }

            document.querySelector(".dot2.middle1.middle2").classList.remove("invisible");            

        }

        if(val2==2){
            var arr = document.querySelectorAll(".dot2");
            var count=0;
            while(arr[count]){
                if(!arr[count].classList.contains("invisible")){
                    arr[count].classList.add("invisible");
                }
                count++;
            }

            document.querySelector(".dot2.left.down").classList.remove("invisible");
            document.querySelector(".dot2.right.up").classList.remove("invisible");

        }
        
        if(val2==3){

            var arr = document.querySelectorAll(".dot2");
            var count=0;
            while(arr[count]){
                if(!arr[count].classList.contains("invisible")){
                    arr[count].classList.add("invisible");
                }
                count++;
            }

            document.querySelector(".dot2.left.down").classList.remove("invisible");
            document.querySelector(".dot2.right.up").classList.remove("invisible");
            document.querySelector(".dot2.middle1.middle2").classList.remove("invisible");

        }

        if(val2==4){
            var arr = document.querySelectorAll(".dot2");
            var count=0;
            while(arr[count]){
                if(!arr[count].classList.contains("invisible")){
                    arr[count].classList.add("invisible");
                }
                count++;
            }

            var arr2 = document.querySelectorAll(".dot2.corner");
            count=0;
            while(arr2[count]){
                arr2[count].classList.remove("invisible");
                count++;
            }
        }

        if(val2==5){
            var arr = document.querySelectorAll(".dot2");
            var count=0;
            while(arr[count]){
                if(!arr[count].classList.contains("invisible")){
                    arr[count].classList.add("invisible");
                }
                count++;
            }

            var arr2 = document.querySelectorAll(".dot2.corner");
            count=0;
            while(arr2[count]){
                arr2[count].classList.remove("invisible");
                count++;
            }
            document.querySelector(".dot2.middle1.middle2").classList.remove("invisible");
        }

        if(val2==6){
            var arr = document.querySelectorAll(".dot2");
            var count=0;
            while(arr[count]){
                if(arr[count].classList.contains("invisible")){
                    arr[count].classList.remove("invisible");
                }
                count++;
            }

            var arr2 = document.querySelectorAll(".dot2.middle1");
            count=0;
            while(arr2[count]){
                arr2[count].classList.add("invisible");
                count++;
            }
        }

    } else {
      console.log('Website visited');
    }
  });
  