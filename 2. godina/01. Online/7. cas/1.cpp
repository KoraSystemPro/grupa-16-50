#include <iostream>

using namespace std;

/*
Napisati program koji za unetu pozitivnu celobrojnu vrednost n ispisuje odgovarajuce brojeve.
(a) Ispisati tablicu množenja brojeva od 1 do n.
n = 5
1	2	3	4	5
2	4	6	8	10
3	6	9	12	15
4	8	12	16	20
5	10	15	20	25
*/

int main(){
	int n;
	cout << "Unesite n: ";
	cin >> n;
	if(n < 0){
		cout << "n mora biti pozitivna vrednost!";
		return -1;
	}
	for(int i = 1; i <= n; i++){
		for(int j = 1; j <= n; j++){
			cout << i*j << "\t";
		}
		cout << endl;
	}
		
	return 0;
}
