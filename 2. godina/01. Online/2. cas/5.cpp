#include <iostream>

using namespace std;

/*
Napisati program koji ucitava težinu avionskog tereta izraženu u funtama, 
konvertuje je u kilograme.
Uputstvo: Jedna funta ima 0,45359237 kilograma.
*/

int main(){
	float teret;
	cout << "Unesite tezinu aviona izrazenu u funtama: ";
	cin >> teret;
	
	teret = teret * 0.4535923;
	cout << teret << "kg";
	
	
	
	return 0;
}
