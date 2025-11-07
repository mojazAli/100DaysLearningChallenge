""" comment

If we have used yield keyword in a function then it is called 
Generator function. It resumes its execution from the next statement,
after yield returns the value.

"""

def fun():
	yield 10
	yield 20
	yield 30

""" comment

When we call generator function it returns an iterator object.

"""

it = fun()
for i in it:
	print(i)
