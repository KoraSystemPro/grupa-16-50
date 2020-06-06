#include <iostream>
#include <cstring>

using namespace std;

int main(){
	/*
	"123" + "Cao" = "123Cao"
	automobil = {
		// Svojstva
		boja = "crvena",
		snaga = 130,
		marka = "Mercedes",
		// Metode/funkcije
		function ubrzaj(){
			.....
		},
		function uspori(){
			.....
		}
	}
	cout << automobil.marka
	automobil.ubrzaj()
	
	char a = ';';
	char b = 'c';
	sizeof(int) -> 4 Byte
	sizeof(char) -> 1 Byte
	*/
	
	// char poruka[] = "Pozdrav";
	//char poruka[8] = {'P', 'o', 'z', 'd', 'r', 'a', 'v', '\0'};
	//char ime[] = "Luka";
	// cout << poruka + ime; Ovo je netacno!!!
	/*
	strcpy(s1, s2)	Kopira sadrzaj stringa s2 u string s1	--- s1 = s2
	strcat(s1, s2)	Nadovezuje string s2 na kraj stringa s1	--- s1 + s2
	strlen(s1)		Vraca duzinu stringa (br. karaktera)
	strcmp(s1, s2)	Vraca 0 ako su stringovi jednaki, vrednost manju od 0
					ako je s1 < s2 i vecu vrednost od 0 ako je s1 > s2	
	.........
	*/
	
	char str1[10] = "Pozdrav";
	char str2[10] = "Luka";
	char str3[20];
	
	strcpy(str3, str1);
	cout << "strcpy(str3, str1): " << str3 << endl;
	
	strcat(str3, " ");
	strcat(str3, str2);
	strcat(str3, "!");
	cout << "strcat(str3, str2): " << str3 << endl;
	
	int len = strlen(str3);
	cout << "strlen(str3): " << len;
	
	

	
	return 0;
}
