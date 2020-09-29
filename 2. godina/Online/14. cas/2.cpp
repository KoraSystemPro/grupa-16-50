/*
Napisati program koji za uneti proizvoljan niz celih brojeva dužine 10, 
ispisuje prosek svih elemenata.
1   8  10   7   4  112  43  144  18  11
ispis:
Prosek = 35.8
*/
#include <iostream>

using namespace std;

int main(){
	int niz[10] = {5, 6, 8, 9, 13, 5, 2, 2, -13, -9};
	int zbir = 0;
	
	for(int i = 0; i < 10; i++){
		zbir = zbir + niz[i];
	}
	
	float prosek = zbir / 10.0;
	cout << "Prosek: " << prosek;
	
	
	return 0;
}
