""" comment

Generator function is a very useful concept. Make it a habbit to use 
generator functions. 

All the very best for your #100DaysLearningChallenge

"""

def next_prime_number(prime_num):
	next_prime_num = prime_num + 1
	while True:
		if is_prime(next_prime_num):
			return next_prime_num
		else:
			next_prime_num += 1

# end of next_prime_number()

def is_prime(n):
	for i in range(2, n):
		if n%i == 0:
			return False


	return True

# end of is_prime()


def prime_generator(n):
	prime_num = 2
	for i in range(n):
		if is_prime(prime_num):
			yield prime_num
			prime_num = next_prime_number(prime_num)
			
# end of prime_generator()

prime_list = [i for i in prime_generator(100)]
print(prime_list)
	