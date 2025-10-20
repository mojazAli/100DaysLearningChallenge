FILE_NAME = "cities.txt"

def readAllRecords():
	try:
		with open(FILE_NAME, "r") as file:
			# strip() will remove all the leading and laging spaces from 
			# all records and record will be stored in "recordList".
			recordList = [record.strip() for record in file if(record.strip()) ]
			if(recordList):
				return recordList
			else:
				print("----No record found!----")
				return []

	except FileNotFoundError:
		print("Error! file cannot found")

def writeAllRecords(recordList):
	try:
		with open(FILE_NAME, "w") as file:
			for record in recordList:
				file.write(record)
				file.write("\n")

	except FileNotFoundError:
		print("Error! file cannot found")
		
"""CRUD operations"""
def createNewRecord(newRecord):
	try:
		with open(FILE_NAME, "a") as file:
			file.write(newRecord)
			file.write("\n")

	except FileNotFoundError:
		print("Error! file cannot found")
	except:
		print("Error! cannot create record")

def displayAllRecords():
	recordList = readAllRecords()
	if(recordList):
		recordListLength = len(recordList)

		print("\n----Current Records----")
		i = 0
		while(i < recordListLength):
			# check if following syntax to access list elements is correct?
			# yes its correct.
			print(i + 1, recordList[i])
			i = i + 1
		print("-----------------------")

		return recordList
	# if no records are found then the readAllRecords() will 
	# print "No records found".

def updateRecord(recordNo, newRecord):
	recordList = readAllRecords()
	# Be careful indexing is 0 based. so when user select 4 it means record 
	# is sotored at index 3.
	index = recordNo - 1
	if(recordList):
		recordList[index] = newRecord
		writeAllRecords(recordList)

def deleteRecord(recordNo):
	recordList = readAllRecords()
	# Be careful indexing is 0 based. so when user select 4 it means record 
	# is sotored at index 3.
	index = recordNo - 1
	if(recordList):
		recordList.pop(index)
		writeAllRecords(recordList)

"""CRUD operations end"""

def main():
	while(True):
		print("\n====File CRUD Menu====")
		print("1. Create new record")
		print("2. Read/View all records")
		print("3. Update record")
		print("4. Delete record")
		print("5. Exit")
		print("======================")
		choice = int(input("Enter your choice (1-5): "))
		
		match choice:
			case 1:
				newRecord = input("Enter city name: ")
				if(newRecord):
					createNewRecord(newRecord)
					print("Record created.")
				else:
					print("Warning! record cannot empty")

			case 2:
				displayAllRecords()

			case 3:
				recordList = displayAllRecords()
				if(recordList):
					try:
						recordNo = int(input("Enter record no. to update: "))
						newRecord = input("Enter new city name: ")
						if(newRecord):
							updateRecord(recordNo, newRecord)
							print("Record updated.")
						else:
							print("Warning! record cannot empty")
					except ValueError:
						print("Record cannot updated! Invalid record no.")
				else:
					print("----No record found! Cannot update record----")

			case 4:
				recordList = displayAllRecords()
				if(recordList):
					try:
						recordNo = int(input("Enter record no. to delete: "))
						deleteRecord(recordNo)
						print("Record deleted.")
					except ValueError:
						print("Record cannot deleted! Invalid record no.")
				else:
					print("----No record found! Cannot delete record----")

			case 5:
				print("Thank you, Good bye!")
				break
			case _:
				print("Invalid choice, Try again!")

# Driver code
if(__name__ == "__main__"):
	main()