#include <iostream> // cin, cout

using namespace std;

/*
Napisati program koji pomaže kasirki da izracuna ukupan
racun ako su poznate cene dva kupljena artikla. Cene artikala su pozitivni celi
brojevi. Napomena: Pretpostaviti da je unos ispravan
*/

int main(){
	int a1, a2;
	cout << "Unestite cenu prvog artikla: ";
	cin >> a1;
	cout << "Unestite cenu drugog artikla: ";
	cin >> a2;
	
	cout << "Ukupna cena je: " << a1 + a2;
	

	
	return 0;
}
