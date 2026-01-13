# Classes

__A class is a blueprint/template for an object.__
___

A class defines objects that share the same properties and methods.



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

__`Methods`__

```python
class ClassName:

    def method_name(self, param1, param2, ...):

    return result

```
 __ClassName:__ class defines a new class named ClassName.

__def method_name(self, param1, param2, ...):__ defines
a method named method_name in the class. The first
parameter, self, refers to the class instance.
 
The __method body__ is the indented lines after the method
definition where operations are performed.


`self` is the object itself.
`self` is not a keyword. Instead it’s a parameter name, and it is called self by convention.
`self` allows a method within an object to:
* Access other properties or methods in the same object.
* Use a single copy of a method in memory to interact with any number of object
  instances.

```python

class Dog():
    def __init__(self, name, age=0):
        self.name = name
        self.age = age

    def bark(self):
        print(f'{self.name} says woof!')
```

`__init__`method used to initialize the new object’s properties. Inside the `__init__()` method, we define the attributes that exist on instances of the class. 

`__init__` method in Python is like constructors in other programming
languages.

`__init__` runs every time you create an object of the class.

`__init__` method can take multiple parameters to initialize the object's attributes. It is used only within the class.

`dunder`(double underscore) methods with names beginning and ending with double underscores 

You can use default arguments instead of always passing values to constructors.

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

### __`Instantiating objects from classes`__

__`Instantiate`__ to create objects from classes

```python
ruby = Dog('Ruby', 3)

print(ruby)
# prints: something like <__main__.Dog object at 0x1031c0f90>

* Python falls back to the default object.__str__()

* That default shows the object’s type and memory address

* Not useful to humans

# print the `name` and `age` attributes of the ruby object
print(ruby.name, ruby.age)
# prints: Ruby 3

# invoke the ruby object's bark instance method
ruby.bark()
# prints: Ruby says woof!
```
Objects instantiated by Python classes use dot notation

```python

# don't pass a second argument
liam = Dog('Liam')

print(liam.name, liam.age)
# prints: Liam 0

```

Instantiating objects means creating instances of a class. To instantiate a class, call the class like a function, passing arguments as defined in the __init__ method.

### __`Overriding methods`__
Overriding means: A subclass or user-defined class provides its own version of a method that already exists.
___

Previously, when we used print(ruby) to print the ruby object, we got an unfriendly output similar to <__main__.Dog object at 0x1031c0f90>.

We can change this behavior by overriding the __str__() method that the print function calls automatically to obtain the string to print out.

Let’s modify the Dog class to override the __str__() method:

```python
class Dog():
    def __init__(self, name, age=0):
        self.name = name
        self.age = age

    def bark(self):
        print(f'{self.name} says woof!')

    def __str__(self):
        return f'The dog named {self.name} is {self.age} years old.'
```

```python
ruby = Dog('Ruby', 3)

print(ruby)
# prints: The dog named Ruby is 3 years old.

```

Data and variables in Python have attributes and methods based on their data type.

For example, here’s how you can see the attributes and methods associated with a list object:

```python
# Create a list
nums = [1, 2, 3]
# Use the dir() function to list all attributes and methods of the list
print(dir(nums))

```

You might recognize methods like append and pop which are used to add and remove elements from the list, respectively.

Try this with the ruby object:

```python
print(dir(ruby))
```


Here, you can see the attributes and methods associated with the ruby object. Some like __init__, age, bark, and name will look familiar. There’s a collection of magic methods that are all new to us though.

These methods exist on our ruby object by default, but they won’t be used directly by us. For example, the __init__() method is called when an object is created, and __str__() is called when an object is converted to a string such as when we wrote print(ruby).

Just because we don’t call them directly doesn’t mean we can’t override their behavior though. Overriding the __str__() method is an example of polymorphism.

### __`Polymorphism`__ 
is a principle in OOP that is literally defined as “having many forms”. In OOP this means that instantiated objects are treated as instances of a class, rather than the actual class. They can be modified without also modifying the class.

For example, our Dog class modified the default behavior of the __str__() method, but that default behavior still exists. If we created another class, the behavior of that class’ __str__() method would be the default behavior.

### Class vs. instance members
attributes and methods (members) are categorized into two types based on whether they belong to instances of the class or the class itself.
___

* Instance Attributes and Methods: These are linked to individual instances of a class. Each object created from the class has its own copy of instance attributes. For example, in a Dog class, each dog object might have its own name and age attributes.

* Class Attributes and Methods: These belong to the class as a whole, not to any individual instance. All instances of the class share the same class attributes. This means that if one instance changes a class attribute, the change is reflected across all other instances. These are intended to be accessed on the class only, not an instance (although accessing them on the instance is technically possible).

```python
class Dog():
    def __init__(self, name, age=0):
        self.name = name
        self.age = age

    def bark(self):
        print(f'{self.name} says woof!')

    def __str__(self):
        return f'The dog named {self.name} is {self.age} years old.'
        
class Dog():
    next_id = 1

    def __init__(self, name, age=0):
        self.name = name
        self.age = age
        # assign the current value of `next_id` to this instance
        self.id = Dog.next_id
        # increment the class attribute `next_id` so the next dog gets a new ID
        Dog.next_id += 1

    def bark(self):
        print(f'{self.name} says woof!')

    def __str__(self):
        return f'Dog #{self.id} named {self.name} is {self.age} years old.'

```