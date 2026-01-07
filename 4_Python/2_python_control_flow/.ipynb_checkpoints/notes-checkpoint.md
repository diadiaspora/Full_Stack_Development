# Control Flow (Python)
Different code paths executing according to the evaluation of conditional expressions.
___

__Sequence:__

Statements execute one at a time in succession. This is the default behavior.

__Branching:__ 

Different code paths are executed based on a conditional expression.

__Looping:__

The code in the loop repeatedly executes while a condition is truthy.

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