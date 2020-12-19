#include <iostream>

using namespace std;

/*
Napisati program koji ucitava pozitivan ceo broj n, a potom iscrtava odgovarajucu sliku.
(a) Slika predstavlja pravougli trougao sastavljen od zvezdica. Kateta trougla
je dužine n, a prav ugao se nalazi u gornjem levom uglu slike.
n = 4
i\j	0 1 2 3
0	* * * *
1	* * *
2	* *
3	*

*/

int main(){
	int n;
	cout << "Unesite n: ";
	cin >> n;
	int duzina = n;
	
	for(int i = 0; i < n; i++){
		for(int j = 0; j < duzina; j++){
			cout << "* ";
		}
		duzina--;
		cout << endl;
	}	
	
	return 0;
}
