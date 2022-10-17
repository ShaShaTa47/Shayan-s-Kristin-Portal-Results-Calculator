function obtaining() {
  console.log('testtt');

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
      arr.push(element.innerHTML);
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


