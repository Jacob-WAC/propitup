import React from "react";
import NewComponent from "./components/newcomponent";

class Person {
    constructor(firstName, lastName, age, hairColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.hairColor = hairColor;
    }
}

var john = new Person("john", "doe", 55, "brown");
var stacy = new Person("stacy", "ward", 84, "blond");
var kevin = new Person("kevin", "leven", 44, "dark brown");
var ann = new Person("ann", "wilkerson", 22, "red");

function App() {
    return (
        <div className="App">
            <NewComponent person={john} />
            <NewComponent person={stacy} />
            <NewComponent person={kevin} />
            <NewComponent person={ann} />
        </div>
    );
}

export default App;
