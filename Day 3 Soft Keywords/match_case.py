# import keyword as kw
# """
# keyword is a module.
# Hard and Soft keywords.
# """
# print("Hard Keywords: \n", kw.kwlist, "\n")
# print("Soft keywords: \n", kw.softkwlist, "\n")
# # type() is used to know the type of some data.
# print(type(kw))



"""
Match-case statement in Python, is the concept as switch-case
statement in C/C++ languages.
"""
# def f1():
# 	return [1, 2, 3]

# # someIntegerNum = int(f1())

# action = f1()
# match action:
# 	case "hello":
# 		print("Hello learner")
# 	case 3 + 4j:
# 		print("A complex number")
# 	# TODO 1: what can be done here?
# 	# case someIntegerNum:
# 	# 	# I want that if i pass any integer
# 	# 	# This block should be executed.
# 	# 	print("Some integer number")
# 	case _:
# 		print("Default case... No matching case found")


"""
type is  used to set alternative name of any type.
type is used to make alias of any type.
"""
type point = tuple[int, int]
type listOfPoints = list[point]

p1 : point = (3, 4)
print("p1: ", p1)
print("type of p1: ", type(p1))
# here point is an alias to tuple type.
print("\n\n")

p2 : point = (10, -10)
p3 : point = (1, 2)
# TODO 2: when i had defined *listOfPoints* alias
# i had provided only one point in the list
# like... list[point]. but why i am able to store
# more points in that list?
myList : listOfPoints = [p1, p2, p3]
print("myList: ", myList)
print("type of myList", type(myList))
# Subscript operator is used to access indvidual list
# element.
print("\nlist[0]", myList[0])
