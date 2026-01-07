# `Control Flow (Python)`
Different code paths executing according to the evaluation of conditional expressions.
___

__Sequence:__

Statements execute one at a time in succession. This is the default behavior.

__Branching:__ 

Different code paths are executed based on a conditional expression.

__Looping:__

The code in the loop repeatedly executes while a condition is truthy.

## `Boolean`
___

### Equality Operators
___

__There’s only one type of equality operator in Python: ==, which is the same as === in JavaScript.__

* == - equal to
* != - not equal to

```python

print(7 == 7)
# prints: True
# 7 is equal to 7

print(7 == "7")
# prints: False 
# 7 is an integer, and "7" is a string

print(7 != 7)
# prints: False
# 7 is equal to 7

print(7 != "7")
# prints: True 
# 7 is an integer, and "7" is a string; therefore, they cannot be equal


```

### Comparison Operators (Relational Operators)
__Python has all the same comparison operators as JavaScript:__

* \< - less than
* \> - greater than
* \<= - less than or equal
* \>= - greater than or equal


```python

print(8 > 8)
# prints: False 
# 8 is not greater than 8

print(8 >= 8)
# prints: True 
# 8 is greater than or equal to 8 (equal)

print(8 < 8)
# prints: False 
# 8 is not less than 8


```

### Logical Operators
Logical operators work the same as JavaScript in Python, except Python uses English words instead of symbols:

* or is the same as ||
* and is the same as &&

```python
# or
# returns the first truthy operand, or the last operand

print(True or False)
# prints: True

print(False or True)
# prints: True

print(False or False)
# prints: False

print('hello' or 0)
# prints: 'hello'

print(0 or 'hello')
# prints: 'hello'

print('hello' or 'tacos')
# prints: 'hello'

# and
# returns the first falsy operand, or the last operand

print(True and False)
# prints: False

print(False and True)
# prints: False

print('hello' and 0)
# prints: 0

print(0 and 'hello')
# prints: 0

print('hello' and 'tacos')
# prints: 'tacos'


```

__Like in JavaScript, more than two conditions may be evaluated at a time.__

```python
# or
# returns the first truthy operand, or the last operand

print(True or True or True)
# prints: True

print(True or True or False)
# prints: True

# and
# returns the first falsy operand, or the last operand

print(True and True and True)
# prints: True

print(True and True and False)
# prints: False

```

__You can also mix-and-match and and or:__

```javascript
print(False or True and True)
# prints: True

```

### The Not Operator
like the not operator in JavaScript (!), the not operator in Python flips a truthy expression to a boolean value of False, and a falsy expression to a boolean value of True.
___

```python
print(not False)
# prints: True

print(not 'hello')
# prints: False

```

## `Branching`
___

__`if`__
__Single Path__

```python
floor = "sticky"
walls = "clean"

# notice the colon ':' after the conditional expression
# it indicates the start of the if block
if floor == "sticky":
    print("Clean the floor! It's sticky!")
    # this is where you would add more lines of code related to the condition
    # each line must be indented to be part of the 'if' block

# unindented code indicates that we have returned to normal code execution
print("This will always print, it's not inside of an if block!")

# parentheses are not required around the conditional expression
if walls == "sticky":
    print("Clean the walls! They're sticky!")

```
___


__`if else`__
__Dual Path__

```python
val = 3

# if path
if val == 1:
    print('val is one')
# else path
else:
    print('val is not one')
    # prints: val is not one
    # since val is not 1, the else path is taken

```

___


__`if...else if...else`__
__Three or more paths__

```python
val = 3

if val == 1:
    print('val is one')
elif val == 2:
    print('val is two')
elif val == 3:
    print('val is three')
    # prints: val is three
    # since val is 3, this elif path is taken
else:
    print('not one, two, or three')


```