#include <iostream>

using namespace std;


int main(){
	int k, n;
	cin >> k >> n;
	// Brojevi deljivi i sa 17 i sa 2
	// U obrnutom smeru
	for(n; n > k; n=n-1){
		if(n % 2 == 0 && n % 17 == 0){	 // if(n % 34 == 0) // 2*17
			cout << n << " ";
		}
	}
	
	return 0;
}
