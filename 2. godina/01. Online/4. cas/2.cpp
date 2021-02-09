#include <iostream>

using namespace std;

// Formira se niz od 10 celobrojnih clanova. Izracunati zbir elemenata niza.
int main(){
	int bul_zorana_dj[] = {6, 17, 15, 78, 3, 98, 7, 8, 34, 53}; 
	int uk_racun = 0;
	
	for(int i = 0; i < 10; i++){
		uk_racun = uk_racun + bul_zorana_dj[i];
	}
	cout << "Ukupan zbir je: " << uk_racun;
	
	
	return 0;
}
