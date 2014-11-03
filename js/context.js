var contextMenuItem = chrome.contextMenus.create( {
    "title": 'Job Seeker Companion', 
    "contexts": [ "selection" ],
    "onclick": onMenuClick
} );


function onMenuClick( info, tab ) {
    console.log( "selection: " + info.selectionText );
    chrome.windows.create( {
        url: 'html/popup.html?q=' + info.selectionText,
        width: 600,
        height: 800,
        type: 'popup'        
    } );
}