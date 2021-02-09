/*
Napisati program koji za uneti proizvoljan niz celih brojeva dužine 10, 
ispisuje prosek svih elemenata koji su deljivi sa 3, ili sa 4.
*/
#include <iostream>

using namespace std;

int main(){
	int niz[10] = {5, 6, 8, 9, 13, 5, 2, 2, -13, -9};
	int zbir = 0;
	int brojac = 0;
	for(int i = 0; i < 10; i++){
		if(niz[i] % 3 == 0 || niz[i] % 4 == 0){
			zbir = zbir + niz[i];
			brojac++;
		}
	}
	
	float prosek = float(zbir) / brojac;
	cout << "Prosek: " << prosek;
	
	
	return 0;
}
