#include <iostream>

using namespace std;

/*
Napisati funkciju int minimum(int x, int y, int z) koja
izracunava minimum tri broja. Napisati program koji ucitava tri cela broja i
ispisuje njihov minimum.
*/


/* 
   Funkcija racuna minimum tri cela broja. Promenljive u listi
   argumenata funkcije (x, y i z), kao i one deklarisane u samoj
   funkciji (m), lokalne su za tu funkciju, sto znaci da im
   se ne moze pristupiti nigde izvan funkcije minimum. 
*/
int minimum(int x, int y, int z){
	int m = x;
	if (m > y){
		m = y;
	}
	if (m > z){
		m = z;
	}
	
	return m;	
}

int main(){
	int a, b, c;
	cin >> a >> b >> c;
	
	cout << "Minimum od tri broja je: " << minimum(a, b, c);
	
	return 0;
}
