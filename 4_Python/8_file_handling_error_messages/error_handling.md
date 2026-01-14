__`try`__
This block contains code that might raise an
exception (e.g., attempting to open a file that might not
exist).

__`except`__
If the try block raises a specific exception (e.g.,
FileNotFoundError), this block will execute, handling the
error gracefully.

__`finally`__
This block always runs, regardless of whether
an exception occurred or not; it is used for clean-up
actions, like closing files or releasing resources.