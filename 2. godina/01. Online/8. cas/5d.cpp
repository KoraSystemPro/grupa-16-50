#include <iostream>

using namespace std;
/*
(c) Slika predstavlja trougao sastavljen od zvezdica. Trougao se dobija spajanjem dva pravougla 
	trougla kateta dužine n, pri cemu je prav ugao prvog
	trougla u njegovom donjem levom uglu, dok je prav ugao drugog trougla u
	njegovom gornjem levom uglu, a spajanje se vrši po horizontalnoj kateti.
	n = 3
i:	0	*
	1	* *
	2	* * *
	3	* *
	4	*

*/


int main(){
	int n;
	cout << "Unesite n: ";
	cin >> n;
	
	int br_zvezdica = 1;
	for(int i = 0; i < 2*n-1; i++){
		for(int j = 0; j < br_zvezdica; j++){
			cout << "* ";
		}
		
		if(i < n-1){
			br_zvezdica++;
		} else {
			br_zvezdica--;	
		}
		
		
		cout << endl;
	}
	
	
	return 0;
}
