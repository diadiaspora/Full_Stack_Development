# `Control Flow (Python)`
Different code paths executing according to the evaluation of conditional expressions.
___

__Sequence:__

Statements execute one at a time in succession. This is the default behavior.

__Branching:__ 

Different code paths are executed based on a conditional expression. They execute a block of code based on whether a condition is True or False, controlling program flow and decision-making.

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

### Identity Operators
Compare variables to see whether they are the same object at the same memory address.

`is` Returns True if both variables are the same object.

```python
a = ['a', 'b', 'c']
b = ['a', 'b', 'c']
a is b
False
```

`is not` Returns True if both variables are not the same object


```python
a = ['a', 'b', 'c']
b = ['a', 'b', 'c']
a is not b
True
```

```python
a =[1, 2, 3]
b = a
a is b
True
```

### Membership Operations
They test if a sequence is present in an object.

`in`: Returns True if a value is present in the
object

```python
a = [20, 45, 10]
10 in a
True
```

`not in`: Returns True if a value is not present in
the object

```python
a = [20, 45, 10]
10 not in a
False
```
```python
a = [20, 45, 10]
30 not in a
True
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
__Conditional Statements__
Conditional statements, also known as decision control structures, evaluate variables or expressions that return either True or False.
___

__`if` Statement__
Python uses the if statement to change the program's control flow. The indentation marks the block of code.

__Syntax__

```python
if condition:
statement
statement

inp = input("Nationality ? ")
if inp == "French":
print("Préférez vous parler francais?")
```

* A colon indicates the beginning of the block.
* The block is usually indented by four spaces.
* Each statement within the block must have the
  same indentation.


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

__`if else` statement__
This evaluates the condition and executes the if block only when the test condition is
True. Otherwise, it executes the else block.

The else statement is optional in the if-else construct.
```python
if condition:
statement 1
statement 2
else:
statement 3
statement 4

num = int(input('Enter a number : '))
if num > 0:
print(num, 'is a positive number.')
else:
print(num, 'is a negative
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

__`If-Elif-Else` Statement__

This allows checking multiple conditions. If the if condition is False, it checks the next elif condition, and so on.

Only one block among the if-elif-else blocks is executed. If all conditions are False, the else block is executed.

```python
if condition 1:
statement
elif condition 2:
statement
elif condition 3:
statement
else:
statement

    marks = int(input('Enter Marks : '))
if marks >= 90:
print('Grade A')
elif marks >= 70:
print('Grade B')
elif marks >= 55:
print('Grade C')
elif marks >= 35:
print('Grade D')
else:
print('Grade F')
```




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

__`Nested-If`__

* This format is called nesting.
* Indentation defines the level of nesting.

```python
if (condition 1):
statement
# Executes when condition 1 is True
if (condition 2):
# Executes when condition 2 is also True
# inner if Block ends here
# outer if Block ends here

num = 15

if num >= 0:
if num == 0:
print("Zero")
else:
print("Positive number")
else:
print("Negative number")
```

## `Looping`
 Looping repeats a set of actions. Typically code blocks that are repeated  either until a certain condition is no longer met (`while` the condition is `true`) or a specific number of times (`for` a certain number of iterations). 
___

__`for`__
The for loop iterates over a sequence list, tuple, string, or other objects.

__Syntax__ 

```python
for a in iteration_object:
Body
of
loop

string = 'Python'
for s in string:
print(s)
```


Python’s `for` statement is not designed like the one you first used in JavaScript:

```javascript
// A JavaScript for loop
for (let i = 0; i < 10; i++) {
  // do something ten times
}
```
Python for loop always iterates over the items in a sequence (an ordered collection of items), similar to JavaScript’s for...in and for...of loops. Here’s how Python’s for loop is used to loop through a list (Python’s version of a JavaScript array):


```python
names = ["Emily", "Jack", "Sophia", "Ethan"]

for name in names:
    print(name)
```

The JavaScript equivalent would be this:

```javascript
let names = ["Emily", "Jack", "Sophia", "Ethan"];

for (name of names) {
  console.log(name);
}
```
___

__`while`__
Python has a while loop construct that will continue to iterate while a given condition is truthy. The while loop iterates over a block of code if the test expression is true.

__Syntax__ 

```python
while test_expression:
Body
of
loop

counter = 0
while counter < 5:
print(counter)
counter += 1
```

```python
num = 1

while num <= 10:
    print(num)
    # prints the numbers 1 through 10
    num += 1
```

while loops are for when you don’t know how many times you will need to iterate - for example if you want to continue getting input from a user until a specific condition is met.


___

__Nested Loop__
It is a loop inside the body of the outer loop.

```python
# Outer loop
#loop to iterate from 2 to 10
for i in range(2, 11):
# Nested loop to iterate from 1 to 10
for j in range(1, 11):
# Print multiplication using f-string
print(f"{i:2d} × {j:2d} = {i * j:2d}")
print(f“ End of multiplication table of {i}\n")
```


__`break`__ & __`continue`__
Like in JavaScript, the break statement in Python is used to exit for and while loops immediately.

* The break statement exits the innermost enclosing of the for or while loop.
* It terminates the nearest enclosing loop and skips the optional else block.
* If a loop is terminated by a break, the loop variable retains its current value.

In for and while loops, the continue statement will end the current iteration of a loop and continue to the next iteration as long as the condition of the loop is still truthy or there are still items to iterate through.

```python
things = ["computer", "g-g-ghost", "chair", "spider", "desk"]

for thing in things:
    if thing == "g-g-ghost":
        print("Oh, that's just my ghost friend, carry on.")
        continue
    elif thing == "spider":
        print("Nope. Burn it down, no more.")
        break
    print(f"There is a {thing} in the room.")

    # Use of break statement inside the loop
for i in "Hello string":
if i == "l":
break
print(i)
print("End of Loop")
```

---

__Continue__

* The continue statement skips the current iteration and proceeds with the next one.
* It does not terminate the loop but moves control to the next iteration.
* As a result, the optional else block of the loop still executes.

```python
# Use of continue statement inside the loop
for i in "Hello string":
if i == "l":
continue
print(i)
print("End of Loop")
```

__loop else statement__
The loop else statement does not execute if the loop terminates due to a break statement.

```python
numbers = [1, 2, 3, 4, 5, 6, 7]
for num in numbers:
if num == 6:
print("Number found!")
break
else:
print("Number not found!")
```
__While Else Statement__
The loop else statement does not execute if the loop terminates due to a break statement.

```python
count = 0
while count < 5:
print("Count:", count)
if count == 3:
print("Count reached 3!")
break
count += 1
else:
print("Loop completed!")
```

## `Truthy` & `Falsy`
Truthy and falsy are conceptual and attempt to treat non-boolean expressions as booleans (true or false)
___

__Falsy__

* `False`
  
* `None`

* `Zero in any numeric type:` 0 0.0

* `Empty sequences or collections:`

    * `''` (empty string)
    * `[]` (empty list)
    * `()` (empty tuple)
    * `{}` (empty dictionary)
    * `range(0)` (empty range)

__Truthy__

Everything else
