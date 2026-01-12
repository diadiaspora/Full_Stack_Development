# `Functions`
___

* A function is a collection of related
  statements that accomplish a specific task.
* It is an organized block of reusable code.
* It executes only when it is called.
* Parameters are data passed into a function.

<u>Advantages</u>
* Enablescomprehensibility
* Supports modularity
* Enhances program quality
* Promotes reusability
* Improves scalability
* Provides ease of use


__`Sytntax`__

```python
def function_name():
    statements
    return statement

```

1. The def keyword.
2. The name (identifier) of the function. It should be written in
   <strong>snake_case</strong>. 
   <details>
   <summary>Naming Conventions</summary>
   <ul>
       <li>snake_case (Uppercase A-Z and lowercase a-z work but all lowercase snake_case is 
           best practices. </li>
       <li>Digits(0-9)</li>
       <li>Underscore (_)</li>
       <li>Case Sensitive</li>
       <li>No special symbols (!@#$%)</li>
       <li>Keywords like "global" and "class" cannot be used as identifiers</li>
   </ul>

    </details>
4. The parameter list, inside parentheses.
5. The body of the function is indicated by a colon.
    * 4a. The statements that make up the function itself. These must be indented.
    * 4b. Optionally, a return statement.

| Built-in functions | User-defined functions |
|-------------|-------------|
| Built-in functions are predefined functions in the programming framework. | Python supports the creation of customized, user-defined functions to perform specific tasks. |
| Python has basic built-in functions, such as len(), sum(), type(), slice(), next(), help(), and format(). |  A user can give any function a name with any number of arguments.|


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

```python
def myFunction(arg1, arg2):
body
```

__Function definition__
* A function is defined using the keyword def, followed by a function name and
  parenthesis.
* The argument names passed to the function are mentioned inside this parenthesis.
* The body of the function is an indented block of code.
  

### `Calling a Function`
___

__Function call__

* A function can be called from anywhere in the program.
* When a function is called, program control is transferred to the called function to perform
  the defined task.
* All the necessary parameters and arguments should be passed during the function
  call.

```python
myFunction(arg1, arg2)
```


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
## __`Lambda`__
Python lambda functions are anonymous functions defined using the keyword lambda.
___

* A lambda function may have any number of arguments but contains only one expression.

* The lambda functions are syntactically restricted to only a single expression, which is evaluated and returned.

* A lambda function can be defined without assigning a variable or explicitly calling it.

__Syntax: lambda arguments: expression__

```python
# Lambda function that adds 10
add_ten = lambda x: x + 10

# Example usage
print(add_ten(5))  # prints: 15
print(add_ten(20)) # prints: 30

```

Explanation:

* lambda x: x + 10 defines an anonymous function that takes one argument x and returns x + 10.
* add_ten stores this lambda so you can call it like a regular function.
* You can pass any number to it, and it will return that number plus 10.

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

__Function arguments are values passed into a function as inputs for performing operations.__

* Information can be passed to a function in the form of arguments.
* A function may have zero to multiple arguments separated by commas.
* The arguments are specified and enclosed in parentheses in the function definition
  immediately after the function name.
* The arguments can be data values, objects, or functions.

__Arguments in Python can be matched by position or name.__

* Positional arguments must be in the same order as in the function definition.
* Keyword arguments are referenced by name and may be in any order.
* Positional and keyword arguments can be mixed in a function call.
* Arguments in a function may also be defined with a default value.

__Unlike JavaScript, Python requires that you provide the correct number of arguments when calling a function.__

### Accepting a variable number of arguments
---

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
 __args* Non-keyword arguments__
 
* The symbol * captures a variable number of arguments.
* Conventionally, args defines non-keyword arguments.
* he function unpacks these arguments as a list.

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

### __`return` statement__
The return keyword passes values back to the function call.
___

* If the return statement is not used, Python returns None by default.
* After the return statement is executed, no further statements of the function are executed.
* A function can return none, multiple values, or data objects.

### __`Scope`__
Scope in programming defines the environment where the variables can be accessed and referenced.
___

* It defines the functional range of any variable or function.
* If a value of a variable is to be retrieved in a function, it searches for the global
  environment of each package on the search list.

| Global Scope | Local Scope |
|-------------|-------------|
| Variables and functions defined outside of all classes and functions have global scope. | Variables or functions defined inside a function block, including argument names, are local variables. |
| It allows variable values to be used or functions to be called from anywhere in the file in the program. |  It can be accessed only inside the function block.|

### __`Generators`__
Generators are a special function supported in Python that returns an iterator object with
a sequence of values.
___

* A generator uses a yield statement instead of a return statement.
* A generator object can be iterated only once.
* A function with a yield statement is termed a generator.

| Return Statement | Yield Statement |
|-------------|-------------|
|The return statement implies that the function is returning control of execution to the point from where the function is called. | The yield statement implies that the transfer of control is temporary. |
| The process destroys the local variables and values generated. | It does not destroy the states of the function’s local variables.|


```python
def myGenerator():
    print('First iteration')
    yield 'Number 1'

    print('Second iteration')
    yield 'Number 2'

    print('Third iteration')
    yield 'Number 3'
```

In place of multiple yield statements, a loop can also be used inside the function to generate the values.


__The generator function can be used in two ways:__

It can be used with the built-in next function.

```python
# define a simple generator function
def count_up_to(n):
    i = 1
    while i <= n:
        yield i  # yield returns a value and pauses the function
        i += 1

# create a generator object
counter = count_up_to(3)

# use next() to get values one at a time
print(next(counter))  # prints: 1
print(next(counter))  # prints: 2
print(next(counter))  # prints: 3

# next(counter) now would raise StopIteration

```
It can be used with a for loop as an iteration object.

```python
# same generator function
def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

# use the generator directly in a for loop
for number in count_up_to(3):
   
```

### __`Functional Programming Methods`__
These built-in functions facilitate functional programming in Python, which uses methods to define computations.
___

__Filter function__
`filter(func, iterable)`
A filter function filters data based on a condition defined in the function.

* The filter function also takes a function and an iterable object and applies the function to
each element of the iteration object.
* The given function should return a Boolean value.

__Map Function__
`map(func, iterable)`
A map function can apply a function to each element of an iteration object.

```python
```
* The map function takes two arguments: a function and an iterable object.
* It applies the given function to all elements of the given iteration object.
* It generates an iterator, which can be converted to a list.
* It can also use the lambda function for implementation.

__Reduce function__
`reduce(func, iterable)`
A reduce function implements the mathematical technique of folding on an iteration object.

```python
```

* The reduce function uses a given function to process an iterable object.
* The reduce function applies the function continually to each element of the iterable
object and produces a single cumulative value.


The `map` and `filter` functions are basic built-in functions, whereas the `reduce` function is part of a module named _functools.