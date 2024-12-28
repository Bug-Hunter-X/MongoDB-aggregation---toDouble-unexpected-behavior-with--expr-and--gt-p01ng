```javascript
const query = { "$expr": { "$gt": [ {"$toDouble": "$field"}, 10 ] }};
db.collection.find(query);
```