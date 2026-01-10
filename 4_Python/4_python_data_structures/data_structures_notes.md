# `Data Structures`

## __`Dictionaries`__
A dictionary is a __<u>mutable</u>__, __<u>unordered</u>__ data structure that stores a collection of items(key-value pairs), allowing efficient data retrieval and modification. __Similar to objects in JavaScript.__
___

__Use dictionaries when you need to store data in key-value pairs.__

Dictionaries have a class (type) of `dict`.

### Basic Syntax

```python
student = {
    'name' = 'maria',
    'favorite_integer': 5,
}
```

1. A key
2. A value
3. An item - or a key: value pair
4. The dictionary itself

Any immutable type (like a number) can be used as a key. Unlike in JavaScript, when strings are used as keys, they must be surrounded in quotes, as they are above. The value held by a variable can also be used as a key

* The dictionary itself (mutable)

* The keys inside the dictionary (must be immutable)

```python
favorite_animal = 'dog'

student = {
    'name': 'Maria',
    'favorite_integer': 5,
    favorite_animal: 'llama' # notice the lack of quotes around favorite_animal
}

print(student)
# prints: {'name': 'Maria', 'favorite_integer': 5, 'dog': 'llama'}
# note the 'dog' key - the value of the favorite_animal variable is used
```

```python
my_dict = {key1:value1,
key2:value2,
key3:value3, .....}
```

__Creating a Dictionary__

```python
# Creating a dictionary with key-value pairs
student = {"name": "Alice", "age": 21, "course": "Computer
Science"}

# Using the dict() constructor
employee = dict(id=101, name="John", department="HR")
print(student)
# Output: {'name': 'Alice', 'age': 21, 'course': 'Computer
Science'}

print(employee)
# Output: {'id': 101, 'name': 'John', 'department': 'HR'}
```
### Accessing items in dictionaries

__Getting values__

```python

student = {
    'name': 'Maria',
    'favorite_integer': 5,
}

name = student['name']
print(name)
# prints: Maria
```

__`get` Method__
When attempting to access a key that does not exist in a dictionary, a KeyError will be raised.

One option to avoid this error is to use the get method:
```python
favorite_food = student['favorite_food']
# error: KeyError: 'favorite_food'

print(student.get('favorite_food'))
# prints: None
```

```python
# Creating a dictionary with key-value pairs
student = {"name": "Alice", "age": 21, "course": "Computer Science"}

#accessing element using key
print(student["name"]) # Output: Alice

#accessing element using get method
print(student.get("age")) # Output: 21
print(student.get("grade", "Not Found")) # Output: Not Found
```

__`in` operator__

Another way to avoid the KeyError is to use the in operator to check if the dictionary includes a key:

```python
if 'course' in student:
    print(f"{student['name']} is enrolled in {student['course']}")
else:
    print(f"{student['name']} is not enrolled in a course")
    # prints: Maria is not enrolled in a course

```

### Mutation (Modifying)
___

Dictionaries are mutable:

* The values assigned to a key can be changed.
* Additional items can be added.
* Existing items can be deleted.

__Setting Items__

```python

student = {
    'name': 'Maria',
    'favorite_integer': 5,
}

student['name'] = 'Mariana'
print(student['name'])
# prints: Mariana
```

__Modifying__

```python
# Creating a dictionary with key-value pairs
student = {"name": "Alice", "age": 21, "course": "Computer Science"}
# Modify and add elements
student["age"] = 22 # Updating a value
student["city"] = "New York" # Adding a new key-value pair
print(student)
```


__Adding Items__
Assigning to a key that does not exist will create a new item in the dictionary.

Add an item to the student dictionary:
```python
student = {
    'name': 'Maria',
    'favorite_integer': 5,
}

student['age'] = 25


```
__Deleting Items__

The `del` statement is used to delete an item from a dictionary:

```python

del student['dog']
# verify that the item was deleted
print('dog' in student)
# prints: False
```

__Number of items__

Use the built-in `len` function to retrieve the number of items in a dictionary:

```python
print(student)
# prints: {'name': 'Maria', 'favorite_integer': 5, 'age': 25}
print(len(student))
# prints: 3
print(len({}))
# prints: 0
```

__Iterating through dictionaries__

__`for` loops are used to iterate over the items in a dictionary.__

However, accessing the value of an item as follows is considered to be a Python anti-pattern:
```python
for key in student:
    print(f"{key} is {student[key]}")
    # prints:
    # name is Maria
    # favorite_integer is 5
    # age is 25

```
Modifying a dictionary using this approach can lead to potential issues, which is why this is not preferred.

The preferred approach is to use the items() method to obtain a dictionary view object.

Use it in a for in loop to iterate over the view object:

```python
for key, val in student.items():
    print(f"{key} is {val}")
    # prints:
    # name is Maria
    # favorite_integer is 5
    # age is 25

```

### __`Dictionary Methods`__
___

__Creating a dictionary with key-value pairs__
student = {"name": "Alice", "age": 21, "course": "Computer Science","city":"Newyork"}

__`keys`__
__Returns a view object containing all keys in the dictionary__

```python
print(student.keys())
```


__`values`__
__Returns a view object containing all values in the dictionary__

```python
print(student.values())
```

__`items`__
__Returns a view object containing all key-value pairs as tuples__

```python
print(student.items())
```

__`pop`__
__Removes and returns the value for the given key__

```python
student = {"name": "Alice", "age": 22, "course": "Computer Science"}

removed_value = student.pop("age")
print(student)
```

__`clear`__
__Removes all key-value pairs, making the dictionary empty__

```python
student = {"name": "Alice", "age": 22, "course": "Computer Science"}

student.clear()
print(student)
```

### __`Nested Dictionaries`__
Dictionaries can contain other dictionaries, allowing hierarchical data structures.
___

```python
# Nested dictionary
company = {
"CEO": {"name": "Alice", "age": 45},
"Manager": {"name": "Bob", "age": 38},
"Intern": {"name": "Charlie", "age": 22}
}
# Accessing nested dictionary values
print(company["CEO"]["name"]) # Output: Alice
print(company["Manager"]["age"]) # Output: 38
```

## __`Lists`__

A list is a versatile, <u>ordered</u>, and <u>mutable</u> data structure that can hold elements of different data types.
___

__Use lists when you need an ordered collection of items that may change frequently.__

* Lists serve the same function in Python as arrays do in JavaScript.

* A list holds zero or more items called elements - just like arrays in JavaScript.

__Syntax__
A list is defined using square brackets [ ], with elements separated by commas.

```python
colors = ['red', 'blue', 'green']

my_list = [ value1,
value2, value3, .....]
```

1. The name of the list. This should be plural because it holds a collection of elements.
2. Opening and closing square brackets indicate a list.
3. The list’s elements are placed inside the square brackets, separated by a comma. When initializing a list, you don’t have to include elements; use a set of empty square brackets - [].

Lists are considered a sequence type in Python.

> 📚 A sequence is a generic term for an ordered collection. Other sequence types in Python include strings and tuples.

__Creating a list__

```python
#Creating a list with multiple data types
mixed_list = [25, "hello", 3.14, True]
print(mixed_list)
```

__Accessing items__
Use square brackets with an expression that evaluates to an integer to access the element at that index:

```python

```

Each item in a list is assigned an index number, which allows you to retrieve or modify

elements efficiently.

```python
colors = ['red', 'blue', 'green']
```

```python
print(colors[0])
# prints: red

```
Positive indexing happens from left to right, where the index starts at 0 for the first element.
```python
#Fetching list items from the fruits list using positive
index
fruits = ["apple", "banana", "cherry", "mango"]
print(fruits[0]) # Output: apple
print(fruits[2]) # Output: cherry
```

Unlike in JavaScript, we can use negative integers to index from the end of a list:

```python
print(colors[-1])
# prints: blue

```

Negative indexing happens from right to left, where the index starts at -1 for the last element.

```python
#Fetching list items from the fruits list using negative index
fruits = ["apple", "banana", "cherry", "mango"]
print(fruits[-1]) # Output: mango
print(fruits[-3]) # Output: banana
```

__Mutation__

Lists are mutable:

* Existing items within a list can be replaced.
* Additional items can be added to the list.
* Existing items can be removed from a list.

__Assigning items__
Use square brackets to target an item of a list for assignment:

```python
colors[-1] = 'brown'
print(colors)
# prints: ['red', 'green', 'brown']

```

Unlike with JavaScript arrays, assigning to a non-existing index results in an error:

```python
colors[10] = 'yellow'
# error: IndexError: list assignment index out of range

```

__Adding an Item__
__`append()`__

`append()` method inserts a single element at the end of the list.

`append()` can only add one item and does not return a value.


```python
colors.append('purple')
print(colors)
# prints: ['red', 'green', 'brown', 'purple']
# purple was added to the end of the list

fruits = ["apple", "banana"]
fruits.append("cherry") # Adds 'cherry' at the end
print(fruits) # Output: ['apple', 'banana', 'cherry']
```

__`extend()`__
For adding multiple items to the end of a list.

```python
colors.extend(['orange', 'black'])
print(colors)
# prints: ['red', 'green', 'brown', 'purple', 'orange', 'black']
# orange and black were added to the end of the list

```

__`insert()`__
To add an item anywhere within a list

```python
colors.insert(1, 'yellow')
print(colors)
# prints: ['red', 'yellow', 'green', 'brown', 'purple', 'orange', 'black']
# yellow was added at the 1 index; no elements were replaced
```

__`pop()`__
the pop() method removes items and you can specify the index of the item to remove and return:

The pop() method removes and returns an element from a specified index in a list. If no index
is provided, the pop() method removes and returns the last element by default.


```python
green = colors.pop(2)
print(colors)
# prints: ['red', 'yellow', 'brown', 'purple', 'orange', 'black']
# green was removed at the 2 index and is in the green variable

numbers = [10, 20, 30, 40]
removed_element = numbers.pop(2) # Removes element at index 2
print(numbers) # Output: [10, 20, 40]
print(removed_element) # Output: 30


```

__`extend()`__
The extend() method merges another iterable (list, tuple, or set) into the list.

```python
colors = ["red", "blue"]
colors.extend(["green", "yellow"]) # Adds multiple elements
print(colors) # Output: ['red', 'blue', 'green', 'yellow']
```

__`remove()`__
removes the first item that matches what you pass in:

```python
colors.remove('orange')
print(colors)
# prints: ['red', 'yellow', 'brown', 'purple', 'black']

```

__`clear()`__
The clear() method empties a list:
```python
colors.clear()
print(colors)
# prints: []

```

__`for in`__
The for in loop is used to iterate over the items in a list:

```python
colors = ['red', 'green', 'blue']
for color in colors:
    print(color)
    # prints:
    # red
    # green
    # blue

```

__`enumerate()`__

```python
for idx, color in enumerate(colors):
    print(idx, color)
    # prints:
    # 0 red
    # 1 green
    # 2 blue
```

## __`Tuples`__
A tuple is an <u>ordered</u>, <u>immutable</u> collection of elements.
__

__Use tuples when you need a read-only collection that should not change.__

Tuples in Python are very similar to Python lists. 

 * tuple can hold zero or more items. 
 * Tuples can contain any data type 
 * Tuples have a class (type) of tuple.

__Syntax__

Tuples are defined using parentheses () and can store multiple data types.

```python
colors = ('red', 'blue', 'green')

my_tuple = (value1,
value2, value3, .....)
```

1. The name of the tuple. This should be plural because it holds a collection of elements.
2. Opening and closing parenthesis indicate a tuple. These are actually optional (except when
   creating an empty tuple). However, using parenthesis is popular convention.
4. The tuple’s items are placed inside the parenthesis, separated by a comma. When
   initializing a tuple, you don’t have to include elements; use a set of empty parenthesis -
   ().

__If you need to create a 1-tuple (a tuple with one item), note that a comma is necessary:__
   ```python
   hello_tuple = ('Hello')
# this will not create a tuple
print(type(hello_tuple))
# prints: <class 'str'>

hello_tuple = ('Hello',)
# or just the following (remember parenthesis are not required)
hello_tuple = 'Hello',
print(type(hello_tuple))
# prints: <class 'tuple'>
```
Differences between tuples and lists:
* tuples are immutable.
* tuples can’t be changed after being created,
* Because they are immutable, tuples can even be used as keys for dictionaries.
* Tuples contain heterogeneous (different) data types and lists for homogeneous (similar)
  data types.


  __Creating Tuples__


```python
# Creating a tuple with different data types
fruits = ("apple", "banana", "cherry")
numbers = (1, 2, 3, 4)
mixed = (10, "hello", True, 3.14)

# Creating a tuple using the tuple() constructor
tuple_from_list = tuple([5, 6, 7])
print(fruits) # Output: ('apple', 'banana',
'cherry')
print(tuple_from_list) # Output: (5, 6, 7)

```

  __Accessing items__

Since tuples are ordered, elements can be accessed using indexing and slicing, just like lists.


```python
animals = ("cat", "dog", "elephant", "lion")

#Accessing elements using positive indexing
print(animals[0]) # Output: cat
print(animals[2]) # Output: elephant

#Accessing elements using negative indexing
print(animals[-1]) # Output: lion (last element)
print(animals[-3]) # Output: dog
```
Although tuples can’t be modified like lists, we can retrieve their items in the same way using square brackets:

```python
colors = ('red', 'green', 'blue')
print(colors[1])
# prints: green
```

Sequences (lists, tuples, and strings) also have an index() method that returns the index of the first match:

```python
colors = ('red', 'green', 'blue')
blue_idx = colors.index('blue')
print(blue_idx)
# prints: 2

```

__`Slicing`__


```python
animals = ("cat", "dog", "elephant", "lion")

#Accessing elements using slicing
print(animals[1:3]) # Output: ('dog', 'elephant')
print(animals[:2]) # Output: ('cat', 'dog’)

#Selects every second element
print(animals[::2]) # Output: ('cat', 'elephant’)
```

__`Packing`__

```python
#Tuple unpacking
person = ("John", 25, "Developer")
name, age, job = person
print(name) # Output: John
print(age) # Output: 25
print(job) # Output: Developer
```

__`Unpacking`__
This performs multiple variable assignments in a single line of code:


```python
#Tuple packing
person = ("John", 25, "Developer")
print(person) # Output: ('John', 25, 'Developer')

colors = ('red', 'green', 'blue')
r, g, b = colors
print(r, g, b)
# prints: red green blue

```
It requires comma-separated variables on the left side of the assignment operator and a sequence of values on the right. Functions and methods often return tuples in Python, which is often the preferred method of accessing them.

__`Iteration`__

__`for` Loops__

```python

for idx, color in enumerate(colors):
    print(idx, color)
    # prints:
    # 0 red
    # 1 green
    # 2 blue
```

## __`Sets`__


A set is an <u>unordered</u> collection of <u>unique</u> items called elements. Unlike lists and tuples, sets <u>do not allow duplicate elements</u>. Sets are <u>not indexed</u>.

___
__Elements in a set can be added and removed but cannot be changed.__

> Sets are commonly used for mathematical operations like union, intersection, and difference. This makes them useful for tasks such as removing duplicates and finding common elements in multiple collections.

__Creating sets__

There are two ways to define a set in Python - using curly braces `{}` or the `set()` function.

Create a set from scratch using curly braces:

```python
integer_set = {1, 2, 3, 4, 5}

fruits = {"apple", "banana", "cherry", "apple"}
print(fruits)
# Output: {'apple', 'banana', 'cherry'}
```
Create a set from an iterable data type, like a list or tuple.

```python
another_int_set = set([5, 6, 7, 8, 9])

chips = ['potato', 'computer', 'fish and']

chips_set = set(chips)

# Creating an empty set
empty_set = set() # {} creates an empty dictionary, so
use set()
print(type(empty_set)) # Output: <class 'set'>

```

__Use sets when you need a collection of unique items.__

### `Operations on sets`

Sets support various operations such as adding elements, removing elements, and performing mathematical set operations.

__Adding elements__

__`add()`__

```python
# Adding elements to a set
chips_set.add('paint')
print(chips_set)
# prints: {'paint', 'fish and', 'potato', 'computer'}
# remember, sets are not ordered - your elements may print in a different order
```

__Removing Elements__

__`remove()`__

```python
# Removing elements from a set
chips_set.remove('fish and')
print(chips_set)
# prints: {'potato', 'paint', 'computer'}
# remember, sets are not ordered - your elements may print in a different order
```

__`union()`__
union() combines all unique elements from two or more sets.

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union_set = set1.union(set2)
print(union_set)
# Output: {1, 2, 3, 4, 5}
```

__`intersection()`__
intersection() retrieves only the common elements between sets.

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}
common_set = set1.intersection(set2)
print(common_set)
# Output: {3}
```

__`difference()`__
difference() returns elements that exist in one set but not in another.

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}
diff_set = set1.difference(set2)
print(diff_set)
# Output: {1, 2}
```

### __`List Comprehension`__
Provide a concise way to create and work with lists. 
__

A list comprehension is basically a modified for in loop within square brackets, which returns a new list.
__Syntax__

```python

# [<expression> for <item> in <list>]
# This reads as: I want <expression> for each <item> in <list>

squares = [x**2 for x in range(1, 6)]
print(squares)
# Output: [1, 4, 9, 16, 25]

numbers = [1, 2, 3, 4, 5, 6, 7, 8]
evens = [x for x in numbers if x % 2 == 0]
print(evens)
# Output: [2, 4, 6, 8]
```

__Dictionary Comprehension__
allows you to create dictionaries dynamically with a concise syntax.

```python
new_dict = {key_expression: value_expression for
item in iterable if condition}

#Creating a dictionary with numbers and their squares
squares_dict = {x: x**2 for x in range(1, 6)}
print(squares_dict)
# Output: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
#Filtering a dictionary to keep only even values
num_dict = {x: x**2 for x in range(10) if x % 2 == 0}
print(num_dict)
# Output: {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}
```
__Set Comprehension__
They allow you to generate unique, unordered collections dynamically.

```python
#Creating a set of squares
squares_set = {x**2 for x in range(1, 6)}
print(squares_set)
# Output: {1, 4, 9, 16, 25}

#Removing duplicates from a list using set comprehension
numbers = [1, 2, 2, 3, 4, 4, 5, 5, 6]
unique_numbers = {x for x in numbers}
print(unique_numbers)
# Output: {1, 2, 3, 4, 5, 6}
```



__Filtering the items__
for in loop to map and filter nums:
```python
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_squares = []

# we want 'n * n' for each 'n' in nums  if 'n * n' is even
for n in nums:
    square = n * n 
    if square % 2 == 0:
        even_squares.append(square)

print(even_squares)
# prints: [4, 16, 36, 64, 100]
```
list comprehensions reduce the above from:

```python
even_squares = []
for n in nums:
    square = n * n 
    if square % 2 == 0:
        even_squares.append(square)

```

To this one-liner:

```python

even_squares = [n * n for n in nums if (n * n) % 2 == 0]

```

__Numerical Example__
Square all of the numbers in a list and put them into a new list:

```python
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squares = []

# we want 'n * n' for each 'n' in nums 
for n in nums:
    squares.append(n * n)

print(squares)
# prints [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

```

A list comprehension can reduce this code:
```python
squares = []
for n in nums:
    squares.append(n * n)

```
To this:
```python
squares = [n * n for n in nums]

```