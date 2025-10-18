# Scenario described
"""
If i have to get data from user and i want to stop 
getting data as soon as user input "quit". I will use 
while loop to perform this task repeatedly. 
"""

# Approach 1
# data = input("Enter data: ")
# while data != "quit":
# 	print("You entered: ", data)
# 	data = input("Enter data: ")



# Approach 2
# while (data := input("Enter data: ")) != "quit":
# 	print("You entered: ", data)


# Usage of Walrus operator
"""
Use It When You Want to Assign and Evaluate in One Step.
"""

# Working of Walrus operator.
"""
Follwing statements proves that The Walrus operator
allows us to assign a value to a variable and return
that value in a single expression.
"""
# print((data := input("Enter data: ")))
# print("You entered: ", data)



# Other scenarios where we can use it.

# Scenario 1
"""
Notice that i have used the len() twice. To avoid this
overhead i can use Walrus operator. so that i can assign the
value to a *length* variable and at the same time i can 
compare if *length* is greater than 5. 

I have reduced 1 function call. And it also saves some time.
"""
# Without Walrus operator
# data = ["hello world", "good", "spellings", "work hard"]
# for i in data:
# 	if(len(i) > 5):
# 		print(i, ", ", "Length: ", len(i))

# With Walrus operator
# data = ["hello world", "good", "spellings", "work hard"]
# for i in data:
# 	if((length := len(i)) > 5):
# 		print(i, ", ", "Length: ", length)


# Scenario 2
"""
If i am reading data from a file. And i have to store the data for
future usage. I also want that i check the EOF in the same expression.
Then i can use Walrus operator.
"""
# Little code snippet to explain how it looks like in coding.
# while(line := file.readline()):
# 	print(line)

"""
When Not to Use It
Don't use it just to make code shorter — clarity matters more.
"""


"""
Avoid in simple assignments where it adds confusion.
"""
# Following statement gives error because we cannot use Walrus operator
# instead of simple assignments.
# x := 5
# print(x)


"""
Not allowed at the top level of assignment (e.g., x := 5 outside an expression is invalid).
"""

# we can use it in the place of a condition or in long expressions.
# Other than that we cannot use it.

# Following statement works fine
# print(x := 5) 
# if(x := 10):
# 	print(x)

# Following statement gives Syntax Error
# x := 5
# print(x)
