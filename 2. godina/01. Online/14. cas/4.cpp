/*
Za unete cele brojeve n, m ispisati pravougaonik sacinjen od "*" dimenzija n*m i povrsinu.
ispis:
n = 4
m = 7
* * * * * * *
* * * * * * *
* * * * * * *
* * * * * * *
Površina = 28
*/
#include <iostream>

using namespace std;

int main(){
	int n, m;
	cin >> n >> m;
	for(int i = 0; i < n; i++){
		for(int j = 0; j < m; j++){
			cout << "* ";
		}
		cout << endl;
	}
	cout << "Povrsina: " << n*m;
	return 0;
}
