#include <iostream>

using namespace std;

/*

n = 4
i\j	0 1 2 3 4 5 6	
0	*
1	* * *
2	* * * * *
3	* * * * * * *

*/


int main(){
	int n;
	cout << "Unesite n: ";
	cin >> n;
	int br_zvezdica = 1;
	
	for(int i = 0; i < n; i++){
		for(int j = 0; j < br_zvezdica; j++){
			cout << "* ";
		}
		cout << "\t" << "zvezdice = " << br_zvezdica;
		br_zvezdica += 2;
		cout << endl;
	}
	
	
	return 0;
}
