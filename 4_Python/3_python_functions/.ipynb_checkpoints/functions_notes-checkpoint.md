# `Functions`
___

```python
def function_name():
    statements
    return statement
```

1. The def keyword.
2. The name (identifier) of the function. It should be written in
   <strong>snake_case</strong>. 
   <details>
   <summary>Identifiers</summary>
   <ul>
       <li>snake_case (Uppercase A-Z and lowercase a-z work but all lowercase snake_case is 
           best practices. </li>
       <li>Digits(0-9)</li>
       <li>Underscore (_)</li>
       <li>No special symbols (!@#$%)</li>
       <li>Keywords like "global" and "class" cannot be used as identifiers</li>
   </ul>

    </details>
4. The parameter list, inside parentheses.
5. The body of the function is indicated by a colon.
    * 4a. The statements that make up the function itself. These must be indented.
    * 4b. Optionally, a return statement.

### `Defining a Function`
___
Just like in JavaScript, defining a function does not execute it. A function must be called for it to run.

```python
def do_nothing():
    pass
```
```
def print_banner():
    print("=======================")
    print("Insert banner text here")
    print("=======================")
```

### `Calling a Function`
___

call the print_banner() function: 

```python
print_banner()
```

__WRONG__

```python
print_banner()

def print_banner():
    print("=======================")
    print("Insert banner text here")
    print("=======================")
```
__RIGHT__

```python
def print_banner():
    print("=======================")
    print("Insert banner text here")
    print("=======================")

print_banner()
```

In Python, functions that we don’t specify a return for return None:

```pyhton
print(do_nothing())
# prints: None
```

__Key differences between Python and JavaScript functions__

* Function expressions do not exist in Python
* __Lambda__ Functions (similar to arrow funtions in javacript)
    * They implicitly return a single expression’s result.
    * They can be assigned to a variable.
    * they cannot have any code blocks - only a single expression with its result implicitly
      returned.

        Javascript:
      ```javascript
      const nums = [1, 3, 2, 6, 5];
      let odds = nums.filter(num => num % 2);
      ```
       Python:
      ```python
      nums = [1, 3, 2, 6, 5]
      odds = list(filter(lambda num: num % 2, nums))
      ```

## `Parameters and Arguments`
___

__Parameters__ are variables that act as placeholders for values passed into a function.

```python
# text is a parameter
def print_banner(text):
    print("=======================")
    print(text)
    print("=======================")
```
The function above accepts one parameter, text. When the function is called, a value must be provided for this parameter.

An __argument__ is the actual value you pass into a function when you call it. Just like in JavaScript, arguments are used to provide input to a function.

```python
# "hello, world" is an argument
print_banner("hello, world")

```

In this example, the value "hello, world" is passed to the function as the argument for text.

__Unlike JavaScript, Python requires that you provide the correct number of arguments when calling a function.__

### Accepting a variable number of arguments
---

__Rest parameters__  allow a function to accept any number of arguments:

```python
const sum = (...nums) => {
  total = 0;

  nums.forEach((num) => {
    total += num;
  });

  return total;
};

console.log(sum(1, 5, 10));
// prints: 16
```

### Python’s *args syntax
---

__you can use the * (asterisk) before a parameter name to accept a variable number of positional arguments.__

The `args` parameter becomes a tuple that contains all the values passed to the function. The name args is a common convention, but you can technically use any name after the *.

```python
def sum(*args):
    print(type(args))
    # prints: <class 'tuple'>

    total = 0
    for arg in args:
        total += arg

    return total

print(sum(1, 5, 10))
# prints: 16
```
### Mixing required and variable arguments
---
If your function has both required and variable arguments, the required ones must come first.

```python
def sum(greeting, *args):
    print(greeting)
    # prints: Hello, friend

    total = 0
    for arg in args:
        total += arg

    return total

print(sum("Hello, friend", 1, 5, 10))
# prints:
# Hello, friend
# 16
```

In this example, "Hello, friend" is passed as the required greeting argument, and the numbers are collected in args.

## `Kwargs`
kwargs stands for keyword arguments.
---

These are arguments that have a name. You can provide as many as you like to a function when you call it.

passing positional arguments to a function:
```python
def make_employee(role):
    print(role)
    # prints: CEO

    employee = {"role": role}
    return employee

print(make_employee("CEO"))
# prints: { 'role': 'CEO' }

```
passing keyword arguments to a function 
```python
def make_employee(role):
    print(role)
    # prints: CEO

    employee = {"role": role}
    return employee

print(make_employee(role="CEO"))
# prints: { 'role': 'CEO' }

```

Because role is the parameter’s name, we can assign "CEO" to role when we pass it into the make_employee function. That value will be matched to the role parameter because it has the same name.

This can make passing arguments to a function more readable, and is a common practice in many Python frameworks.

### Python’s ** parameter specifier (**kwargs)
---
If you’d like to access a varying number of keyword arguments, use **kwargs at the end of the parameter list. This is similar to how we passed an arbitrary number of positional arguments with *args.

Just like with args, kwargs could technically be anything but is named kwargs by convention - what matters is the **.

Let’s define and call a function that uses **kwargs:

```python
def make_employee(role, **kwargs):
    print(kwargs)
    # prints: {'first': 'Sam', 'middle': 'Harris', 'last': 'Altman'}
    print(type(kwargs))
    # prints: <class 'dict'>
    # kwargs is a dictionary - you can use it anywhere you'd use one:
    employee = {"role": role, "name": kwargs}
    return employee

print(make_employee("CEO", first="Sam", middle="Harris", last="Altman"))
# prints: {
#     'role': 'CEO',
#     'name': {'first': 'Sam', 'middle': 'Harris', 'last': 'Altman'}
# }
```

kwargs arguments are not positional! You can provide them in any order, but they must come after any positional arguments.

As you can see above, in a function, kwargs can be accessed by its name - kwargs. kwargs is a dictionary, meaning you can treat it as such. For example, you could iterate through it using the values() method:

```python
def make_employee(role, **kwargs):
    username = ""
    for name in kwargs.values():
        username += name

    employee = {"role": role, "username": username}
    return employee

print(make_employee("CEO", first="Sam", middle="Harris", last="Altman"))
```

### Combining kwargs and keyword arguments
---

We can combine these ideas in the same function:

```python
print(make_employee(role="CEO", first="Sam", middle="Harris", last="Altman"))
# prints: {
#     'role': 'CEO',
#     'name': {'first': 'Sam', 'middle': 'Harris', 'last': 'Altman'}
# }

```
We can even provide the role out of order if we want:
```python
print(make_employee(first="Sam", middle="Harris", last="Altman", role="CEO"))
# prints: {
#     'role': 'CEO',
#     'name': {'first': 'Sam', 'middle': 'Harris', 'last': 'Altman'}
# }

```
Note when we do this, role is not added to the kwargs dictionary - it is matched directly with its positional parameter.

### Combining argument types
---
Required positional, optional positional (*args), and keyword (**kwargs) arguments can all be used simultaneously.

But note that order is important! Check out this example:

```python
def arg_demo(pos1, pos2, *args, **kwargs):
    print(f'Positional params: {pos1}, {pos2}')
    print('*args:')
    for arg in args:
        print(' ', arg)
    print('**kwargs:')
    for keyword, value in kwargs.items():
        print(f'  {keyword}: {value}')

arg_demo('A', 'B', 1, 2, 3, color='purple', shape='circle')
```

Which results in this output:

```python
Positional params: A, B
*args:
  1
  2
  3
**kwargs:
  color: purple
  shape: circle

```