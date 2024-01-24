let btn = document.querySelectorAll(".box");
let resset = document.querySelector(".reset");

let start = true;

const winning =
    [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],


    ];
let indx = 0;

// ------------ print X ,O in game -------------

btn.forEach((btn1) => {
    btn1.addEventListener("click", () => {
        console.log(" button was clicked ", indx);
        indx++;
        if (start) {
            btn1.innerHTML = "x";
            start = false;

        }
        else {
            btn1.innerHTML = " o";
            start = true;

        }
        btn1.disabled = true;

        wiinercheck();
    });
});
///    ------------------ winnner logic-----------------

const wiinercheck = () => {
    for (let i of winning) {
        // console.log(
        //   btn[i[0]].innerText,
        // btn[i[1]].innerText,
        //btn[i[2]].innerText

        //);

        let pos1 = btn[i[0]].innerHTML;
        let pos2 = btn[i[1]].innerHTML;
        let pos3 = btn[i[2]].innerHTML;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                winershow ();
                disabledbtn();


            }
        }
    }
};

let winershow =()=>
{
    let new1= document.createElement("h1");
                new1.innerHTML=" you are winner";
                new1.setAttribute("class","winner");
                document.querySelector("body").before(new1);
}

const disabledbtn=()=>
{
    for(i of btn)
    {
        i.disabled=true;
    }
}


//------------- reset button code start---------------
let resetgame=()=>
{
    for(let i of btn)
    {
        start=true;
        enablebtn();

    }

}

const enablebtn=()=>
{
    for(i of btn)
    {

    i.disabled=false;
    i.innerHTML="";
}
}



resset.addEventListener("click", resetgame);
