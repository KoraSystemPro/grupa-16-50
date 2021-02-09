#include <iostream>

using namespace std;

/*
Napisati program koji za unetu cenu proizvoda ispisuje
najmanji broj novcanica koje je potrebno izdvojiti prilikom placanja proizvoda.
Na raspolaganju su novcanice od 5000, 2000, 1000, 500, 200, 100, 50, 20, 10 i 1 dinar. 
Cena proizvoda je pozitivan ceo broj
*/

// 18865 = 3*5000 + 1*2000 + 1*1000 + 1*500 + 1*200 + 1*100+ 1*50 + 1*10 + 5*1

int main(){
	int cena;
	cout << "Unesite cenu koja treba da se plati: ";
	cin >> cena;
	
	cout << cena / 5000 << "*5000 + ";
	cena = cena % 5000;
	cout << cena / 2000 << "*2000 + ";
	cena = cena % 2000;
	cout << cena / 1000 << "*1000 + ";
	cena = cena % 1000;
	cout << cena / 500 << "*500 + ";
	cena = cena % 500;
	cout << cena / 200 << "*200 + ";
	cena = cena % 200;
	cout << cena / 100 << "*100 + ";
	cena = cena % 100;
	cout << cena / 50 << "*50 + ";
	cena = cena % 50;
	if (cena/20 != 0){
		cout << cena / 20 << "*20 + ";
		cena = cena % 20;
	}
	cout << cena / 10 << "*10 + ";
	cena = cena % 10;
	cout << cena / 1 << "*1";
	cena = cena % 1;
	
	return 0;
}
