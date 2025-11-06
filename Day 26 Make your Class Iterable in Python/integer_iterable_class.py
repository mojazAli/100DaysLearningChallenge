class Integer:
	def __init__(self, data):
		self.data = data
	
	def __iter__(self):
		return self.Integer_Iterator(self)
	
	# Integer_Iterator is a member class of Integer
	# OR
	# We can say Integer_Iterator is inner class of Integer
	class Integer_Iterator:
		def __init__(self, integer):
			self.data = integer.data
			self.list = []
			self.i = 0
			self.seperate_digits()
		
		def __next__(self):
			if self.i == len(self.list):
				self.i = 0
				raise StopIteration
			else:
				current_value = self.list[self.i]
				self.i += 1
				return current_value
		
		def seperate_digits(self):
			current_data = self.data
			self.list = [i for i in str(current_data)]

num = 5678
x = Integer(num)

print("First time")
for i in x:
	print(i)

print("Second time")
for i in x:
	print(i)