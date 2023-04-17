# Vue.js
Vue.js is a JavaScript framework for building user interfaces that is designed to be easy to use, flexible, and integrate with other libraries or projects. It uses a virtual DOM for efficient updates and rendering of UIs and is based on the MVVM architecture pattern. Vue.js is popular due to its simplicity, performance, and growing ecosystem of plugins and libraries.

# Working with vue js.

We can work with Vue.Js by simply including following cdn link to our index.html file.  
```
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

Now, create a div tag in index.html file with id 'app' and a span tag to render data from vue objects.
```html
<div id="app"> 
    <span>{{message}}</span>
</div>
```

Inside js file, create a Vue app and provide control over id 'app' like following.

```js 
    const app = Vue.createApp({
        data(){
            // this always return objects.
            return{
                message:"Hello world"
                
            }
        }
    });

    app.mount('#app')
```
## So what data does?

``` data() ``` is a function returns an initial reactive state for a component instance. The function should return a plain JavaScript object, which will become reactive when used in Vue.

## What is function in vue?

In Vue, a method is a function that belongs to every instance of Vue and is created using the methods property. These methods can be utilized to execute specific actions in response to user interactions such as clicking a button or inputting data in a text field.

```js
// Syntax
    data(){
        return{
            x:0
        }
    }
    methods:{
        add(){
            this.x+=1;
        }
    }

```

To use this method in, we simply add event binding in html elements as an attribute.
```html
    <button v-on:click="add">Add</button>
    <span>{{x}}</span>
```
## Some other bindings in Vue
1. ```v-on:click``` - ```v-on:click``` is an event binding directive used to attach a click event listener to an HTML element, such as a button, and execute a method or expression when the element is clicked. The v-on directive is followed by a colon and the name of the event to listen for, which in this case is click.

```html
<button v-on:click="add">Add</Button>
<!-- Or this is similar to this -->

<button @click="add">Add</Button>
```
2. ```v-once``` - The v-once directive in Vue instructs the framework to render an element or component only once, and then mark it as static, so it does not need to be re-rendered every time the component updates. This feature is beneficial when you have content that is static and doesn't require frequent updates, resulting in a performance improvement.

```html
<span v-once>Initial value is : {{x}}</span>

<!-- This will execute only once. -->
```

3. ```v-on:input``` - v-on:input is an event binding directive used to listen for input events on an HTML element, such as a text input or textarea, and execute a method or expression when the input value changes.

```html
<!-- Syntax -->

 <input type="text" v-on:input="setName">

 <!-- setName method is defined inside methods. -->
```

4.``` v-on:submit and v-on:submit.prevent ``` - v-on:submit is an event binding directive used to listen for submit events on a form element and execute a method or expression when the form is submitted. <br><br>
v-on:submit.prevent is an event modifier that prevents the default form submission behavior and executes a method or expression when the form is submitted. This prevent from refreshing html page each time it is submitted. 

```html
<form v-on:submit.prevent="submitForm">
    <input type = "text">
    <button>Submit</button>
</form>
```
