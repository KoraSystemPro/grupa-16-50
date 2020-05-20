#include <iostream>

using namespace std;

// Izracunati prosek (aritmeticku sredinu) svih elemenata niza od 10 realnih elemenata.
int main(){
	float niz[10] = {1.32, 5, 32.7, 6.43, 76.23, 43.8, 12, 3, -54.3, 6};
	// prosek = zbir_svih / broj_elem
	
	float zbir_svih = 0;
	for(int i = 0; i < 10; i++){
		zbir_svih = zbir_svih + niz[i];
	}
	
	int dimenzija = 10;
	float prosek = zbir_svih/dimenzija;
	
	cout << "Prosek deset clanova niza je: " << prosek;
	

	
	
	
	return 0;
}
