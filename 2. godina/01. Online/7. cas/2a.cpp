#include <iostream>

using namespace std;

/*
Napisati program koji za uneti pozitivan ceo broj n, zvezdicama iscrtava odgovarajucu sliku.
(a) Slika predstavlja kvadrat stranice n sastavljen od zvezdica. 
n = 4
* * * *
* * * * 
* * * * 
* * * *
*/

int main(){
	int n;
	cout << "Unesite n: ";
	cin >> n;
	
	for(int i = 0; i < n; i++){
		for(int j = 0; j < n; j++){
			cout << "* ";	
		}
		
		cout << endl;
	}	
	
	return 0;
}
