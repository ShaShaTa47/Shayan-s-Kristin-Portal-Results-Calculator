window.resizeBy(1000, 1000);

document.addEventListener("DOMContentLoaded", () => {

    chrome.storage.sync.get(['dark'], function(result) {
        if (result.dark===undefined) {
            document.getElementById('slidertheme').checked = 'true';
        }
        if (result.dark=='true') {
            document.getElementById('slidertheme').checked = 'true';
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { greeting: "dark" }, function (response) {
                    //document.getElementById("thattextthing").innerHTML = response.farewell;
                });
            })
        }
    });

    document.getElementById('hidegradeswitch').onclick=function() {
        // If the checkbox is checked, display the output text
        if (document.getElementById('hidegradeswitch').checked == true) {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { greeting: "hidegrades" }, function (response) {
                    //document.getElementById("thattextthing").innerHTML = response.farewell;
                });
            })
            
        } 
        if (document.getElementById('hidegradeswitch').checked == false) {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { greeting: "unhidegrades" }, function (response) {
                    //document.getElementById("thattextthing").innerHTML = response.farewell;
                });
            })
        }
    }
    
    document.getElementById('slidertheme').onclick=function() {
        // If the checkbox is checked, display the output text
        if (document.getElementById('slidertheme').checked == true) {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { greeting: "dark" }, function (response) {
                    //document.getElementById("thattextthing").innerHTML = response.farewell;
                });
            })
            chrome.storage.sync.set({dark: "true"}, function() {});
            
        } 
        if (document.getElementById('slidertheme').checked == false) {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { greeting: "undark" }, function (response) {
                    //document.getElementById("thattextthing").innerHTML = response.farewell;
                });
            })
            chrome.storage.sync.set({dark: "false"}, function() {});
        }
    }
    /*
    ('change', darkmodec);
    function darkmodec() {
        
        this.checked ^= 1;

       alert(this.value);
       chrome.storage.sync.get(['key'], function(result) {
            console.log('Value currently is ' + result.key);
        });
    }*/
    
    document.forms['form1'].onsubmit = function () {
        var user_id = document.getElementById("user-id").value;
        let link = "https://portal.kristin.school.nz/commportal/stures.aspx?sn=" + user_id;
        document.forms['form1'].remove();
        document.querySelectorAll('.formbox').forEach(boxab => {
            boxab.remove();
        });
        document.getElementById('calcformbox').remove();
        document.getElementById('thattextthing').classList.remove('hidden');
        document.getElementById('thattextthing').classList.remove('errorr');
        document.getElementById('thattextthing').classList.add('thatlinkk');
        document.getElementById('thattextthing').style.color="5ea4bf";
        document.getElementById('thattextthing').innerHTML = "<br><a target='_blank' href=" + link + ">" + link + "</a> <br> <br> Click on the link above.";
    }

    document.forms['form2'].onsubmit = function () {
        document.getElementById('calcformbox').remove();
        get_grades();
    }

    document.forms['form5'].onsubmit = function () {
        document.getElementById('calcformbox').remove();
        document.getElementById('form6').classList.remove("hidden");
        document.querySelectorAll('.formbox').forEach(boxab => {
            boxab.remove();
        });
        document.getElementById('vol').addEventListener("change", function() { 
            document.getElementById('volval').innerHTML=document.getElementById('vol').value;
        });
        document.forms['form6'].onsubmit = function () {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { greeting: ["add-grade", document.getElementById('vol').value, document.getElementById('gradename').value]}, function (response) {
                    //document.getElementById("thattextthing").innerHTML = response.farewell;
                });
            })
            if (document.getElementById('slidertheme').checked == true) {
                chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, { greeting: "dark" }, function (response) {
                        //document.getElementById("thattextthing").innerHTML = response.farewell;
                    });
                })
                chrome.storage.sync.set({dark: "true"}, function() {});
                
            } else {
                chrome.storage.sync.set({dark: "false"}, function() {});
            }
        }
    }



    document.forms['form3'].onsubmit = function () {
        document.getElementById('calcformbox').classList.add('hidden');
        document.querySelectorAll('.formbox').forEach(boxab => {
            boxab.remove();
        });
        document.getElementById('form4').classList.remove('hidden');
        document.getElementById('thattextthing').classList.remove('hidden');
        document.getElementById('thattextthing').classList.remove('errorr');
        document.getElementById('thattextthing').style.fontSize="12";
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { greeting: "class-names" }, function (response) {
                console.log(response.farewell);
                document.getElementById('thattextthing').innerHTML = "<strong>Please select on one or more subject(s) below, then press the 'select'button.</strong><br>";
                document.getElementById('thattextthing').style.color='#5ea4bf';
                var checkboxstr="";
                if (response.farewell[1].length==0 || response.farewell[1].length===null || response.farewell[1].length==undefined) {
                    document.getElementById('thattextthing').innerHTML = "<strong style='color: red'>ERROR: under some circumstances you can only use 'specify subjects' when adding your user ID and pressing 'find page'. Please reload the extension, enter your user-id and press 'find page' to use this method for full functionality.<br>";
                } else {
                    document.getElementById('thattextthing').innerHTML = "<strong>Please select on one or more subject(s) below, then press the 'select'button.</strong><br>";
                    document.getElementById('thattextthing').style.color='#5ea4bf';
                }
                
                console.log(response.farewell[1]);
                for (let i = 0; i < response.farewell[1].length; i++) {
                    //var thisvalueloop=(i+1)+'checkb'
                    var thisvalueloop=i+"classextension";
                    checkboxstr=checkboxstr+"<input type='checkbox' class='checkboxksclass' id='" + thisvalueloop + "'" + " value='" + thisvalueloop + "''><label for='"+thisvalueloop+"id'>"+response.farewell[1][i]+"</label><br>";
                }
                document.getElementById('classcheck').innerHTML=checkboxstr+"<br>";
                document.forms['form4'].onsubmit = function () {
                    document.forms['form4'].remove();
                    document.getElementById('calcformbox').classList.remove('hidden');
                    var checkedValueSO=[];
                    var inputElements = document.getElementsByClassName('checkboxksclass');
                    for (var i=0; i < inputElements.length; i++) {
                        if (inputElements[i].checked==false) {
                            checkedValueSO.push(inputElements[i].value);                           
                        }
                    }
                    if (checkedValueSO.length==response.farewell[1].length) {
                        document.getElementById('calcformbox').remove();
                        document.getElementById('thattextthing').innerHTML = "<strong style='font-size:18'>Error</strong>"
                        document.getElementById('classcheck').innerHTML = "<strong style='font-size:18'>Please select at least one class. Refresh your page first.</strong>"
                    }
                    else {
                        console.log(response.farewell[2]);
                        console.log(checkedValueSO);
                        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                            chrome.tabs.sendMessage(tabs[0].id, { greeting: ["checkboxvaluedata", checkedValueSO]}, function (response) {
                            });
                        });
                        document.getElementById('thattextthing').classList.remove('errorr');
                        document.getElementById('thattextthing').style.color='#5ea4bf';
                        document.getElementById('thattextthing').innerHTML = "Successfully removed " + checkedValueSO.length +" unwanted subjects"
                        document.getElementById('classcheck').classList.add('hidden');
                    }
                    //console.log(checkedValueSO)
                    /*for (var i=0; i < checkedValueSO.length; i++) {                        
                        checkedValueSO.push(inputElements[i].value);                           
                    }*/
                    /*console.log(response.farewell[1]);
                    console.log(response.farewell[0]);*/
                    
                }
                /*for (let i = 0; i < response.farewell[1].length; i++) {
                    var checkbox = document.createElement('input');
                    checkbox.type = "checkbox";
                    checkbox.name = "name";
                    checkbox.value = "value";
                    checkbox.id = "id";
                    var checklabel = document.createElement('label');
                    checklabel.htmlFor = "id";
                    checklabel.appendChild(document.createTextNode(response.farewell[1][i]));
                    document.getElementById('classcheck').appendChild(checkbox);
                    document.getElementById('classcheck').appendChild(checklabel);
                }*/
                //document.getElementById('thattextthing').innerHTML = "<strong>Please click on a class below</strong><br>" + response.farewell[0];
            });
        });
    }

    var mode = a => {
        a = a.slice().sort((x, y) => x - y);

        var bestStreak = 1;
        var bestElem = a[0];
        var currentStreak = 1;
        var currentElem = a[0];

        for (let i = 1; i < a.length; i++) {
            if (a[i - 1] !== a[i]) {
                if (currentStreak > bestStreak) {
                    bestStreak = currentStreak;
                    bestElem = currentElem;
                }
                currentStreak = 0;
                currentElem = a[i];
            }
            currentStreak++;
        }

        return currentStreak > bestStreak ? currentElem : bestElem;
    };



    function get_grades() {
        document.querySelectorAll('.formbox').forEach(boxab => {
            boxab.remove();
        });
        document.getElementById('thattextthing').classList.remove('hidden');
        document.getElementById('thattextthing').classList.remove('errorr');

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { greeting: "get-data-pls" }, function (response) {
                document.getElementById("thattextthing").innerHTML = response.farewell;
                document.getElementById("thattextthing").style.color="#5ea4bf";
            });
        });
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { sgreeting: "hist" }, function (response) {
                var narrOfNum = response.sfarewell;
                //var uniquelistval = narrOfNum.filter((vun, iun, aun) => aun.indexOf(vun) === iun);
                // unique is ['a', 1, 2, '1']  
                /*var Nmax = narrOfNum[narrOfNum.length - 1];
                for (var imin = narrOfNum[0]; imin <= Nmax; imin++) {
                    thislistthing.push(imin);
                }
                alert(thislistthing);*/

                document.body.style.width = "625px"
                document.getElementById("histogram").classList.remove("hidden");
                document.getElementById("histogram").classList.remove("hidehis");
                document.getElementById("chartbox").classList.remove("hidden");
                document.getElementById("chartbox").classList.remove("hidehis");
                //document.getElementById('histogram').getContext('2d').canvas.width = 100;
                //document.getElementById('histogram').getContext('2d').canvas.height = 100;

                var uniquearr = narrOfNum.filter((v, i, a) => a.indexOf(v) === i);
                let freqval = [];
                for (let index = 0; index < uniquearr.length; index++) {
                    freqval.push(narrOfNum.filter(x => x === uniquearr[index]).length)
                }
                console.log(freqval);

                const ctx = document.getElementById('histogram').getContext('2d');

                const chart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        //labels: [1, 2, 3, 4, 5, 6, 7, 8],
                        labels: uniquearr,
                        datasets: [{
                            label: 'Amount of MYP Grade',
                            data: freqval,
                            //data: [19, 28, 20, 16, 1, 1],
                            backgroundColor: ['rgba(0,128,0,0.65)', 'rgba(0,128,0,0.65)', 'rgba(0,128,0,0.65)', 'rgba(0,128,0,0.65)', 'rgba(0,128,0,0.65)', 'rgba(0,128,0,0.65)', 'rgba(0,128,0,0.65)', 'rgba(0,128,0,0.65)'],
                            borderColor: ['rgb(0,100,0)', 'rgb(0,100,0)', 'rgb(0,100,0)', 'rgb(0,100,0)', 'rgb(0,100,0)', 'rgb(0,100,0)', 'rgb(0,100,0)', 'rgb(0,100,0)'],

                            borderWidth: 1,
                            barPercentage: 0.8,
                            categoryPercentage: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        scales: {

                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });

            });
        });

    }
});