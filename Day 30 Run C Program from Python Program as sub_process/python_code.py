

"""comment
Run C Program from Python Program as a sub process.
""" 
import subprocess

print("Enter three numbers: ")
a = input()
b = input()
c = input()

# Note we are providing the command + arguments as 
# a single list.
subprocess.run(['c_code', a, b, c])