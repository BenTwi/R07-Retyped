# Retyped - A RedCrafter07 Library Remaster
## Javascript library for typing animations.

**IMPORTANT:** This library is a fork of [RedCrafter07's](https://github.com/RedCrafter07/) [typing library](https://github.com/RedCrafter07/typing/). Please go ahead and give him some love

## Including the library
You have to include the library at the bottom of your html file ABOVE your code (Typing needs to load first; Then your script).

```html
    <!-- Include Scripts -->
    <script src="https://rawcdn.rawgit.net/BenTwi/R07-Retyped/refs/heads/main/typing.js"></script>
    <!-- Now your awesome script -->
    <script>
      
    </script>
```

## Syntax
Typing
```js
typing.type(text, time, selector, typingBar, () => {
  console.log("Callback!");
});
```

Deleting
```js
typing.delete(time, selector, typingBar, () => {
  console.log("Callback!");
});
```

Instance Creation
```js
const someTypingInstance = typing.create(selector);
someTypingInstance.<type|delete>
// Creation and Deletion parameters stay the same. Refference the syntax above
```

## Small Notice
If you use this library, [RedCrafter07](https://github.com/RedCrafter07/) would appreciate a little shoutout :)

[BenTwi.app](https://bentwi.app/) only requires you to shoutout him. We're just here to improve existing stuff we use & love ourselves.
