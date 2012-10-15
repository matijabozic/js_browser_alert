window.onload = function() {
	
	// Define messages
	var headerText = "Your browser is no longer supported.";
	var infoText = "Please update to a modern browser.";
	
	// Define browser URL-s
	var ChromeURL   = "http://www.google.com/chrome";
	var FirefoxURL  = "http://www.firefox.com";
	var OperaURL    = "http://www.opera.com/";
	var SafariURL   = "http://www.apple.com/safari/";
	var ExplorerURL = "http://www.microsoft.com/nz/windows/internet-explorer/default.aspx";
	
	// Define browser text, text under browser images
	var ChromeText   = "Google Chrome";
	var FirefoxText  = "Mozzila Firefox";
	var OperaText    = "Opera";
	var SafariText   = "Safari";
	var ExplorerText = "Internet Explorer";

	// Define buttons text
	var hideText = "Hide";
	var closeText = "Don't notify";
	
	/**
	 *-------------------------------------------------------------------------
	 * DO NOT EDIT BELOW THIS LINE!
	 * ------------------------------------------------------------------------ 
	 */ 
	
	// Detect browser
	var userAgent = navigator.userAgent.toLowerCase();
	var browser = "";
	
	// Internet Explorer 7
	if (userAgent.indexOf('msie 7.0b') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 7.0') !== -1) { browser = "old"; }

	// Internet Explorer 6
	else if (userAgent.indexOf('msie 6.1') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 6.01') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 6.0b') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 6.0') !== -1) { browser = "old"; }
	
	// Internet Explorer 5
	else if (userAgent.indexOf('msie 5.5b1') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 5.50') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 5.23') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 5.22') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 5.21') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 5.2') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 5.17') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 5.16') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 5.15') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 5.14') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 5.13') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 5.12') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 5.05') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 5.01') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 5.0b1') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 5.0') !== -1) { browser = "old"; }
		
	// Internet Explorer 4
	else if (userAgent.indexOf('msie 4.5') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 4.01') !== -1) { browser = "old"; }
	else if (userAgent.indexOf('msie 4.0') !== -1) { browser = "old"; }
	
	// If browser is old, show notification, but first check cookie value
	
	if (browser === "old") {
		
		var cookieName = "BrowserAlert";
		var cookieValue = "";
		var cookieAll = document.cookie;
		var cookieArray = cookieAll.split(';');
		for (n=0; n<cookieArray.length; n++) {
			var cookie = cookieArray[n];
				if (cookie.indexOf(cookieName) !== -1) {
				var cookieNameEnd = cookie.indexOf("=") + 1;
				cookieValue = cookie.substring(cookieNameEnd);
			}
		}
		
		if (cookieValue !== "dontShow") {
		
			// Head and Body tags
			
			var body = document.getElementsByTagName('body')[0];
			var head = document.getElementsByTagName('head')[0];
		
			/**
			 * Uncoment this code to add CSS dynamically,
			 * note: browser-alert.css is relative to html file where this 
			 * script is included, it is not relative to this script! 
			 */
			
			/*
			var css = document.createElement('link');
			css.setAttribute('rel', 'stylesheet');
			css.setAttribute('type', 'text/css');
			css.setAttribute('href', 'browser-alert.css');
			HTMLhead.appendChild(css);
			*/
			
			// Build Browser Alert
			
			var browserAlertHolder = document.createElement('div');
			browserAlertHolder.setAttribute('id', 'browser-alert');
			body.appendChild(browserAlertHolder);
			
			var browserAlertHeader = document.createElement('h1');
			browserAlertHeader.setAttribute('id', 'browser-alert-header');
			browserAlertHolder.appendChild(browserAlertHeader);
			
			var browserAlertHeaderText = document.createTextNode(headerText);
			browserAlertHeader.appendChild(browserAlertHeaderText);

			var browserAlertInfo = document.createElement('p');
			browserAlertInfo.setAttribute('id', 'browser-alert-info');
			browserAlertHolder.appendChild(browserAlertInfo);
			
			var browserAlertInfoText = document.createTextNode(infoText);
			browserAlertInfo.appendChild(browserAlertInfoText);
			
			var browserChrome = document.createElement('a');
			browserChrome.setAttribute('id', 'browser-chrome');
			browserChrome.setAttribute('href', ChromeURL);
			browserChrome.setAttribute('target', '_blank');
			browserAlertHolder.appendChild(browserChrome);
			var browserChromeText = document.createTextNode(ChromeText);
			browserChrome.appendChild(browserChromeText);
			
			var browserFirefox = document.createElement('a');
			browserFirefox.setAttribute('id', 'browser-firefox');
			browserFirefox.setAttribute('href', FirefoxURL);
			browserFirefox.setAttribute('target', '_blank');
			browserAlertHolder.appendChild(browserFirefox);
			var browserFirefoxText = document.createTextNode(FirefoxText);
			browserFirefox.appendChild(browserFirefoxText);
			
			var browserOpera = document.createElement('a');
			browserOpera.setAttribute('id', 'browser-opera');
			browserOpera.setAttribute('href', OperaURL);
			browserOpera.setAttribute('target', '_blank');
			browserAlertHolder.appendChild(browserOpera);
			var browserOperaText = document.createTextNode(OperaText);
			browserOpera.appendChild(browserOperaText);
			
			var browserSafari = document.createElement('a');
			browserSafari.setAttribute('id', 'browser-safari');
			browserSafari.setAttribute('href', SafariURL);
			browserSafari.setAttribute('target', '_blank');
			browserAlertHolder.appendChild(browserSafari);
			var browserSafariText = document.createTextNode(SafariText);
			browserSafari.appendChild(browserSafariText);
			
			var browserExplorer = document.createElement('a');
			browserExplorer.setAttribute('id', 'browser-explorer');
			browserExplorer.setAttribute('href', ExplorerURL);
			browserExplorer.setAttribute('target', '_blank');
			browserAlertHolder.appendChild(browserExplorer);
			var browserExplorerText = document.createTextNode(ExplorerText);
			browserExplorer.appendChild(browserExplorerText);
					
			var hideBrowserAlert = document.createElement('a');
			hideBrowserAlert.setAttribute('id', 'hide-browser-alert');
			hideBrowserAlert.setAttribute('href', '');
			browserAlertHolder.appendChild(hideBrowserAlert);
			var hideBrowserAlertText = document.createTextNode(hideText);
			hideBrowserAlert.appendChild(hideBrowserAlertText);

			var closeBrowserAlert = document.createElement('a');
			closeBrowserAlert.setAttribute('id', 'close-browser-alert');
			closeBrowserAlert.setAttribute('href', '');
			browserAlertHolder.appendChild(closeBrowserAlert);
			var closeBrowserAlertText = document.createTextNode(closeText);
			closeBrowserAlert.appendChild(closeBrowserAlertText);
					
			/* Browser Alert Overlay, now this is a tough one. Overlay screen 
			 * should have position: fixed; But IE6 treates fixed as static. 
			 * And height: 100%; is not working correctly in IE6 too. 
			 * So this is what I did, I define page-height in JavaScript, 
			 * using offsetHeight property, everyting else is styled through 
			 * CSS. And overlay has position: absolute, not fixed so it works 
			 * in IE6.
			 * 
			 * Note1: innerHeight returns element height + padding without 
			 * margin! But in IE6 and IE7 it returns height + margin + padding, 
			 * If you need to use this alert on other browsers use offsetHeight 
			 * and add margins!
			 * 
			 * Note2: document.documentElement.clientHeight; returns IE6 window 
			 * Height :S
			 */
			
			// Calculate pageHeight
			
			var pageHeight = document.documentElement.clientHeight + "px";
			
			var browserAlertOverlay = document.createElement('div');
			browserAlertOverlay.setAttribute('id', 'browser-alert-overlay');
			browserAlertOverlay.style.height = pageHeight;
			body.appendChild(browserAlertOverlay);
					
			/* Function to hide Browser Alert */
			
			hideBrowserAlert.onclick = function() {			
				body.removeChild(browserAlertHolder);
				body.removeChild(browserAlertOverlay);			
				return false;		
			};
			
			// Function to close Browser Alert and set cookie so it wont start again
			
			closeBrowserAlert.onclick = function() {
				var date = new Date();
				var milisecunds = date.getTime();
				var future = milisecunds + (1000 * 60 * 60 * 24 * 30);
				var exp = new Date(future);
				exp = exp.toGMTString();
				document.cookie = "BrowserAlert=dontShow; expires=" + exp;
				body.removeChild(browserAlertHolder);
				body.removeChild(browserAlertOverlay);
				return false;
			};
		
		}
		
	}
	
};