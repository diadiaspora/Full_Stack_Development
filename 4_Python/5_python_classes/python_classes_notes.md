# Classes

__A class is a blueprint/template for an object.__
___

A class defines objects that share the same properties and methods.

__`Encapsulation`__

Encapsulation is about keeping the data and behavior that manipulates that data under one roof within a class. This not only organizes the data and methods into manageable parts but can also protect the data by hiding it from outside interference, which can prevent misuse or errors.

__`Inheritance`__

Inheritance allows a new class to receive or inherit attributes and methods from an existing class. This enables you to eliminate redundant code and extend the functionality of existing classes.

__`Polymorphism and abstraction`__

While key to OOP, polymorphism and abstraction are more advanced concepts that are best learned after you’ve developed a deeper understanding of encapsulation and inheritance. We’ll save these topics for another time.


__Classes enable us to implement the key principles of OOP in our applications.__

Classes are templates for creating objects. These new objects are called __instances__ of that class. They specify what __attributes__ and __methods__ the __objects__ will have.

A class defines characteristics (properties) and actions (methods) common to a group of objects. 

___
Car class might specify properties like make, model, and color and a method like drive(). When we create individual cars (instances) from this class, each car inherits these properties and methods, allowing us to assign specific values (for example, a red Honda Civic) and perform actions (driving the car).

Class with a drive() method
```python
class Car:
    def __init__(self, make, model, color):
        self.make = make
        self.model = model
        self.color = color

    def drive(self):
        return f"The {self.color} {self.make} {self.model} is driving"
```

Objects calling the same method

```python
car1 = Car("Toyota", "Corolla", "Blue")
car2 = Car("Honda", "Civic", "Red")

car1.drive()
car2.drive()
```
___

An __instance__ is an object produced by a class, containing all the properties and behaviors defined by that class.

__In Python everything is treated as an object.__


`self` is the object itself.
`self` is not a keyword. Instead it’s a parameter name, and it is called self by convention.

```python

class Dog():
    def __init__(self, name, age=0):
        self.name = name
        self.age = age

    def bark(self):
        print(f'{self.name} says woof!')
```

`__init__`


### __`Objects`__
An object represents a real-world entity that can be distinctly identified. It consists of the

following components:

__Identity:__ It reflects the unique name of an object.

__State:__ It reflects the properties of an object.

__Behavior:__ It reflects the response of an object to other objects.

| Identity            | Description | Examples                  |
|----------------------|-------------|---------------------------|
| Name of dog    | Breed   | Bark                      |
|   | Age | Sleep   |
|   | Color | Eat    |
