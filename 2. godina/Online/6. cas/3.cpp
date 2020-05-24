#include <iostream>
#include <iomanip>

using namespace std;

/*
Napisati funkciju float razlomljeni_deo(float x) koja
izracunava razlomljeni deo broja x. Napisati program koji ucitava jedan realan
broj i ispisuje njegov razlomljeni.

	96.27895
-	96
	--------
	 0.27895
*/

// int globalna_pr = 0; 	Ovo je globalna promenljiva,
// Moze joj pristupiti bilo koja funkcija

float razlomljeni_deo(float x){
	// globalna_pr = 3;
	int ceo_deo = (int)x;
	float razlika = x - ceo_deo;

	return razlika;
}


int main(){
	cout << setprecision(8);
	float br;
	cin >> br;
	cout << razlomljeni_deo(br);	// Ovo je poziv funkcije

	
	return 0;
}

