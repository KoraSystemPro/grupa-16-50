// 3. Za zadati string, pronaci broj ponavljanja samoglasnika (A, E, I, O, U)
#include <iostream>
#include <string>

using namespace std;

int main(){
	string poruka = "Ovo je poruka koja sadrzi neki broj samoglasnika u sebi. Samoglasnici su A, E, I, O, U.";
	cout << "Recenica: " << poruka << endl;
	unsigned a = 0, e = 0, i = 0, o = 0, u = 0;
	for(int x = 0; x < poruka.length(); x++){
		if(poruka[x] == 'a' || poruka[x] == 'A'){
			a++;
		} else if(poruka[x] == 'e' || poruka[x] == 'E'){
			e++;
		} else if(poruka[x] == 'i' || poruka[x] == 'I'){
			i++;
		} else if(poruka[x] == 'o' || poruka[x] == 'O'){
			o++;
		} else if(poruka[x] == 'u' || poruka[x] == 'U'){
			u++;
		}
	}
	cout << "Broj ponavljanja samoglasnika:" << endl;
	cout << "\tA: " << a << endl;
	cout << "\tE: " << e << endl;
	cout << "\tI: " << i << endl;
	cout << "\tO: " << o << endl;
	cout << "\tU: " << u << endl;
	cout << "Ukupan broj samoglasnika: " << a+e+i+o+u << endl;
	
	return 0;
}
