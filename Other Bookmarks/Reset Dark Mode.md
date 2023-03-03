# Reset Dark Mode

## Instructions

1. If your bookmark bar is already activated, skip this step. Otherwise, press `Ctrl+Shift+B`.

2. Copy this text below:
```js
javascript:try{if(darkMode){clearInterval(darkMode);document.querySelectorAll('*').forEach(function(element){element.style.backgroundColor = "";element.style.color="";element.style.borderColor = ""})}}catch(e){alert(e)}
```

3. Right click on the bookmark bar and click `Add Page`.

4. Type the name you want for the bookmark into the Name box. I'd recommend naming it `Reset Dark Mode`.

5. Paste the text into the URL text bar.

6. Below the URL section, click `Main Bookmarks`.

7. Press Done.

## Tip

You **MUST** click the bookmark on the page you want the code to run on, otherwise it won't work.

## Note

For this to work, you **MUST** have already activated the Dark Mode Bookmark, otherwise it won't work.
