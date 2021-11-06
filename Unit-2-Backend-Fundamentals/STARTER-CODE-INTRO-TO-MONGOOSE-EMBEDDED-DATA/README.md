# Intro to Mongoose Embedded Data Lesson Starter Code

<br>
<br>
<br>

## 🚨 Important - Please Read!

Before running this code, you will need to update `./config/database.js`

```js
mongoose.connect('YOUR MONGODB ATLAS CONNECTION URI', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
```

<br>
<br>

As you can see above 👆, this starter code is missing the MongoDB Atlas connection URI it needs to connect to your database.

Grab that from your working code from the previous lesson and replace the placeholder string with that value instead. 😅