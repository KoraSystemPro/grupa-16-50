#include <iostream>

using namespace std;

/*
Napisati program koji ucitava pozitivan ceo broj n i ispisuje brojeve od 1 do n, 
zatim od 2 do n - 1, 3 do n - 2, itd. Ispis se završava kada nije moguce ispisati ni jedan broj.
n = 5
1 2 3 4 5
2 3 4 
3
*/

int main(){
	unsigned n;
	cout << "Unesite n: ";
	cin >> n;
	int levo = 1, desno = n;
	
	while(levo <= desno){
		for(int i = levo; i <= desno; i++){
			cout << i << " ";
		}
		
		levo++;
		desno--;
		cout << endl;
				
	}
	
	
	return 0;
}
