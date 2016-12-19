function hello() {
  chrome.tabs.executeScript({
    file: 'jquery.min.js'
  }); 
  chrome.tabs.executeScript({
    file: '../Database/databaseFunctions.js'
  }); 
  chrome.tabs.executeScript({
    file: 'alert.js'
  }); 
}

document.getElementById('clickme').addEventListener('click', hello);
