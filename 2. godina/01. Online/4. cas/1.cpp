//  int a[5];
//  a[0] = 89;
//  a[1] = 45;
//  a[2] = -1;
//  a[3] = 43;
//  a[4] = 12;
//  int a[] = {6, 7, 15, -78, -3, 98, 7, 8};  // U viticaste zagrade se pisu clanovi niza, na koje se niz
//	 inicijalizuje i na osnovu broja elemenata, C++ sam alocira pravilnu dimenziju. U ovom slucaju dimenziju 8.

#include <iostream>

using namespace std;

// Napisati program kojim se unosi niz od 9 celobrojnih elemenata i potom ispisuju elementi niza.
int main(){
	int br[9];
	for(int i = 0; i < 9; i++){
		cin >> br[i];
	}
	
	for(int i = 0; i < 9; i++){
		cout << br[i] << " ";
	}
	
	
	return 0;
}
