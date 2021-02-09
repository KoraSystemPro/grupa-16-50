// 4. Napisati program koji briše uneti string i ispisuje prazan string na standardan izlaz kao i njegovu dužinu.
#include <iostream>
#include <string>

using namespace std;

int main(){
	string niska = "Ovo je neki string koji mora da se izbrise!";
	cout << "Originalan string:" << endl << niska << endl;
	cout << "Duzina stringa: " << niska.length() << endl;
	cout << "--------------------------------------------" << endl;
	niska.clear();
	cout << "Izbrisan string:" << endl << niska << endl;
	cout << "Duzina stringa: " << niska.length();	
	
	return 0;
}
