// 1. Napisati program koji za uneto ime i prezime ispisuje poruku: "Dobrodošao, $(ime) $(prezime)!"

#include <iostream>
#include <string>

using namespace std;

int main(){
	string ime;
	string prezime;
	cout << "Ime: ";
	cin >> ime;
	cout << "Prezime: ";
	cin >> prezime;
	
	cout << "Dobrodosao, " << ime << " " << prezime << "!";
	
	
	return 0;
}
