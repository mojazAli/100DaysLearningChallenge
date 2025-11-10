#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(int argc, char* argv[]){
	
	int num[argc];
	int sum = 0;

	for(int i = 0; i < argc; i++){
		num[i] = 0;
	}

	for(int i = 1; i < argc; i++){
		num[i] = atoi(argv[i]);
	}

	for(int i = 1; i < argc; i++){
		sum = sum + num[i];
	}

	printf("Sum is %d.", sum);
	
	printf("\n");
	system("pause");
	return(0);
}