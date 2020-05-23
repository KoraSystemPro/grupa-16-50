#include <iostream>
#include <cmath>

using namespace std;

/*
float abs(float a){
	if(a < 0){
		a *= -1;   //  -7  ->  7
	}
	
	return a;
}
*/
/*
void abs(float a){
	if(a < 0){
		a *= -1;   //  -7  ->  7
	}
}
*/

// Dat je niz od 10 realnih brojeva. Naci broj najbliži nuli i broj najdalji od nule.
int main(){
	float niz[10] = {2, 3, 15, -14, -12.5, -1.5, 0.2, 11, -25, 4};
	// niz[0] = abs(niz[0]);
	
	// 0   1   2   3  ...   +inf
	float najbliza = niz[0];
	float najdalja = niz[0];
	
	for(int i = 0; i < 10; i++){
		if(abs(niz[i]) < abs(najbliza)){
			najbliza = niz[i];	
		}
		if(abs(niz[i]) > abs(najdalja)){
			najdalja = niz[i];
		}
	}
	
	cout << "Najblizi nuli je: " << najbliza << endl;
	cout << "Najdalji od nule je: " << najdalja << endl;
	
	return 0;
}






