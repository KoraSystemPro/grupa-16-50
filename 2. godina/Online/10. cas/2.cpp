// 1. Za uneti proizvoljan string, ispisati ga u obrnutom redosledu (tj ispisati ga unazad)

#include <iostream>
#include <string>

using namespace std;

int main(){
	string poruka = "123string456";
	
	cout << "Prvobitni tekst: " << poruka << endl;
//	O	v	o		j	e		p	o	r	u	k	a
//	0	1	2	3	4	5	6	7	8	9	10	11	12

	string unazad = poruka;
	int index = 0;
	for(int i = poruka.length()-1; i >= 0; i--){
			unazad[index] = poruka[i];
			index++;
	}
	
	cout << "U nazad: " << unazad << endl;

	return 0;
}
