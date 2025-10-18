import time

"""External Service class"""
class ExternalService:
	def fetchData(self):
		print("Starting slow network call")
		time.sleep(5)
		return "Real data from server"

apiService = ExternalService()
"""End of External Service class"""

def runOrignalCall():
	startTime = time.time()
	result = apiService.fetchData()
	endTime = time.time()
	print("Result: ", result)
	print("Time taken: ", endTime - startTime)

def mockFetchData():
	print("Mock - Bypassing network call")
	return "Mocked test data"

def runPatchedCall():
	apiService.fetchData = mockFetchData

	startTime = time.time()
	result = apiService.fetchData()
	endTime = time.time()
	print("Result: ", result)
	print("Time taken: ", endTime - startTime)

"""Understand following code"""
# if __name__ == "__main__":
# 	runPatchedCall()


# Driver code
# runOrignalCall()
runPatchedCall()