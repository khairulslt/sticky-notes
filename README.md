# Sticky Notes Application



## Getting Started

* (with Git installed): git clone https://github.com/khairulslt/sticky-notes.git
* (Git/SSH): git clone git@github.com:khairulslt/sticky-notes.git
* (without Git): click the "Clone or Download" green button at the top-right hand corner > Download Zip

### Prerequisites

* Any modern browser
* Testing was done on MacOS (MacBook Pro) with Google Chrome

### How to Run

* Find and double-click the folder you git cloned/zip-downloaded 
* Double-click index.html

### Built With

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) - Standard HTML
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) - Standard CSS
* [JavaScript](https://www.javascript.com/) - Vanilla JavaScript

### Authors

* [Khairul Abdullah](https://khairulslt.me)

## Remarks

* Spartan and minimal user interface, would love to come back and work on it again in the future
* First thing that comes to mind is to add an auto-save function (like how Microsoft Word auto-saves every few seconds)
* Auto-save would be a great feature for added User Experience
* Used Flexbox instead of Grid since less likely to have cross-browser implications
* Save function interaction with local-storage is not bug-free, could not fix it within the stipulated time of 90 minutes
* Bug was caused by localStorage.removeItem - does not remove key if value associated with key is null
* Need to think of possible workarounds or a better way to fetch localStorage on page load

