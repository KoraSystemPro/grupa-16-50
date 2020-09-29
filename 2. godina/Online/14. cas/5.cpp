/*
Za unete cele brojeve n, m ispisati pravougaonik sacinjen od "*" dimenzija n*m i povrsinu.
ispis:
n = 4
m = 7
i\j	0 1 2 3 4 5 6
0	* * * * * * *
1	* 		    *
2	*		    *
3	* * * * * * *
Površina = 28
*/
#include <iostream>

using namespace std;

int main(){
	int n, m;
	cin >> n >> m;
	for(int i = 0; i < n; i++){
		for(int j = 0; j < m; j++){
			if(i == 0 || j == 0 || i == n-1 || j == m-1){
				cout << "* ";
			} else {
				cout << "  ";
			}
				
		}
		cout << endl;
	}
	cout << "Povrsina: " << n*m;
	
	return 0;
}
