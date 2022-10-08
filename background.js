/*chrome.scripting.executeScript({
    target: {tabId: id, allFrames: true},
    files: ['content_scripts/cscript.js'],
});
*/
let uName = "__(UNDEFEINED--USER-NAME)__";
/*chrome.scripting.executeScript({
    target: { tabId: id, allFrames: true },
    files: ['content_scripts/script.js'],
});

chrome.browserAction.onClicked.addListener(function () {
    var information = '12345';
    chrome.tabs.executeScript(null, {code: "alert('aaaaa'); let arr = []; const grade_list = document.getElementsByClassName('res_grd_cell'); for (let index = 0; index < grade_list.length; index++) {const element = grade_list[index]; arr.push(element.innerHTML);}"});
    chrome.tabs.executeScript(null, {file: 'script.js'});
});*/
/*
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ uName });
    console.log('Inital name set to: ${name}');
});
*/
/*
chrome.tabs.onActivated.addListener((tab) => {

    console.log(tab)
*/
    /*chrome.tabs.get(tab.tabId, (CurrentTabData) => {

        if (CurrentTabData.url === "https://portal.kristin.school.nz/commportal/stures.aspx?sn=47135") {

            chrome.scripting.executeScript({
                target: { tabId: CurrentTabData.id },
                files: ['contentScript.js']
            });

            setTimeout(() => {
                chrome.tabs.sendMessage(
                    tab.tabId,
                    "hey I have injected you tab: " + tab.tabId,
                    (response) => {
                        console.log(response)
                    }
                )
            }, 2000)
        }
    })
})*/