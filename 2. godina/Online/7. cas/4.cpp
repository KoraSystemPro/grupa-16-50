#include <iostream>

using namespace std;

/*
Napisati program koji za uneti neparan pozitivan broj n korišcenjem znaka + iscrtava veliko plus dimenzije n.
n = 5
i\j 0 1 2 3 4
0	    +   
1	    +   
2	+ + + + +
3	    + 
4	    +  
n = 4
i\j 0 1 2 3
0	  + +   
1	+ + + +  
2	+ + + +
3	  + + 

1 2 3 4  (sredina: 2, 3)
1 2 3 4 5 (sredina: 3)
*/

int main(){
	int n;
	cout << "Unesite n: ";
	cin >> n;
	
	for(int i = 0; i < n; i++){
		for(int j = 0; j < n; j++){
			if(i == n/2 || j == n/2){
				cout << "+ ";
			} else {
				cout << "  ";
			}
		}
		
		cout << endl;
	}	
	
	return 0;
}
