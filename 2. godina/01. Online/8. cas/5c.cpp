#include <iostream>

using namespace std;

/*
Napisati program koji ucitava pozitivan ceo broj n, a potom iscrtava odgovarajucu sliku.
(c) Slika predstavlja pravougli trougao sastavljen od zvezdica. Kateta trougla
je dužine n, a prav ugao se nalazi u gornjem desnom uglu slike.
n = 4
i\j	0 1 2 3
0	* * * *
1	  * * *
2	    * *
3	      *

*/

int main(){
	int n;
	cout << "Unesite n: ";
	cin >> n;

	for(int i = 0; i < n; i++){
		// Ova petlja je zasluzna za razmake koji prethode zvezdice
		for(int j = 0; j < i; j++){
			cout << "  ";
		}		
		// Ova petlja ispisuje tacan broj zvezdica
		for(int j = 0; j < n-i; j++){
			cout << "* ";
		}
		
		
		cout << endl;
	}	
	
	return 0;
}
