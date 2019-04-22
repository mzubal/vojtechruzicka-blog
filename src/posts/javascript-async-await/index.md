---
title: 'Javascript async await tutorial'
date: "2019-03-31T22:12:03.284Z"
tags: ["Javascript"]
path: '/javascript-async-await'
featuredImage: './async-await.jpg'
disqusArticleIdentifier: '99021 http://vojtechruzicka.com/?p=99021'
excerpt: 'Async await allows you to work with asynchronous code in cleaner and more convenient way.'
---

![Async Await](async-await.jpg)

## Promises
This article builds on the understanding of the concept of promises in Javascript. If you are not familiar with them or need a quick recap, check the following article.

<div class="linked-post"><h4 class="front-post-title" style="margin-bottom: 0.375rem;"><a href="/javascript-promises/" style="box-shadow: none;">Javascript promises tutorial</a></h4><small class="front-post-info"><span class="front-post-info-date">28 March, 2019</span><div class="post-tags"><ul><li><a href="/tags/javascript/">#Javascript</a></li></ul></div></small><div><a class="front-post-image" href="/javascript-promises/"><div class=" gatsby-image-wrapper" style="position: relative; overflow: hidden;"><div style="width: 100%; padding-bottom: 51.7778%;"></div><img src="data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAAB0XiYUugKf//EABsQAAEEAwAAAAAAAAAAAAAAAAECAxExEBIy/9oACAEBAAEFAnFSNpwq2+BX/8QAFxEBAAMAAAAAAAAAAAAAAAAAAgEQEf/aAAgBAwEBPwFHIr//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAVEAEBAAAAAAAAAAAAAAAAAAAQAv/aAAgBAQAGPwJp/8QAGRABAAMBAQAAAAAAAAAAAAAAAQAhMRFh/9oACAEBAAE/IWQNgrDTvkMlOcFJhP/aAAwDAQACAAMAAAAQ1z//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPxAI/wD/xAAXEQEBAQEAAAAAAAAAAAAAAAABACEx/9oACAECAQE/EOMaX//EABsQAAIDAQEBAAAAAAAAAAAAAAERACFRcaHx/9oACAEBAAE/EAptKWsQzQACGvsKvJllnYByDQnkn//Z" alt="" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 0; transition: opacity 0.5s ease 0.5s;"><picture><img sizes="(max-width: 180px) 100vw, 180px" srcset="/static/41b7d2f444ff1186ea1466774eb16dc8/da188/promise.jpg 45w,
/static/41b7d2f444ff1186ea1466774eb16dc8/c296b/promise.jpg 90w,
/static/41b7d2f444ff1186ea1466774eb16dc8/02806/promise.jpg 180w,
/static/41b7d2f444ff1186ea1466774eb16dc8/f5a53/promise.jpg 270w,
/static/41b7d2f444ff1186ea1466774eb16dc8/dc9ca/promise.jpg 360w,
/static/41b7d2f444ff1186ea1466774eb16dc8/a1e3d/promise.jpg 540w,
/static/41b7d2f444ff1186ea1466774eb16dc8/accd0/promise.jpg 900w" src="/static/41b7d2f444ff1186ea1466774eb16dc8/02806/promise.jpg" alt="" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center center; opacity: 1; transition: opacity 0.5s ease 0s;"></picture><noscript><picture><img sizes="(max-width: 180px) 100vw, 180px" srcset="/static/41b7d2f444ff1186ea1466774eb16dc8/da188/promise.jpg 45w,
/static/41b7d2f444ff1186ea1466774eb16dc8/c296b/promise.jpg 90w,
/static/41b7d2f444ff1186ea1466774eb16dc8/02806/promise.jpg 180w,
/static/41b7d2f444ff1186ea1466774eb16dc8/f5a53/promise.jpg 270w,
/static/41b7d2f444ff1186ea1466774eb16dc8/dc9ca/promise.jpg 360w,
/static/41b7d2f444ff1186ea1466774eb16dc8/a1e3d/promise.jpg 540w,
/static/41b7d2f444ff1186ea1466774eb16dc8/accd0/promise.jpg 900w" src="/static/41b7d2f444ff1186ea1466774eb16dc8/02806/promise.jpg" alt="" style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:0.5s;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture></noscript></div></a><span class="front-post-excerpt">Promises are a useful, modern technique in javascript to handle async behavior and a good alternative to callbacks.</span></div></div>

## Async
Let's assume we have a simple function returning some value

```javascript
function foo() {
    return 42;
}
```

Changing it to `async` function is pretty simple. You just add `async` at the beginning like this:

```javascript
async function foo() {
    return 42;
}
```

Pretty easy right? What did actually change though?

The async function now returns a promise. Instead of returning just 42 as in the previous example, it returns `Promise { 42 }`, which is fulfilled.

```javascript
async function foo() {
    return 42;
}

foo().then(result => {
    console.log(result); //42
})
```

In case that there is an unhandled error in the `async` function, it returns rejected promise with that error. You can handle it as usual with `catch()` clause.

```javascript
async function foo() {
    throw new Error("Oh dear! It's broken!");
}

foo().then(result => {
    console.log(result); // This is not called because of the error
}).catch(error => {
    console.log(error); // Error: Oh dear! It's broken!
});
```

### Async in arrow functions and class methods
Even though our example was on regular `function()`, you can, of course, use the same concept for arrow functions:

```javascript
const foo = async (bar) => {
  ...
}
```

It works even for class methods:

```javascript
class Foo {
  async bar() {
    ...
  }
}
```

## Await
Await syntax is simple you just put `await` before your promise:

```javascript
await myPromise;
```

What it does is that it waits for the promise to resolve and if successful it returns the value. The execution of the program does not continue to the next line until the promise is settled.

```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Completed"), 1000)
});

async function foo() {
    const result = await myPromise; // Wait here until the promise settles
}
```

As I already mentioned, you can use `await` only in a function which is marked as `async`. Otherwise, you get an error:

```
SyntaxError: await is only valid in async function
```

One implication of this is that you cannot use `await` in the top-level code.

## Multiple calls
Of course, the example above is rather simple. Where `await` really shines is multiple subsequent async calls, where each call depends on the value returned by the previous one.

```javascript
const first = await firstCall();
const second = await secondCall(first);
const third = await  thidrCall(second);
```

It is a concise, easy to read way to represent multiple async calls. With promises, it would be not so nice chain of `then()` clauses, which is not so nice. Of course, still much better than chained callbacks.

## Error handling
When working with promises, you can provide `then()` clause, which handles the case where the promise is fulfilled successfully and `catch()` clause to handle any errors when the promise is rejected. There is even `finally()` clause which executes no matter whether the promise was fulfilled or rejected.

```javascript
foo()
.then(successFunction)
.catch(failureFunction)
.finally(doThisNoMatterWhatFunction);
```

How can you do the same with `await` though? It just covers the case of `then()` where the promise is fulfilled. How do you do error handling and possibly `finally()` functionality?

The good news is that you can use the good old `try-catch-finally`:

```javascript
async function foo() {
    try {
        const result = await myPromise;
    } catch (error) {
        // Error handling
    } finally {
        // After try/catch is done,
        // do this whether there was error or not
    }
}
```

That means - `try` block executes first. When there is an error, the execution of `try` block terminates and it jumps to the `catch` block. No matter whether there was an error or not, in the end, the `finally` block executes.

Traditional `try-catch-finally` has some advantages over chained promises with `then()-catch()-finally()`.

It is arguably easier to read. More importantly, it is a plain old traditional JavaScript construct, which everybody knows. You no longer need to use one error handling concept for promises and a different one for non-promise code. Your error handling is unified and cleaner.  In one `try` block you can have mixed async and non-async code.

## Waiting for multiple parallel promises
Sometimes instead of resolving async functions one after another, it is useful to execute them in parallel and await until all of them are finished.

With promises, you can use `Promise.all()`. As input, you provide an array of promises. It returns a single promise, which resolves once all the passed in promises are fulfilled.

```javascript
Promise.all([promise1, promise2, promise3]).then(doSomething);
```

Since `Promise.all()` returns a promise, you can still use `await` instead of then:

```javascript
const results = await Promise.all([promise1, promise2, promise3]);
```

## Compatibility
The async-await functionality is well supported in all the major modern browsers. Of course, you'll be in trouble with Internet Explorer. It does not support async await at all, but you [can work around this](https://medium.com/@zwacky/add-es7-async-await-support-into-your-non-bleeding-edge-build-process-ad0dded0d002).

![Async compatibility](async-compatibility.png)

## Conclusion
Async-await offers an easy way to write asynchronous code as if it was synchronous. It is easier to read and write.

Await can be used before an asynchronous call returning a promise. The execution of the function will wait until the call is resolved and only then continue to the next line. 

Since `await` replaces `then().catch()` chains, you cannot use the same error handling like with promises. Instead, you should use the good old `try-catch-finally`.

`Await` can be only used in functions marked as `async`. Marking function as `async` makes it also return a promise. This is done automatically for you, so you don't need to return a promise explicitly.