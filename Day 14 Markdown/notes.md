# What is Markdown?

Makrdown is a light weight markup language. We can format plain text using symbols instead of tags. This characteristic makes markdown syntax easy to remember. 

It was created by *John Gurber* in 2004. Markdown is one of the most popular markup language today. 

# Where we can use Markdown?

It can be used everywhere, from notes taking to software documentation.

One popular usecase is, We can upload (readme.md) markdown file on github platform to actually document our repositories. It makes easier to understand the overall structure of the repository.


Today we will cover following topics in markdown:
1. Heading
2. code snippet
3. links
4. images
5. bold text
6. italic text
7. blockquote
8. ordered list
9. unordered list
10. horizontal rule


---
# 1. Heading
How we can create headings?

Just type # symbol and a space, now you can write your heading. it will be equivalent to h1 heading of Html.

---
# 2. Code snippet
How to write code snippet in markdown file?  

We can write code using 3 pairs of backtick symbol (`).

> **If you want to display backtick in the code how do it?**

Use 3 pairs of backtick symbol and a space between them, now you can write backtick symbol. it will be treated as a code snippet.  
``` code ` ``` 



```cpp
#include <iostream>
using namespace std;

int main()
{
	cout<<"Hello world";
	return 0;
}

```

```python
name = input("Enter your name: ")
print("Your name: ", name)

```
---
# 3. Links
How to create hyper-links?

Use `[hyper text](url)` to create a hyper-link.

This is a hyper-link of **MySirG** new channel . [MySirG](https://youtube.com/@mysirg-neo)

---
# 4. Images

How to insert images?

Use `![alt text](url)` to insert an image.

![Stack of books](./MySirG%20ka%20student.png)

---
# 5. Bold text

How to bold text?

Use `**text**` 2 pairs of asteric symbol to bold text.

**text**

---
# 6. Italic text
How to italic text?

Use `*text*` 1 pair of asteric symbol to italic text.

*text*

---
# 7. blockquote
How to create blockquote?

Bolockquote is used to highlight quotes. Use `>` sybmol to create blockquote.

>"Water the root, enjoy the fruit."


---
# 8. ordered list
How to create ordered list?

Just simply write `1. tea` and it will be an item of ordered list.
1. tea
2. chai
	- hello
	- how are you?
3. Green tea
4. coffee

---
# 9. unordered list
- tea
- chai
- coffee
- green tea

---
# 10. horizontal rule
To insert horizontal rule just simply type `---` three hyphen symbols.


This is first paragraph.

---

This is second paragraph.