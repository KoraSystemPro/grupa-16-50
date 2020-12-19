#include <iostream>

using namespace std;
/*
	(e) Slika predstavlja naopacke ispisanu piramidu, napravljenu od * visine n.
		n = 5
	0	* * * * * * * * *
	1	  * * * * * * *
    2		* * * * *
    3  		  * * *
    4    		*
*/


int main(){
	int n;
	cout << "Unesite n: ";
	cin >> n;
	
	for(int i = n; i >= 1; i--){
		for(int j = 0; j < n-i; j++){
			cout << "   ";
		}
		for(int j = 0; j < 2*i-1; j++){
			cout << " * ";
		}
		
		
		cout << endl;
	}
	
	
	return 0;
}
