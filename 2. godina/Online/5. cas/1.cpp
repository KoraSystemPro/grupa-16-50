/*
Podsecanje

float odeljenje_4_2[4] = {3.65, 5.0, 4.56, 4}
							0	1	  2	   3
							
							odeljenje_4_2[2] // 4.56	 
							
float odeljenje_4_1[100]; // deklaracija
odeljenje_4_1[0] = 3.65;
odeljenje_4_1[1] = 4.34;
odeljenje_4_1[2] = 5.0;

for(int i = 0; i < 3; i++){
	cin >> odeljenje_4_1[i];
}

*/

#include <iostream>

using namespace std;


// Izracunaj aritmeticku sredinu i ispiši clanove niza vece od aritmeticke sredine(prosek). Ako niz sadrzi cele brojeve.
int main(){
	int niz[] = {33, -22, 77, 1, 3, 5, 7, 9, 0, -7};
	//	indeksi  0	  1	  2   3  4  5  6  7  8   9
	int n = sizeof(niz) / sizeof(niz[0]); // sizeof(int)
	
	float prosek = 0;   // prosek = zbir_svih / br_svih
	for(int i = 0; i < n; i++){
		prosek = prosek + niz[i];
	}
	prosek = prosek / n;
	
	cout << "Prosek niza je: " << prosek << endl;
	cout << "Clanovi veci od proseka su: " << endl;
	
	for(int i = 0; i < n; i++){
		if(niz[i] > prosek){
			cout << niz[i] << " ";
		}
	}
	
	
	return 0;
}


















