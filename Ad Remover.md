# Ad Remover

## Instructions

1. If your bookmark bar is already activated, skip this step. Otherwise, press `Ctrl+Shift+B`.

2. Copy this text below:
```js
javascript:void(function(){setInterval(function(){document.querySelectorAll('iframe').forEach(function(element){element.parentNode.removeChild(element)})},50)}());
```

3. Right click on the bookmark bar and click `Add Page`.

4. Type the name you want for the bookmark into the Name box. I'd recommend naming it `Ad Remover`.

5. Paste the text into the URL text bar.

6. Below the URL section, click `Main Bookmarks`.

7. Press Done.

## Tip

You **MUST** click the bookmark on the page you want the ads to be blocked on, otherwise it won't work.

## Note

You might see some ads pop up and disappear, but that's normal.
