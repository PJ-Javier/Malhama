var selFamily = document.getElementById("theme-family"),
    selHistory = document.getElementById("theme-history"),
    selNature = document.getElementById("theme-nature"),
    selCulture = document.getElementById("theme-culture"),
    selAdventure = document.getElementById("theme-adventure");
    themeNone = document.getElementById("theme-none");

var selFree = document.getElementById("cost-free"),
    selPaid = document.getElementById("cost-paid");
    costNone = document.getElementById("cost-none");

var pwdBox = document.getElementById("pwd-checkbox"),
    petsBox = document.getElementById("pets-checkbox");

var articleList = document.querySelectorAll("article");

function newFilter(){
  for(var i = 0; i < articleList.length; i++){ articleList[i].style.display = 'block'; }
  if(selFamily.checked){
    if(selFree.checked){
      if(pwdBox.checked){
        if(petsBox.checked){ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.family), article:not(.free), article:not(.pwdyes), article:not(.petsyes)")[i].style.display = 'none'; } }
        else{ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.family), article:not(.free), article:not(.pwdyes), article:not(.petsno)")[i].style.display = 'none'; } }
      }
      else{
        if(petsBox.checked){ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.family), article:not(.free), article:not(.pwdno), article:not(.petsyes)")[i].style.display = 'none'; } }
        else{ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.family), article:not(.free), article:not(.pwdno), article:not(.petsno)")[i].style.display = 'none'; } }
      }
    }
    if(selPaid.checked){
      if(pwdBox.checked){
        if(petsBox.checked){ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.family), article:not(.paid), article:not(.pwdyes), article:not(.petsyes)")[i].style.display = 'none'; } }
        else{ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.family), article:not(.paid), article:not(.pwdyes), article:not(.petsno)")[i].style.display = 'none'; } }
      }
      else{
        if(petsBox.checked){ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.family), article:not(.paid), article:not(.pwdno), article:not(.petsyes)")[i].style.display = 'none'; } }
        else{ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.family), article:not(.paid), article:not(.pwdno), article:not(.petsno)")[i].style.display = 'none'; } }
      }
    }
  }
  else if(selNature.checked){
    if(selFree.checked){
      if(pwdBox.checked){
        if(petsBox.checked){ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.nature), article:not(.free), article:not(.pwdyes), article:not(.petsyes)")[i].style.display = 'none'; } }
        else{ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.nature), article:not(.free), article:not(.pwdyes), article:not(.petsno)")[i].style.display = 'none'; } }
      }
      else{
        if(petsBox.checked){ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.nature), article:not(.free), article:not(.pwdno), article:not(.petsyes)")[i].style.display = 'none'; } }
        else{ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.nature), article:not(.free), article:not(.pwdno), article:not(.petsno)")[i].style.display = 'none'; } }
      }
    }
    if(selPaid.checked){
      if(pwdBox.checked){
        if(petsBox.checked){ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.nature), article:not(.paid), article:not(.pwdyes), article:not(.petsyes)")[i].style.display = 'none'; } }
        else{ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.nature), article:not(.paid), article:not(.pwdyes), article:not(.petsno)")[i].style.display = 'none'; } }
      }
      else{
        if(petsBox.checked){ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.nature), article:not(.paid), article:not(.pwdno), article:not(.petsyes)")[i].style.display = 'none'; } }
        else{ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.nature), article:not(.paid), article:not(.pwdno), article:not(.petsno)")[i].style.display = 'none'; } }
      }
    }
  }
  else if(selHistory.checked){
    if(selFree.checked){
      if(pwdBox.checked){
        if(petsBox.checked){ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.history), article:not(.free), article:not(.pwdyes), article:not(.petsyes)")[i].style.display = 'none'; } }
        else{ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.history), article:not(.free), article:not(.pwdyes), article:not(.petsno)")[i].style.display = 'none'; } }
      }
      else{
        if(petsBox.checked){ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.history), article:not(.free), article:not(.pwdno), article:not(.petsyes)")[i].style.display = 'none'; } }
        else{ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.history), article:not(.free), article:not(.pwdno), article:not(.petsno)")[i].style.display = 'none'; } }
      }
    }
    if(selPaid.checked){
      if(pwdBox.checked){
        if(petsBox.checked){ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.history), article:not(.paid), article:not(.pwdyes), article:not(.petsyes)")[i].style.display = 'none'; } }
        else{ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.history), article:not(.paid), article:not(.pwdyes), article:not(.petsno)")[i].style.display = 'none'; } }
      }
      else{
        if(petsBox.checked){ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.history), article:not(.paid), article:not(.pwdno), article:not(.petsyes)")[i].style.display = 'none'; } }
        else{ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.history), article:not(.paid), article:not(.pwdno), article:not(.petsno)")[i].style.display = 'none'; } }
      }
    }
  }
  else if(selCulture.checked){
    if(selFree.checked){
      if(pwdBox.checked){
        if(petsBox.checked){ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.culture), article:not(.free), article:not(.pwdyes), article:not(.petsyes)")[i].style.display = 'none'; } }
        else{ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.culture), article:not(.free), article:not(.pwdyes), article:not(.petsno)")[i].style.display = 'none'; } }
      }
      else{
        if(petsBox.checked){ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.culture), article:not(.free), article:not(.pwdno), article:not(.petsyes)")[i].style.display = 'none'; } }
        else{ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.culture), article:not(.free), article:not(.pwdno), article:not(.petsno)")[i].style.display = 'none'; } }
      }
    }
    if(selPaid.checked){
      if(pwdBox.checked){
        if(petsBox.checked){ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.culture), article:not(.paid), article:not(.pwdyes), article:not(.petsyes)")[i].style.display = 'none'; } }
        else{ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.culture), article:not(.paid), article:not(.pwdyes), article:not(.petsno)")[i].style.display = 'none'; } }
      }
      else{
        if(petsBox.checked){ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.culture), article:not(.paid), article:not(.pwdno), article:not(.petsyes)")[i].style.display = 'none'; } }
        else{ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.culture), article:not(.paid), article:not(.pwdno), article:not(.petsno)")[i].style.display = 'none'; } }
      }
    }
  }
  else if(selAdventure.checked){
    if(selFree.checked){
      if(pwdBox.checked){
        if(petsBox.checked){ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.adventure), article:not(.free), article:not(.pwdyes), article:not(.petsyes)")[i].style.display = 'none'; } }
        else{ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.adventure), article:not(.free), article:not(.pwdyes), article:not(.petsno)")[i].style.display = 'none'; } }
      }
      else{
        if(petsBox.checked){ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.adventure), article:not(.free), article:not(.pwdno), article:not(.petsyes)")[i].style.display = 'none'; } }
        else{ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.adventure), article:not(.free), article:not(.pwdno), article:not(.petsno)")[i].style.display = 'none'; } }
      }
    }
    if(selPaid.checked){
      if(pwdBox.checked){
        if(petsBox.checked){ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.adventure), article:not(.paid), article:not(.pwdyes), article:not(.petsyes)")[i].style.display = 'none'; } }
        else{ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.adventure), article:not(.paid), article:not(.pwdyes), article:not(.petsno)")[i].style.display = 'none'; } }
      }
      else{
        if(petsBox.checked){ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.adventure), article:not(.paid), article:not(.pwdno), article:not(.petsyes)")[i].style.display = 'none'; } }
        else{ for(var i = 0; i < articleList.length; i++){ document.querySelectorAll("article:not(.adventure), article:not(.paid), article:not(.pwdno), article:not(.petsno)")[i].style.display = 'none'; } }
      }
    }
  }
}