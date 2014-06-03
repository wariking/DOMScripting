function showPic(whichpic){
	var wherepic = document.getElementById("wherepic")
	source = whichpic.getAttribute("href");
	wherepic.setAttribute("src",source);
	var text =  whichpic.getAttribute("title");
	alert(text)
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
	return false; //done"if return false in function , don't work out as another sentence "return false" "
	}
	function showPics(whichpic){
	var wherepic = document.getElementById("wherepic")
	source = whichpic.getAttribute("href");
	wherepic.setAttribute("src",source);
	//var text =  whichpic.getAttitude("title");
	//var description = document.getElementById("description");
	//description.firstChild.nodeValue = text;
	return false; //if return false in function , don't work out as another sentence "return false" 
	}
;function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	alert (body_element.childNodes.length);
	}