//   
function Replace_0(details) {    
    return {redirectUrl: details.url.replace('imgur.com','0imgur.com')};
}

chrome.webRequest.onBeforeRequest.addListener(Replace_0,
    {
        urls: [
            "*://*.imgur.com/*"                
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);