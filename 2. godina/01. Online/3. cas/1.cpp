#include <iostream>

using namespace std;


int main(){
	// 5 % 2 = 1     6 % 2 = 0
	// 5 / 2 = 2	 6 / 2 = 3
	
	// 5 % 5 = 0	 6 % 5 = 1
	// 5 / 5 = 1	 6 / 5 = 1
	
	// if (br % 2 == 0 && br % 5 == 0)
	// && -> i     	- logicka konjukcija (presek skupova)   -> if (br % 10 == 0)
	// || -> ili	- logicka disjunkcija (unija skupova)
	

	int k, n;
	cin >> k >> n;
	// k ..... n
	for(k; k < n; k++){
		if (k % 2 == 0 || k % 5 == 0){
			cout << k << " ";
		}
	}
	
	return 0;
}
