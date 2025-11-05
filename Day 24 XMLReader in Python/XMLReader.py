import xml.etree.ElementTree as ET

tree = ET.parse("studentRecords.xml")
root = tree.getroot()

print("{:<20} | {:<20} | {:<20} | {:<20}".format("Name", "Age", "Id", "Contact"))

# comment
"""
:<20 means left-align the text within a field of width 20.
"""

for i in range(80):
    print("=", end = "")
print("") 
# to insert newline

for student in root.findall("student"):
    name = student.find("name").text
    age = student.find("age").text
    id = student.find("id").text
    contact = student.find("contact").text

    print("{:<20} | {:<20} | {:<20} | {:<20}".format(name, age, id, contact))

