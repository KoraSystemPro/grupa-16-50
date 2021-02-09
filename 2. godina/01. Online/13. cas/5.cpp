// 5. Napisati program kojem se prvo sa ulaza unosi string "lozinka" i nakon toga traži ponovan unos stringa radi provere, ako su stringovi isti ispisati "Tacna lozinka!", ako nisu "Netacna lozinka!".
#include <iostream>
#include <string>

using namespace std;

int main(){
	string lozinka;
	cout << "Unesite lozinku: ";
	cin >> lozinka;
	
	string potvrda;
	cout << "Potvrdite lozinku: ";
	cin >> potvrda;
	
	bool ispravno = true;
	// uros
	// marija
	// Eleminise razlicite duzine stringova
	if (lozinka.length() != potvrda.length()){
		ispravno = false;
	}
	
	// marija
	// mairaj
	// stringovi su iste duzine, ali razlicitog sadrzaja
	for(int i = 0; i < lozinka.length(); i++){
		if(lozinka[i] != potvrda[i]){
			ispravno = false;
		}
	}
	
	if(ispravno == true){
		cout << "Lozinka je ispravna!";
	} else {			
		cout << "Lozinka je neispravna!";
	}
	
	
	
	return 0;
}
