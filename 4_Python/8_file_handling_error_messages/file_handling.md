# __File Handling__
___

__`open()`__
open a file in Python,

```python
file = open('example.text', 'w')
```

__`(w)`__
if a file does not exist open it in write

__`(a)`__
if a file does not exist open it in append

__`read()`__
read the entire content of a file

```python
content = file.read()
```

__`readline()`__
To read one line at a time,

```python
line = file.readline()

print(line)
```

__`readlines()`__
for reading all lines into a list,

```python
line = file.readlines()

print(line)
```

__`write()`__
to write a string to a file,

```python
file.write('Hello World!\n')

```

__`writelines()`__
for a list of strings:

```python
lines = ['First!\n', 'Second\n']

file.writelines(lines)


```