# Vue.js
Vue.js is a JavaScript framework for building user interfaces that is designed to be easy to use, flexible, and integrate with other libraries or projects. It uses a virtual DOM for efficient updates and rendering of UIs and is based on the MVVM architecture pattern. Vue.js is popular due to its simplicity, performance, and growing ecosystem of plugins and libraries.

# Working with vue js.

We can work with Vue.Js by simply including following cdn link to our index.html file.  
```
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

Now, create a div tag in index.html file with id 'app' and a span tag to render data from vue objects.
```
<div id="app"> 
    <span>{{message}}</span>
</div>
```

Inside js file, create a Vue app and provide control over id 'app' like following.

```js 
    const app = Vue.createApp({
        // this always return objects.
        data(){
            return{
                message:"Hello world"
                
            }
        }
    });

    app.mount('#app')
```
