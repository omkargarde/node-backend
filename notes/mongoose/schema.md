# mongoose schema

## creating schema

- A schema in MongoDB is a JSON object that defines the structure and content of documents in a collection.
- const userSchema = new mongoose.Schema({});
- Schema() requires a single object which will define structure of data
- Schema() also takes additional optional parameters will hold create_at, modified_at data

### defining schema

```javascript
  {
    username:{
      type:String,
      required:true,
      unique:true,
      lowercase:true,
    }
  }
```

- data can have property which defines constraint or metadata tell mongo how to store data or which data cannot be stored
- [more examples](https://stackblitz.com/edit/stackblitz-starters-3sghhv?file=models%2Ftodos%2Ftodo.model.js,index.js)

## creating model

- In MongoDB, a model is a constructor that is compiled from a schema definition. A document is an instance of a model. Models are responsible for reading and creating documents from the MongoDB database
- export const User = mongoose.model('User', userSchema)
- model() will take two parameters, 1st will ask for name of the model and 2nd will ask from which schema model should be created from.
- when data is stored in mongo **_User_** model will be _pluralized_ and stored as **_users_**
