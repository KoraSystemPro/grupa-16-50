#include <iostream>

using namespace std;

// Napisati program kojim se pronalazi broj nula u unetom nizu brojeva.

int main(){
	//int niz[] = {}
	// 4 bajta = 32 bita     ->     1bajt = 8bitova
	
	//int a[10];
	int a[] = {6, 17, 0, 15, 78, 3, 98, 0, 7, 8, 34, 0, 53};
	int dim = sizeof(a)/sizeof(int);
	
	// dim = zbir_zauzima/jedan_zauzima
	
	int uk_nula = 0;
	for(int i = 0; i < dim; i++){
		if(a[i] == 0){
			uk_nula = uk_nula + 1;
		}		
	}
	
	cout << "Broj nula u nizu je: " << uk_nula;
	
	
	
	return 0;
}
