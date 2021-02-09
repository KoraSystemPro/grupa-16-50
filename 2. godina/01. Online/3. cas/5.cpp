#include <iostream>

using namespace std;

// Zbir
int main(){
	int n;
	cin >> n;
	int a[n];
	// 0 ..... n-1

	for(int i = 0; i < n; i++){
		cin >> a[i];
	}
	
	int zbir = 0;
	for(int i = 0; i < n; i++){
		zbir = zbir + a[i];
	}
	
	cout << "Zbir clanova niza a je: " << zbir;
	
	return 0;
}
