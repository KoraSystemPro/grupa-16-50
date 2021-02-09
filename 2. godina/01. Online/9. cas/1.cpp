/* 
Nati program koji ucitava ceo broj n (n = 2) i koji
iscrtava sliku kuce sa krovom: kuca je kvadrat stranice n, a krov jednakostranicni trougao stranice n.

Unesite broj n: 3
  *
 * *
* * *
*   *
* * *

n = 4
i = 0     *
i = 1  	 * *
i = 2 	*   *
	   * * * *
	   *     *
	   *     *
	   * * * *
*/

#include <iostream>

using namespace std;

int main(){
	int n;
	cout << "Unesite n: ";
	cin >> n;
	
	for(int i = 0; i < n-1; i++){
		// Ova petlja nam sluzi za pravljenje belina ispred prve zvezdice
		for(int j = 0; j < n-1-i; j++){
			cout << " ";
		}
		
		// Ova petlja ispisuje trougao
		for(int j = 0; j < 2*i+1; j++){
			if(j == 0 || j == 2*i){
				cout << "*";
			} else {
				cout << " ";
			}
		}
		
		cout << endl;
	}
	
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
