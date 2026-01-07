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

#### Booleans
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

#### Converting between data types
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