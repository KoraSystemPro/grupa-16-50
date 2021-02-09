#include <iostream>

using namespace std;

/*
Napisati program koji za unetu kolicinu jabuka u kilogramima i unetu cenu po kilogramu 
ispisuje ukupnu cenu date kolicine jabuka. 
*/

// 20kg * 120din/kg = 2400din

int main(){
	int kolicina, cena_po_kg;
	cout << "Unesite kolicinu jabuka: ";
	cin >> kolicina;
	cout << "Unesite cenu  jabuka po kilogramu: ";
	cin >> cena_po_kg;
	
	cout << "Molimo platite: " << kolicina * cena_po_kg << "din";
	
	
	
	return 0;
	
}
