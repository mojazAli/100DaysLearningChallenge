class Counter:
	def __init__(self, start = 1, end = 10):
		self.start = start
		self.end = end

	def __iter__(self):
		return self.Counter_Iterator(self)
	
	class Counter_Iterator:
		def __init__(self, counter):
			self.counter = counter
			self.start = self.counter.start
			self.end = self.counter.end

		def __next__(self):
			if self.start > self.end:
				raise StopIteration
			else:
				current_value = self.start
				self.start += 1
				return current_value


my_counter = Counter(1, 5)

print("First time")
for i in my_counter:
	print(i)

print("Second time")
for i in my_counter:
	print(i)
