use ('pizza')

db.createCollection("myCollection");

// db.myCollection.insertOne({ 
//     name: "panner", 
//     price: 300 
// });

// db.myCollection.insertMany([
//     {name: "panner-handi", price: 350 },
//     {name: "panner-tikka", price: 400 }
// ])

// db.myCollection.find({'name' : 'panner-tikka'})

db.myCollection.update(
    { 'name': 'panner-tikka' },
    { $set: { 'price': 1200 } } 
 );
 

