#include <iostream>

using namespace std;

//	Izracunati zbir elemenata niza koji su veci od svog indeksa.

int main(){
	int a[] = {6, 17, 0, 15, 78, 3, 98, 0, 7, 8, 34, 0, 53};
	//		   0   1  2   3   4  5   6  7  8  9  10  11 12
	
	int dim = sizeof(a)/sizeof(int);
	
	int zbir = 0;
	for(int i = 0; i < dim; i++){
		if(a[i] > i){
			zbir = zbir + a[i];
		}
	}
	cout << "Zbir elemenata niza koji su veci od svog indeksa je: " << zbir;
		
	return 0;
}
