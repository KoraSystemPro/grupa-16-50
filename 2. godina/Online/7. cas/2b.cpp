#include <iostream>

using namespace std;

/*
Napisati program koji za uneti pozitivan ceo broj n, zvezdicama iscrtava odgovarajucu sliku.
(b) Slika predstavlja rub kvadrata dimenzije n
n = 5
* * * * *
*       *
*       *
*       *
* * * * *
*/

int main(){
	int n;
	cout << "Unesite n: ";
	cin >> n;
	
	for(int i = 0; i < n; i++){
		for(int j = 0; j < n; j++){
			if(i == 0 || i == n-1 || j == 0 || j == n-1){
				cout << "* ";
			} else {
				cout << "  ";
			}
		}
		
		cout << endl;
	}	
	
	return 0;
}
