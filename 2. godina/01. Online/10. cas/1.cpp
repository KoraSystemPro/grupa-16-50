#include <iostream>
#include <string>

using namespace std;

int main(){
	string str1 = "Pozdrav";
	string str2 = "svete";
	string str3;
	
	// Kopiranje stringa
	str3 = str1;
	cout << "str3: " << str3 << endl;
	
	// Nadovezivanje stringa
	str3 = str3 + " " + str2 + "!";
	cout << "Nadovezan str2 na str3: " << str3 << endl;
	
	// Velicina stringa
	// .length()  ili .size() rade isto
	cout << "Velicina str3: " << str3.length() << endl;
	
	// Ubacuje se prosledjen string (2. argument) na zadatu poziciju (1. argument)
	// .insert()
	str3.insert(3, "|ubaceno|");
	cout << "str3.insert(..): " << str3 << endl;
	
	
	return 0;
}

