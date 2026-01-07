# Python

#### Python is a true object-oriented programming language.
##### (Based on classes and objects) 
---

### Data Types
___
<div style="display:flex; gap:16px;">

  <div style="border:1px solid #ccc; border-radius:8px; padding:16px; background-color:#f9f9f9; width:300px;">
    <h3>Scalar Data</h3>
    <ul>
        <li> Integer</li>
        <li> Float</li>
        <li> Boolean</li>
        <li> Complex</li>
    </ul>
  </div>

  <div style="border:1px solid #ccc; border-radius:8px; padding:16px; background-color:#f9f9f9; width:300px;">
    <h3>Aggregated data</h3>
    <ul>
        <li> String</li>
        <li> Set</li>
        <li> List</li>
        <li> Tuple</li>
        <li> Dictionary</li>
    </ul>
  </div>

</div>
<br>
 <a href="https://docs.python.org/3/library/stdtypes.html"> Python’s built-in types documentation </a> 


__Checking the data type (class) of an object__

__`type()`__

``` python
print(type("hello"))
# prints: <class 'str'>
```

### Numbers
___

__<u>Unlike JavaScript</u>, Python distinguishes between integers (whole numbers) and floating-point numbers (numbers with decimals).__

__integers ('int')__ 
``` python
print(type(25))
# prints: <class 'int'>
```

__Floats ('float')__ numbers(integers) with decimal points.

``` python
print(type(3.14159))
# prints: <class 'float'>
```

``` python
print(type(25.))
# prints: <class 'float'>
```

### Booleans
___

<u>Just like in JavaScript</u>, we have true and false, but they are <u>capitalized in Python</u>:

``` python
print(type(True))
# prints: <class 'bool'>
```


You must start them with capital letters in Python, or they will not reflect the boolean values:

``` python
print(type(true))
# NameError: name 'true' is not defined. Did you mean: 'True'?
```

#### Nothingness
___

JavaScript has the null value to represent nothingness, Python has None:

``` python
print(type(None))
# prints: `<class 'NoneType'>`

```

### Converting between data types
___

Python does not automatically convert data types like javascript. 

```python
num_tacos = 25
msg = "There are " + num_tacos + " tacos."
# TypeError: can only concatenate str (not "int") to str
```

``` python 

str(item)        # Converts `item` to a string
int(item, base)  # Converts `item` to an integer with the provided `base`
float(item)      # Converts `item` to a floating-point number
hex(int)         # Converts `int` to a hexadecimal string
oct(int)         # Converts `int` to an octal string
tuple(item)      # Converts `item` to a tuple
list(item)       # Converts `item` to a list
dict(item)       # Converts `item` to a dictionary
```

### Operations
---

__Math Operations__ 
* Addition (+)
* Subtraction (-)
* Multiplication (*)
* Division (/)
* Modulo (remainder) (%)
* Exponentiation (**)

__Integer Division__

when you divide two numbers (whether they are ints, floats, or a combination of the two), the result is a float, even if there is no remainder:

``` python
result = 4 / 2
print(result)
# prints: 2.0
print(type(result))
# prints: <class 'float'>
```

You’re able to force the result of division to an integer by using // instead of /:
This will always round down - everything after the decimal is removed

``` python
result = 4 // 2
print(result)
# prints: 2 because the decimal ".0" is truncated
```

__Shortcut Assignment operators__

operators in JavaScript, increment (++) and decrement (–), do not exist in Python. Use += 1 and -= 1 instead.

```python

# this line of code:
num = num + 1
# can be written with this shortcut operator:
num += 1

# it also works for any of the other math operations:
num = num / 5
# can be rewritten like this:
num /= 5

# and this line:
num = num * 3
# can be written as this:
num *= 3
# and so on with the other operators
```

### Working with Strings

##### <a href="https://docs.python.org/3/library/stdtypes.html#string-methods"> Python docs covering string methods. </a>
---

__Strings__

```python
my_string = "A double-quoted string"
your_string = 'A single quoted string'
```

__Multiline Strings__
```python
multiline_string = '''This is my string that
                      goes on multiple lines
                      for whatever reason'''
```

__Concatenating strings__

```python
little_string = "bad"
medium_string = "super"
long_string = medium_string + little_string
print(long_string)
# prints: superbad
```

__String interpolation using f-Strings__
When the f is placed directly before a string’s opening quote (single or double), it makes a formatted string or f-string for short. (in Javascript this is template literals)

```python
state = "Hawaii"
year = 1959
message = f"{state} was the last state to join the U.S. in {year}."
print(message)
# prints: Hawaii was the last state to join the U.S. in 1959.
```

__`split()`__

```python
print("ace of spades".split(" "))
# prints: ['ace', 'of', 'spades']

# however, this won't work:
print("abcd".split(""))
# ValueError: empty separator
```

__`list()`__

```python
# instead, use the list() function like this:
print(list("abcd"))
# prints: ['a', 'b', 'c', 'd']

```

__`index()`__

```python
# get the index of a substring:
print("abcd".index("c"))    
# prints: 2
# this method raises an error if the substring is not found:
print("abcd".index("e"))
# ValueError: substring not found
```

__`find()`__

```python
# .find() is similar to .index() but returns -1 if the substring is not found
# this behavior may be preferable to raising an error:
print("abcd".find("e"))
# prints: -1
```

__`upper()`__

```python
print("boo".upper())
# prints: 'BOO'
```

__`lower()`__

```python
print("WHY???".lower())
# prints: 'why???'
```
__`replace()`__

```python
print("Then I went to the store I like".replace("I", "you"))
# prints: 'Then you went to the store you like'
```

__`in`__
use the in operator to quickly find out if one string appears in another.

```python
print("eggs" in "green eggs and ham")
# prints: True
```

__`len()`__
Use the built-in global len() function on a string to find its length.

```python
print(len("Tacos"))
# prints: 5

```