var iframe = document.getElementById("mychild_iframe");
window.addEventListener ("load", myMain, false);
const standardDeviation = (arrforsd, usePopulation = false) => {
  const mean = arrforsd.reduce((acc, val) => acc + val, 0) / arrforsd.length;
  return Math.sqrt(
    arrforsd.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
      (arrforsd.length - (usePopulation ? 0 : 1))
  );
};
function undarkmode() {
  let linktagnameselect=[]
  whitecol='rgb(255, 255, 255)'
  try {
    var iframe = document.getElementById("mychild_iframe");
    iframe.contentWindow.document.getElementById('BodyDiv').style.backgroundColor=whitecol;
    document.getElementById('content').style.backgroundColor='rgb(59, 59, 59)';
    document.getElementById('wrapper').style.backgroundColor=whitecol;
    for(let index = 0 ; index < iframe.contentWindow.document.getElementsByTagName('td').length ; ++index) {
      iframe.contentWindow.document.getElementsByTagName('td')[index].style.backgroundColor=whitecol;
    }
    for(let index = 0 ; index < iframe.contentWindow.document.getElementsByTagName('tr').length ; ++index) {
      iframe.contentWindow.document.getElementsByTagName('tr')[index].style.backgroundColor=whitecol;
      iframe.contentWindow.document.getElementsByTagName('tr')[index].style.color='black';
    }
    for(let index = 0 ; index < iframe.contentWindow.document.getElementsByTagName('tbody').length ; ++index) {
      iframe.contentWindow.document.getElementsByTagName('tbody')[index].style.backgroundColor=whitecol;
    }
    iframe.contentWindow.document.body.style.color='black';
    for (let index=0; index<iframe.contentWindow.document.getElementsByClassName('class_cell').length; index++) {
      iframe.contentWindow.document.getElementsByClassName('class_cell')[index].style.borderColor='black';
      iframe.contentWindow.document.getElementsByClassName('class_cell')[index].style.color='#0399AC';
    }
    for (let index=0; index<iframe.contentWindow.document.getElementsByClassName('class_overview_cell').length; index++) {
      iframe.contentWindow.document.getElementsByClassName('class_overview_cell')[index].style.color='#800000';
    }

    for (let i=0; i<iframe.contentWindow.document.getElementsByTagName('a').length; i++) {
      if (iframe.contentWindow.document.getElementsByTagName('a')[i].parentNode.classList.contains('res_ttl_cell')==true) {
        linktagnameselect.push(iframe.contentWindow.document.getElementsByTagName('a')[i]);
      }
    }
    for (let i=0; i<linktagnameselect.length; i++) {
      linktagnameselect[i].setAttribute( 'style', 'color: black !important' );
    }
    document.getElementById('column-1').style.backgroundColor='rgb(255, 255, 255)';
    iframe.contentWindow.document.getElementsByClassName('name_cell')[0].setAttribute( 'style', 'background-color: #E4E4E4 !important' );
    iframe.contentWindow.document.querySelector('table#resultMasterTable').style.borderColor='black';
  }
  catch (error) {
    console.log(error);
    document.getElementById('BodyDiv').style.backgroundColor=whitecol;
    for(let index = 0 ; index < document.getElementsByTagName('td').length ; ++index) {
      document.getElementsByTagName('td')[index].style.backgroundColor=whitecol;
    }
    for(let index = 0 ; index < document.getElementsByTagName('tr').length ; ++index) {
      document.getElementsByTagName('tr')[index].style.backgroundColor=whitecol;
      document.getElementsByTagName('tr')[index].style.color='black';
    }
    for(let index = 0 ; index < document.getElementsByTagName('tbody').length ; ++index) {
      document.getElementsByTagName('tbody')[index].style.backgroundColor=whitecol;
      document.getElementsByTagName('tbody')[index].style.borderColor='black';
    }
    document.body.style.color='black';
    for (let index=0; index<document.getElementsByTagName('a').length; index++) {
      document.getElementsByTagName('a')[index].style.color='white!important';
    }
    for (let index=0; index<document.getElementsByClassName('class_cell').length; index++) {
      document.getElementsByClassName('class_cell')[index].style.borderColor='black';
      document.getElementsByClassName('class_cell')[index].style.color='#0399AC';
    }
    for (let index=0; index<document.getElementsByClassName('class_overview_cell').length; index++) {
      document.getElementsByClassName('class_overview_cell')[index].style.color='#800000';
    }

    for (let i=0; i<document.getElementsByTagName('a').length; i++) {
      if (document.getElementsByTagName('a')[i].parentNode.classList.contains('res_ttl_cell')==true) {
        linktagnameselect.push(document.getElementsByTagName('a')[i]);
      }
    }
    for (let i=0; i<linktagnameselect.length; i++) {
      linktagnameselect[i].setAttribute( 'style', 'color: black !important' );
    }

    document.getElementsByClassName('name_cell')[0].setAttribute( 'style', 'background-color: #E4E4E4 !important' );

    document.querySelector('table#resultMasterTable').style.borderColor='rgb(209, 109, 109)';
    document.getElementsByClassName('column_max')[0].innerHTML=''
  }
}


function darkmode() {
  let linktagnameselect=[]
  try {
    var iframe = document.getElementById("mychild_iframe");
    iframe.contentWindow.document.getElementById('BodyDiv').style.backgroundColor='rgb(59, 59, 59)';
    document.getElementById('content').style.backgroundColor='rgb(59, 59, 59)';
    document.getElementById('wrapper').style.backgroundColor='rgb(59, 59, 59)';
    for(let index = 0 ; index < iframe.contentWindow.document.getElementsByTagName('td').length ; ++index) {
      iframe.contentWindow.document.getElementsByTagName('td')[index].style.backgroundColor='rgb(59, 59, 59)';
    }
    for(let index = 0 ; index < iframe.contentWindow.document.getElementsByTagName('tr').length ; ++index) {
      iframe.contentWindow.document.getElementsByTagName('tr')[index].style.backgroundColor='rgb(59, 59, 59)';
      iframe.contentWindow.document.getElementsByTagName('tr')[index].style.color='rgb(180, 136, 245)';
    }
    for(let index = 0 ; index < iframe.contentWindow.document.getElementsByTagName('tbody').length ; ++index) {
      iframe.contentWindow.document.getElementsByTagName('tbody')[index].style.backgroundColor='rgb(59, 59, 59)';
    }
    iframe.contentWindow.document.body.style.color='rgb(180, 136, 245)';
    for (let index=0; index<iframe.contentWindow.document.getElementsByTagName('a').length; index++) {
      iframe.contentWindow.document.getElementsByTagName('a')[index].style.color='white!important';
    }
    for (let index=0; index<iframe.contentWindow.document.getElementsByClassName('class_cell').length; index++) {
      iframe.contentWindow.document.getElementsByClassName('class_cell')[index].style.borderColor='white';
      iframe.contentWindow.document.getElementsByClassName('class_cell')[index].style.color='rgb(180, 136, 245)';
    }
    for (let index=0; index<iframe.contentWindow.document.getElementsByClassName('class_overview_cell').length; index++) {
      iframe.contentWindow.document.getElementsByClassName('class_overview_cell')[index].style.color='rgb(180, 136, 245)';
    }

    for (let i=0; i<iframe.contentWindow.document.getElementsByTagName('a').length; i++) {
      if (iframe.contentWindow.document.getElementsByTagName('a')[i].parentNode.classList.contains('res_ttl_cell')==true) {
        linktagnameselect.push(iframe.contentWindow.document.getElementsByTagName('a')[i]);
      }
    }
    for (let i=0; i<linktagnameselect.length; i++) {
      linktagnameselect[i].setAttribute( 'style', 'color: rgb(180, 136, 245) !important' );
    }
    document.getElementById('column-1').style.backgroundColor='rgb(59, 59, 59)';


    iframe.contentWindow.document.getElementsByClassName('name_cell')[0].style.backgroundColor='rgb(109,108,108)';
    iframe.contentWindow.document.querySelector('table#resultMasterTable').style.borderColor='rgb(209, 109, 109)';
  }
  catch (error) {
    console.log(error);
    document.getElementById('BodyDiv').style.backgroundColor='rgb(59, 59, 59)';
    for(let index = 0 ; index < document.getElementsByTagName('td').length ; ++index) {
      document.getElementsByTagName('td')[index].style.backgroundColor='rgb(59, 59, 59)';
    }
    for(let index = 0 ; index < document.getElementsByTagName('tr').length ; ++index) {
      document.getElementsByTagName('tr')[index].style.backgroundColor='rgb(59, 59, 59)';
      document.getElementsByTagName('tr')[index].style.color='rgb(180, 136, 245)';
    }
    for(let index = 0 ; index < document.getElementsByTagName('tbody').length ; ++index) {
      document.getElementsByTagName('tbody')[index].style.backgroundColor='rgb(59, 59, 59)';
      document.getElementsByTagName('tbody')[index].style.borderColor='rgb(59, 59, 59)';
    }
    document.body.style.color='rgb(180, 136, 245)';
    for (let index=0; index<document.getElementsByTagName('a').length; index++) {
      document.getElementsByTagName('a')[index].style.color='white!important';
    }
    for (let index=0; index<document.getElementsByClassName('class_cell').length; index++) {
      document.getElementsByClassName('class_cell')[index].style.borderColor='white';
      document.getElementsByClassName('class_cell')[index].style.color='rgb(180, 136, 245)';
    }
    for (let index=0; index<document.getElementsByClassName('class_overview_cell').length; index++) {
      document.getElementsByClassName('class_overview_cell')[index].style.color='rgb(180, 136, 245)';
    }

    for (let i=0; i<document.getElementsByTagName('a').length; i++) {
      if (document.getElementsByTagName('a')[i].parentNode.classList.contains('res_ttl_cell')==true) {
        linktagnameselect.push(document.getElementsByTagName('a')[i]);
      }
    }
    for (let i=0; i<linktagnameselect.length; i++) {
      linktagnameselect[i].setAttribute( 'style', 'color: rgb(180, 136, 245) !important' );
    }

    document.getElementsByClassName('name_cell')[0].style.backgroundColor='rgb(109,108,108)';

    document.querySelector('table#resultMasterTable').style.borderColor='rgb(209, 109, 109)';
    document.getElementsByClassName('column_max')[0].innerHTML='<p style="color: #e12f2f">Dark Mode feature provided by extension. You may turn it off if you desire.</p><br>'
  }
  
}

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
  //console.log(document.getElementsByClassName('res_grd_cell'));
  var arr = [];
  const grade_list = document.getElementsByClassName('res_grd_cell');
  var tdnscount = 0
  for (let index = 0; index < grade_list.length; index++) {
    const element = grade_list[index];
    if (element.innerHTML != "" && isNaN(element.innerHTML) == false) {
      if (element.innerHTML=="1"||element.innerHTML=="2"||element.innerHTML=="3"||element.innerHTML=="4"||element.innerHTML=="5"||element.innerHTML=="6"||element.innerHTML=="7"||element.innerHTML=="8"||element.innerHTML=="0") {
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
  console.log(arrOfNum);

  let sum = arrOfNum.reduce((a, b) => a + b, 0);

  let average = (sum / arr.length).toFixed(5);

  //document.getElementById('lb_name').style.fontSize='120pt';
  let thismod = findMode(arrOfNum);
  var thiscoolstring = "<strong>Mean:</strong> MYP " + average + "<br />" + "<strong>Mode:</strong> MYP " + thismod + "<br />" + "<strong>Median:</strong> MYP " + median(arrOfNum) + "<br />" + "<strong>Range:</strong> MYP " + arrOfNum[0] + " - " + arrOfNum[arrOfNum.length - 1] + "<br />" + "<strong>Sum of Grades:</strong> " + sum + "<br />" + "<strong>Count:</strong> " + arrOfNum.length + " Grades" +
    "<br/> <strong> DNS Count: </strong>" + tdnscount + "<br />" + "<strong>Population Standard Deviation: </strong>" + standardDeviation(arrOfNum, true);
  //document.getElementById('lb_name').innerHTML=document.getElementById('lb_name').innerHTML+"<br />"+"<br />"+thiscoolstring+"<br />";

  /*alert("Mean: "+average);*/
  return [thiscoolstring, arrOfNum];
}
function subjectspecific() {
  try {
    var classlisthtml = document.getElementsByClassName("class_cell");
    console.log(classlisthtml);
    if (classlisthtml.length==0) {
      var iframe = document.getElementById("mychild_iframe");
      var classlisthtml = iframe.contentWindow.document.getElementsByClassName('class_cell');
    }
    //alert('a' + classlisthtml.length);
    
  } catch (error) {
    console.log(error)
    console.log(classlisthtml);
    var iframe = document.getElementById("mychild_iframe");
    var classlisthtml = iframe.contentWindow.document.getElementsByClassName('class_cell');
    //alert('b' + classlisthtml.length);
  }
  
  let classlist=[];
  for (let index = 0; index < classlisthtml.length; index++) {
    classlisthtml[index].setAttribute('id', index+"classextension");
    let scndelement = classlisthtml[index];
    classlist.push(scndelement.innerHTML.replace(/&nbsp;/g, ' '));
  }
  let strclasslist=classlist.join('<br>');
  console.log(strclasslist, classlist, classlisthtml);
  return [strclasslist, classlist, classlisthtml];
}

function myMain() {
  chrome.storage.sync.get(['dark'], function(result) {
    if (result.dark=='true'||result.dark===undefined) {
      darkmode();
    }
  });

  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      if (request.greeting.includes("checkboxvaluedata")) {
        for (var i=0; i < request.greeting[1].length; i++) {
          document.getElementById(request.greeting[1][i]).parentNode.parentNode.remove();
        }
      }
    }
  );

  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      if (request.greeting === "get-data-pls") {
        sendResponse({ farewell: "<strong>" + document.getElementById('lb_name').innerHTML + "</strong>. DNS grades and anything not from '0-8' are ignored." + "<br />" + "<br />" + obtaining()[0] + "<br />" })
      }
    }
  );
  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      if (request.sgreeting === "hist") {
        sendResponse({ sfarewell: obtaining()[1] });
      }
    }
  );
  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      if (request.greeting === "class-names") {
        sendResponse({ farewell: subjectspecific()});
      }
    }
  );

  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
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
        sendResponse({ farewell: "a"});
      }
    }
  );


  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      if (request.greeting === "dark") {
        darkmode();
        sendResponse({ farewell: 'darkmode'});
      }
    }
  );

  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      if (request.greeting === "undark") {
        undarkmode();
        sendResponse({ farewell: 'undarken'});
      }
    }
  );
  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      if (request.greeting === "hidegrades") {
        try {
          for (let i=0; i<iframe.contentWindow.document.getElementsByClassName('res_grd_cell').length; i++) {
            iframe.contentWindow.document.getElementsByClassName('res_grd_cell')[i].style.display="none";
          }
        } catch (error) {
          console.log(error);
          for (let i=0; i<document.getElementsByClassName('res_grd_cell').length; i++) {
            document.getElementsByClassName('res_grd_cell')[i].style.display="none";
            
          }
        }
      }     
    }
  );
  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      if (request.greeting === "unhidegrades") {
        try {
          for (let i=0; i<iframe.contentWindow.document.getElementsByClassName('res_grd_cell').length; i++) {
            iframe.contentWindow.document.getElementsByClassName('res_grd_cell')[i].style.display=null;
          }
        } catch (error) {
          console.log(error);
          for (let i=0; i<document.getElementsByClassName('res_grd_cell').length; i++) {
            document.getElementsByClassName('res_grd_cell')[i].style.display=null;
          }
        }
      }     
    }
  );
}