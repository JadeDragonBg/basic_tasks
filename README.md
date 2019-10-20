# basic_tasks
coding practice


## Task 1:
### Simple Array Sum
Create a function with name `array_sum` that sums elements of given array(received as argument)
Example call: `array_sum([1,2,3]);`. Expected return value: `6`

## Task 2:
### Diagonal Difference
Create a function with name `diagonal_abs_diff` that accepts matrix as argument and
calculates the absolute difference between the sums of its diagonals.
Example call: `diagonal_abs_diff([[1,2,3],[4,5,6],[7,8,9]]);`. Expected return value: `2`

## Task 3:
### Staircase
Create a function with name `print_staircase` that accepts single number as argument and returns a string formatted as staircase. Use only spaces, `#` and new lines. String should not end with new line.
Example call: `print_staircase(3);`. Expected return value: `  #\n ##\n###`

## Task 4:
### Conditional Statements: If-Else
Create a function with name `getGrade` that converts score into grade. Max score - 30, min score - 0.
If 25 < score <= 30, then grade A.
If 20 < score <= 25, then grade B.
If 15 < score <= 20, then grade C.
If 10 < score <= 15, then grade D.
If 5 < score <= 10, then grade E.
If 0 < score <= 5, then grade F.
Example call: `getGrade(26);` expected return value - `A`

## Task 5:
### Create a Rectangle Object
Create a function with name `createRectangle` that has 2 parameters
width and height. It has to return object with following properties:
height: This value is equal to height.
width: This value is equal to width.
area: This value is equal to height*width.
perimeter: This value is equal to (height+width)*2.
Example call: `createRectangle(2,1);` expected return value - `{width: 2, height: 1, area: 2, perimeter: 6}`
