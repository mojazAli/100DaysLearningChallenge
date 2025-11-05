numberList = [1, 2, 3, 4, 5]

""" comment

for loop expands into the following code:

"""

it = iter(numberList)

while True:
	try:
		x = next(it)
		# OR
		# x = it.__next__()
		print(x, end = " ")

	except StopIteration:
		break

""" comment

list type is iterable. We can use for loop only on
iterable types.

we cannot use for loop on non-iterable types. (like int)
"""


""" code

for i in numberList:
	print(i)

"""