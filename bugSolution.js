```javascript
const query = { $expr: { $gt: [ { $toDouble: "$field" }, 10 ] } };
db.collection.aggregate([{$addFields: { parsedField: { $toDouble: "$field" } } }, {$match: {parsedField: { $gt: 10 }}}])
```