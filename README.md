# Array.prototype.compare
Compare 2 arrays

Regular - looking for the presence of all the elements in the array
```
var a = [1,4,2,2];
var b = [1,2,4];

a.compare(b); //falce
```


Strict - compares items by position and type
```
var a = [1,2,4];
var b = [1,2,4];

a.compare(b,true); //true
```
