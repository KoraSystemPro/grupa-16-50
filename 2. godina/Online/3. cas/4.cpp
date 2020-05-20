#include <iostream>

using namespace std;


int main(){
	int n;
	cin >> n;
	int a[n];
	// 0 ..... n-1

	for(int i = 0; i < n; i++){
		cin >> a[i];
	}
	for(int i=0; i < n; i++){
		cout << a[i] << " ";
	}
	
	return 0;
}
