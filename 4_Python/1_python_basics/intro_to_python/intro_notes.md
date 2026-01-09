# __`Python`__

#### Python is a true object-oriented programming language.
##### (Based on classes and objects) 
---

## Python uses indentation to define blocks of code - not curly braces. Proper indentation is mandatory in Python!

Follow 
<a href="https://peps.python.org/pep-0008/"> PEP8 Style Guide for Python Code  </a>
as closely as possible for all our work in Python. In this convention we use 4-space indentation.

### `Comments`
___

__Single-line comments__ in Python start with the `#` character and continue to the end of the line.
```python
# This is a comment! Python will ignore it.
```

__Multiline comments__, use three quotes (either as """ double quotes or ''' single quotes) wrapped around your comments, or use the # character at the start of each line:

```python
"""
this is a
multiline comment
"""

'''
this is also a multiline comment
you can use either set of quotes
'''

# this is a
# multiline comment

```

### `Printing in the console(output)`
___
In Python, use `print()` function to print a message to the console. In javascript it is `console.log();`

```python
print("Hello, world!") # prints: Hello, world!
```

### `input()`
---
The input() function allows users to enter data during program execution.

```python
name = input(“Enter your name:”)
print(“Hello,”, name)
```


### `Executing Python from Terminal`
___

```python
python3 <filename>.py
```
```python
python3 intro_to_python.py
```

### `Variables`
Variables in Python hold the data an app needs when it runs, much like they do in JavaScript.
___

__Declaring Variables__

```python
num = 15
```

> Notice the lack of let or const keywords. In Python, we only need to decide on a variable’s name and the value we want to assign to it. There is no way to define a constant variable.

> You cannot declare a variable without assigning to it:

```python
movie
# returns: NameError: name 'movie' is not defined
# this is illegal syntax that cannot be used
```

__Examples of variables__

```python
x = 10 # Integer variable
name = "Alice" # String variable
price = 99.99 # Float variable
is_active = True # Boolean variable

# Assigning multiple variables in a single line

a, b, c = 1, "Hello", 3.14
```

### `Naming Conventions`
___

When you have a variable name with multiple words, the convention is to snake_case the identifier:

```python
# in Python, we use snake_case
my_number = 10
```

| Thing     | Convention         | Example           |
| --------- | ------------------ | ----------------- |
| variables | snake_case         | `total_price`     |
| functions | snake_case         | `get_user()`      |
| methods   | snake_case         | `save_file()`     |
| constants | UPPER_SNAKE_CASE   | `MAX_SIZE`        |
| classes   | PascalCase         | `UserProfile`     |
| modules   | snake_case         | `math_utils.py`   |
| private   | leading underscore | `_internal_value` |

### `Reassigning variables`
---
We can freely assign a new value to a variable after it has been declared:

```python
my_number = 15
print(my_number)
# prints: 15
my_number = -4
print(my_number)
# prints: -4
```

### `Constants`
___

While Python doesn’t have a way to declare constants, the convention is to declare any variable you’d like to be known as a constant in SCREAMING_SNAKE_CASE.


## __`Data Types`__
___
<div style="display:flex; gap:16px;">

  <div style="border:1px solid #ccc; border-radius:8px; padding:16px; background-color:#f9f9f9; width:300px;">
    <h3>Scalar Data</h3>
      <p> Single value data.A scalar represents one atomic piece of data. </p>
    <ul style="list-style: none;">
        <li> <details>
<summary>Integer</summary>

Represents whole numbers without a
fractional part.

<pre>
  <code>
    int = 42;
    print(int);
      42
  </code>
</pre>

</details></li>
        <li><details>
<summary>Float</summary>

represents real numbers with a fractional part.
<pre>
    <code>
        float=3.14;
        print(float)
        3.14
    </code>
</pre>

</details> </li>
        <li> <details>
<summary>Boolean</summary>

represents two values, either True or False.
<pre>
    <code>
        bool= True
        print(bool)
        True
    </code>
</pre>
</details></li>
        <li> <details>
<summary>Complex</summary>

Most Python programmers never use complex numbers at all.
Complex numbers are expressed as a + bj,
where a is the real part, and b is the
imaginary part.

<pre>
    <code>
        complex = 3 + 4j
        real = complex.real
        imaginary = complex.imag
        print("Complex Number:", complex)
        print("Real Part:", real)
        print("Imaginary Part:", imaginary)
        Complex Number: 3 + 4j
        Real Part: 3.0
        Imaginary Part: 4.0
    </code>
</pre>
In Python complex numbers, .real always gives the real part and .imag always gives the imaginary part, no matter how you write the number. They are designated (predefined) attribute names.


</details></li>
    </ul>
  </div>

  <div style="border:1px solid #ccc; border-radius:8px; padding:16px; background-color:#f9f9f9; width:300px;">
    <h3>Aggregated data</h3>
      <p> Multiple values grouped together. These types store multiple values inside one object. </p>
    <ul style="list-style: none;">
        <li> </details></li>
        <li><details>
<summary>String</summary>

represents sequences of
characters enclosed in single, double,
or triple quotes.

</details></li>
        <li> </details></li>
        <li><details>
<summary>Set</summary>

is an <u>unordered</u> collection of
<u>unique<u> items in Python.

</details> </li>
        <li> </details></li>
        <li><details>
<summary>List</summary>

is an <u>ordered</u> collection of items,
which are <u>mutable</u>.

</details> </li>
        <li> </details></li>
        <li><details>
<summary>Tuple</summary>

is an <u>ordered</u> collection of items that are <u>immutable</u>.

</details></li>
        <li> </details></li>
        <li><details>
<summary>Dictionary</summary>

An unordered collection of key-value pairs.

</details> </li>
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

### Data Assignment
___

Python variables are references to objects, but the actual data is contained in the objects.

The equal to (=) operator is used for data assignment in Python.

These references can be verified using the id() function.

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

## `Operations`
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
### `Comparison Operators`
___

These operators return true or false based on the comparison. They are used to compare two values.
<details>
<summary>==</summary>

Returns True when the two values are equal

 x = 20 ; y = 20
 x == y
True
</details>

<details>
<summary>!=</summary>

Returns True when
the two values are
not equal

>> x = 45 ; y = 24
>> x != y
True
</details>



<details>
<summary> < </summary>

Returns True when
the first value is less
than the second

x = 20 ; y = 30
x < y
True

</details>

<details>
<summary> > </summary>

Returns True when
the first value is
greater than the
second

x = 40 ; y = 30
x > y
True

</details>

<details>
<summary> <= </summary>

Returns True when
the first value is less
than or equal to the
second value

x = 10 ; y = 30
x <= y
True

</details>

<details>
<summary> >= </summary>

Returns True when
the first value is
greater than or equal
to the second value

x = 30 ; y = 30
x >= y
True

</details>

## `Working with Strings`

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