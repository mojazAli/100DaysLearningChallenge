#include <iostream>
using namespace std;

/*
Write a program to print first n natural numbers.

There are three simple steps to create recursive function.
1. Assume that the required function is already defined.
2. Recursive Case 
3. Base Case

***Important Note***: You have to focus only on what function will do, 
don't focus on how function will do it.

1. printNNaturalNumbers(n)        1 2 3 4 ... n-1 n
2. printNNaturalNumbers(n - 1)    1 2 3 4 ... n-1
   cout<<n<<" ";				  n
3. n == 1                         1

*/
void printNNaturalNumbers(int n)
{
	if(n == 1)
	{
		cout<<1<<"\n";
	}
	else if(n > 1)
	{
		printNNaturalNumbers(n - 1);
		cout<<n<<"\n";
	}
}

int main()
{
	printNNaturalNumbers(-5);

	cout<<"\n";
	system("pause");
	return(0);
}