//stores data about costumes in JSON format
// JSON is JavaScript Object Notation

costumes = [
    {
        //this is called a key, value pair
        'charater': 'Dragon', 
        'number of pieces': 5,
        "photo_path": "images/dragon_costume.png",
        "actor": "Keanu Reeves",
        "cleaned": true,
    },
    {
        'charater': 'Donkey', 
        'number of pieces': 4,
        "photo_path": "https://www.amazon.com/Fun-Costumes-Adult-Donkey-Costume/dp/B089B5R4SD",
        "actor": "Jamie Foxx",
        "cleaned": false, 
    } 
]

//We can retrieve valuse from objects with dot notation
for (let costume of costumes) {
    console.log(costume.charater);
    console.log(`It has ${costume['number of pieces']} pieces.`)
}