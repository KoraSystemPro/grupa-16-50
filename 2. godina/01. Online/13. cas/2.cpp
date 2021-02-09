// 2. Napisati program koji ispisuje dužinu unetog stringa.

#include <iostream>
#include <string>

using namespace std;

int main(){
	string niska = "Ovo je neki string, kome se mora naci duzina.";
	cout << niska << endl;
	cout << "Duzina stringa: " << niska.length();
	
	return 0;
}
