/*
Napisati program koji za uneti proizvoljan niz celih brojeva dužine 10, 
proverava da li se uneti ceo broj n, nalazi u nizu, i ako se nalazi, ispisati poruku "Postoji." 
i poziciju elementa u nizu, a ako se ne nalazi, ispisati "Ne postoji.".
1   8  10   7   4  112  43  144  18  11
0	1	2	3	4	5	6	7	8	9
n = 43
ispis: 
"Postoji, na poziciji 7"
*/
#include <iostream>

using namespace std;

int main(){
	int niz[10];
	int n;
	cout << "Unesite niz od 10 brojeva:" << endl;
	for(int i = 0; i < 10; i++){
		cin >> niz[i];
	}
	cout << "Unesite broj koji se trazi u nizu: ";
	cin >> n;

	bool postoji = false;
	for(int i = 0; i < 10; i++){
		if(n == niz[i]){
			cout << "Postoji, na poziciji " << i+1 << "." << endl;
			postoji = true;
		}
	}
	if(postoji == false){
		cout << "Ne postoji." << endl;
	}
	
	
	
	return 0;
}
