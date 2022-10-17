window.resizeBy(1000, 1000);

document.addEventListener("DOMContentLoaded", () => {

    document.forms['form1'].onsubmit = function () {
        var user_id = document.getElementById("user-id").value;
        let link = "https://portal.kristin.school.nz/commportal/stures.aspx?sn=" + user_id;
        document.forms['form1'].remove();
        document.getElementById('form').remove();
        document.getElementById('thattextthing').classList.remove('hidden');
        document.getElementById('thattextthing').classList.remove('errorr');
        document.getElementById('thattextthing').classList.add('thatlinkk');
        document.getElementById('thattextthing').innerHTML = "<br><a target='_blank' href=" + link + ">" + link + "</a> <br> <br> Click on the link above.";
    }

    document.forms['form2'].onsubmit = function () {
        get_grades();
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
        document.getElementById('form').remove();
        document.getElementById('thattextthing').classList.remove('hidden');
        document.getElementById('thattextthing').classList.remove('errorr');

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            console.log('happening');
            chrome.tabs.sendMessage(tabs[0].id, { greeting: "get-data-pls" }, function (response) {
                document.getElementById("thattextthing").innerHTML = response.farewell;
            });
        });
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { sgreeting: "hist" }, function (response) {
                var narrOfNum = response.sfarewell;
                var thislistthing = [];
                var Nmax = narrOfNum[narrOfNum.length - 1];
                for (var imin = narrOfNum[0]; imin <= Nmax; imin++) {
                    thislistthing.push(imin);
                }

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
                        labels: thislistthing,
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