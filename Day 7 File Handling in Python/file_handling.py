"""
*Finle Handling in Python*
Suppose if i got an input from user at runtime, and i  want to store that input data for future use. I can use File Handling mechanism.

Three simple steps to perform File Handling
1) Open file
2) read/write data
3) close file

File opening modes in python

Simple modes
r : read
w : write (Clear data of the file and start writing	at the
	start)
a : append (Countinue writing data after currently stored 
	data in the file)

Extended modes
r+ : read + write
w+ : write + read (Clear data of the file and start writing	at 	
	 the start)
a+ : append + read (Countinue writing data after currently 
	 stored data in the file)
"""

def writeDataToFile(fileName, name, age):
	file = open(fileName, "w")
	file.write("Name and age of users\n")
	file.write(name)
	file.write("\t ")
	file.write(age)
	file.write("\n")
	file.close()

def appendDataToFile(fileName, name, age):
	file = open(fileName, "a")
	file.write(name)
	file.write("\t ")
	file.write(age)
	file.write("\n")
	file.close()

def readDataFromFile(fileName):
	try:
		file = open(fileName)
		readData = file.read()
		print("Complete data of file: \n", readData)
		file.seek(0)
		# Comment
		"""
		we can move file pointer using seek(). *file.seek(0)* moves the file pointer to the begining of the file.
		"""
		# end of comment
		readLine = file.readline()
		print("fist line of file: \n", readLine)
		readLine = file.readline()
		print("second line of file: \n", readLine)
	except FileNotFoundError:
		print("Error! File not found.")
	finally:
		print("The try except is finished")
		
def performReadAndWrite(fileName):
	file = open(fileName, "r+")
	readData = file.read()
	print("Data: ", readData)
	# move file pointer at the end
	file.seek(0, 2)

	file.write("Data removed!\n")
	# file.close()

def main():
	# name = input("Enter your name: ")
	# age = input("Enter your age: ")
	# writeDataToFile("user_info.txt", name, age)
	# appendDataToFile("user_info.txt", name, age)
	# readDataFromFile("user_info.txt")
	# performReadAndWrite("user_info.txt")

# Driver code
main()