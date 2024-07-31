var inputbox=document.getElementById("input-box")
var listcontainer=document.getElementById("list-container")
function addTask(){
    if(inputbox.value===''){
        alert("You must write something")
    }
    else{
        var li=document.createElement("li")
        li.innerHTML=inputbox.value
        listcontainer.appendChild(li)
        var span=document.createElement("span")
        span.innerHTML="\u00d7"  //cross icon
        li.appendChild(span)
    }
    inputbox.value=""
    saveData()
}

listcontainer.addEventListener("click",function(event){
    if(event.target.tagName=="LI"){
        event.target.classList.toggle("checked")
        saveData()
    }
    else if(event.target.tagName=="SPAN"){
        event.target.parentElement.remove()
        saveData()
    }
},false)

// to save our tasks ,use local storage
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
// whenever website is opended ,it should display stored results

function show(){
    listcontainer.innerHTML=localStorage.getItem("data")
}
show()