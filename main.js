var counter = 0;

function savetoStorage() {
	var textareaList = document.querySelectorAll('textarea');
	for (var i = 0; i < textareaList.length; i ++) {
		localStorage.setItem('textContent' + i, textareaList[i].value);
		textareaList[i].id = 'textContent' + i;
	}
}

function getStorage() {
	if (localStorage.length) {
		for (var i = 0; i < localStorage.length/2; i ++) {
			addNote();
		}
	}
}

function addNote() {
	// init title textareas
	var parentList = document.getElementById("list");
	var childList = document.createElement('li');
	var titleText = document.createElement("textarea");
	titleText.setAttribute('placeholder', 'Enter note title');
	titleText.setAttribute('class','title-text');
	titleText.maxLength = "100";
	titleText.cols = "50";
	titleText.rows = "2";

	// init content textareas
	var contentText = document.createElement("textarea");
	contentText.setAttribute('class','content-text');
	contentText.setAttribute('placeholder', 'Enter note description here');
	contentText.maxLength = "5000";
	contentText.cols = "50";
	contentText.rows = "4";

	// init delete button
	var button = document.createElement('button');
	button.innerHTML = "Delete";
	button.setAttribute('class','delete-button');
	button.addEventListener('click', function() {
		removeItem(this);
	});
	childList.appendChild(button);
	// prepopulate from localstorage if true
	if (localStorage.length) {
		titleText.value = localStorage.getItem('textContent' + counter);
		titleText.setAttribute('id','textContent' + counter);
		counter ++;
		contentText.value = localStorage.getItem('textContent' + counter);
		contentText.setAttribute('id','textContent' + counter);
		counter ++;
		childList.appendChild(titleText);
		childList.appendChild(contentText);
	} else {
		childList.appendChild(titleText);
		childList.appendChild(contentText);
	}
	parentList.appendChild(childList);
}

function filterFunction() {
	// Declare variables
	var input, filter, ul, li, a, i;
	input = document.getElementById('searchInput');
	filter = input.value.toUpperCase();
	ul = document.getElementById("list");
	li = ul.getElementsByTagName('li');
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByClassName("title-text")[0];
        if (a.value.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// delete button
function removeItem(btn) {   
	localStorage.removeItem((btn.parentNode).childNodes[1].id);
	localStorage.removeItem((btn.parentNode).childNodes[2].id);
	((btn.parentNode).parentNode).removeChild(btn.parentNode); 
}


// get from localStorage on DOM load
document.addEventListener("DOMContentLoaded", function(event) {
	getStorage();
});