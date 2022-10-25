function obtaining() {

  function median(values) {
    if (values.length === 0) throw new Error("No inputs");

    values.sort(function (a, b) {
      return a - b;
    });

    var half = Math.floor(values.length / 2);

    if (values.length % 2)
      return values[half];

    return (values[half - 1] + values[half]) / 2.0;
  }
  function findMode(array) {
    // This function starts by creating an object where the keys are each unique number of the array and the values are the amount of times that number appears in the array.

    let object = {};

    for (let i = 0; i < array.length; i++) {
      if (object[array[i]]) {
        // increment existing key's value
        object[array[i]] += 1;
      } else {
        // make a new key and set its value to 1
        object[array[i]] = 1;
      }
    }

    // assign a value guaranteed to be smaller than any number in the array
    let biggestValue = -1;
    let biggestValuesKey = -1;

    // finding the biggest value and its corresponding key
    Object.keys(object).forEach(key => {
      let value = object[key];
      if (value > biggestValue) {
        biggestValue = value;
        biggestValuesKey = key;
      }
    })

    return biggestValuesKey;

  }
  var ahs = document.getElementsByClassName('res_grd_cell').length;
  console.log(document.getElementsByClassName('res_grd_cell'));
  var arr = [];
  const grade_list = document.getElementsByClassName('res_grd_cell');
  var tdnscount = 0
  for (let index = 0; index < grade_list.length; index++) {
    const element = grade_list[index];
    if (element.innerHTML != "" && isNaN(element.innerHTML) == false) {
      if (element.innerHTML=="1"||element.innerHTML=="2"||element.innerHTML=="3"||element.innerHTML=="4"||element.innerHTML=="5"||element.innerHTML=="6"||element.innerHTML=="7"||element.innerHTML=="8") {
        arr.push(element.innerHTML);
      }
    }
    if (element.innerHTML == "dns" || element.innerHTML == "DNS") {
      tdnscount += 1
    }
  }

  var arrOfNum = [];

  arr.forEach(str => {
    arrOfNum.push(Number(str));
  });
  arrOfNum.sort(function (a, b) {
    return a - b;
  });

  let sum = arrOfNum.reduce((a, b) => a + b, 0);

  let average = (sum / arr.length).toFixed(5);

  //document.getElementById('lb_name').style.fontSize='120pt';
  let thismod = findMode(arrOfNum);
  var thiscoolstring = "<strong>Mean:</strong> MYP " + average + "<br />" + "<strong>Mode:</strong> MYP " + thismod + "<br />" + "<strong>Median:</strong> MYP " + median(arrOfNum) + "<br />" + "<strong>Range:</strong> MYP " + arrOfNum[0] + " - " + arrOfNum[arrOfNum.length - 1] + "<br />" + "<strong>Sum of Grades:</strong> " + sum + "<br />" + "<strong>Count:</strong> " + arrOfNum.length + " Grades" +
    "<br/> <strong> DNS Count: </strong>" + tdnscount;
  //document.getElementById('lb_name').innerHTML=document.getElementById('lb_name').innerHTML+"<br />"+"<br />"+thiscoolstring+"<br />";

  /*alert("Mean: "+average);*/
  return [thiscoolstring, arrOfNum];
}
function subjectspecific() {
  var classlisthtml = document.getElementsByClassName("class_cell");
  let classlist=[];
  for (let index = 0; index < classlisthtml.length; index++) {
    classlisthtml[index].setAttribute('id', index+"classextension")
    let scndelement = classlisthtml[index];
    classlist.push(scndelement.innerHTML.replace(/&nbsp;/g, ' '));
    console.log(scndelement);
  }
  let strclasslist=classlist.join('<br>');
  return [strclasslist, classlist, classlisthtml];
}
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    if (request.greeting.includes("checkboxvaluedata")) {
      for (var i=0; i < request.greeting[1].length; i++) {
        document.getElementById(request.greeting[1][i]).parentNode.parentNode.remove();
      }
    }
  }
);

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    if (request.greeting === "get-data-pls") {
      sendResponse({ farewell: "<strong>" + document.getElementById('lb_name').innerHTML + "</strong>. DNS grades and anything not from '0-8' are ignored." + "<br />" + "<br />" + obtaining()[0] + "<br />" })
    }
  }
);
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "2nd2ndfrom the extension");
    if (request.sgreeting === "hist") {
      sendResponse({ sfarewell: obtaining()[1] })
    }
  }
);
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    if (request.greeting === "class-names") {
      sendResponse({ farewell: subjectspecific()})
    }
  }
);

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    if (request.greeting.includes("add-grade")) {
      let newgradediv=document.createElement('tr');
      newgradediv.setAttribute('id', 'addedgrade');
      var classlisthtml = document.getElementsByClassName("class_cell");
      console.log(classlisthtml);
      for (let index = 0; index < 1; index++) {
        classlisthtml[index].setAttribute('id', index+"classextension")
        document.getElementById(index+"classextension").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.insertBefore(newgradediv, document.getElementById(index+"classextension").parentNode.parentNode.parentNode.parentNode.parentNode);
        document.getElementById("addedgrade").innerHTML='<td valign="top" style="width:100%;"><table border="0" style="width:100%;"><tr><td class="class_cell" colspan="3">Your added grade from the extension</td></tr><tr><td class="class_overview_cell" colspan="3"><strike>For a printable version, see "Continuous Report" on this page</strike></td></tr><tr><td class="blnk_lft_cell">&nbsp;</td><td class="res_ttl_cell">Added Grade: ' +request.greeting[2]+' </td><td class="res_grd_cell">'+request.greeting[1]+'</td><td class="res_date_cell"></td></tr></td>'
      }    
      sendResponse({ farewell: "a"})
    }
  }
);