// enter text into input

// add clears the text and adds it to the ul


// remove all, removes all li 
//remove singular li





var ul = document.getElementById('list');
var removeAll = document.getElementById('removeAll');
var add = document.getElementById("add");
add.addEventListener("click", function(){
	addLi(ul);
});

var removethatShit = document.getElementsByClassName('removeMe');
for (var i = 0; i < removethatShit.length; i++) {
   (function(index) {
        removethatShit[index].addEventListener("mouseover", function() {
           removethatShit[index].innerHTML = "&#x2714;";
         })
        removethatShit[index].addEventListener("mouseout", function() {
           removethatShit[index].innerHTML = "X";
         })

   })(i);

}





function addLi(targetUl){
	var inputText = document.getElementById('text').value;
	var li = document.createElement('li');
	 var removeButton = document.createElement('button');
    var textNode = document.createTextNode( " "+ inputText);
   
    document.getElementById('text').value = '';

    if(inputText.length === 0){
    	alert('there is not input in the box. please do whatever');
    	return false;
    }


    removeButton.className = "removeMe";
     removeButton.innerHTML = "X";
   removeButton.onmouseover = function(){
    	removeButton.innerHTML = "&#x2714;";}
    	removeButton.onmouseout = function(){ 
    		removeButton.innerHTML = "X";}
    removeButton.setAttribute('onclick', "removeMe(this);")



    // adds text
   
    li.appendChild(removeButton);
    li.appendChild(textNode);

    targetUl.appendChild(li);
}

function removeMe (item) {
	var parent = item.parentElement;
	parent.parentElement.removeChild(parent);
}

removeAll.onclick = function(){
	ul.innerHTML = "";
}

// remove hardcoded "removeMe" buttons
/* Not working
var removeMe = document.getElementsByClassName("removeMe");

var removeFunction = function() {
	 removeMe[i].onmouseover = function(){
    	removeMe[i].innerHTML = "&#x2714;";}
    	removeMe[i].onmouseout = function(){ 
    		removeMe[i].innerHTML = "X";}	

};

for (var i = 0; i < removeMe.length; i++) {
    removeMe[i].addEventListener('mouseover', removeFunction, false);
}

*/