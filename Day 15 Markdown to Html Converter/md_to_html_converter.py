import markdown as md

def mdToHtmlConverter(source, destination):
	try:
		file = open(source, "r")
		mdText = file.read()
		file.close

		htmlText = md.markdown(mdText)

		file = open(destination, "w")
		file.write(htmlText)
	except:
		print("Error occured")


mdToHtmlConverter("sample.md", "sample.html")