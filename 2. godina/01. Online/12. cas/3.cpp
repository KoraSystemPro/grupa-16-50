#include <iostream>

using namespace std;

// n = 3
// * * *
// * * *
// * * *
int main(){
	int n;
	cout << "Unesite n: ";
	cin >> n;	
	
	for(int i = 0; i < n; i++){
		for(int j = 0; j < n; j++){
			cout << "* ";
		}
		cout << endl;
	}
	
	return 0;
}
