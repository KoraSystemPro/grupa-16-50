#include <iostream>

using namespace std;

//	Kreira se niz od N celih brojeva. Treba ispisati sve one clanove cija je vrednost 
//	manja od njihovog rednog broja (indeksa) u nizu.

int main(){
	int a[] = {6, 17, 0, 15, 78, 3, 98, 0, 7, 8, 34, 0, 53};
	//		   0   1  2   3   4  5   6  7  8  9  10  11 12
	
	int dim = sizeof(a)/sizeof(int);
	
	for(int i = 0; i < dim; i++){
		if(a[i] < i){
			cout << a[i] << " ";
		}
	}
	
		
	return 0;
}
