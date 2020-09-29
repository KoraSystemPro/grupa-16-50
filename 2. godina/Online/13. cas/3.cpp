/*
3. Za uneti proizvoljan string zameniti svaki karakter na poziciji deljivom sa 7, sa "+", svaki karakter na poziciji deljivom sa 2, sa "-",
   svaki karakter na poziciji deljivom sa 3, sa "$" i svaki karakter na poziciji deljivom sa 9, sa "/".
   Prioritet je sledecem redosledu: 9, 3, 2, 7
*/

#include <iostream>
#include <string>

using namespace std;

int main(){
	string niska = "Ovo je niska kojoj se trebaju zameniti karakteri.";
	cout << niska << endl;
	for(int i = 0; i < niska.length(); i++){
		if(i % 9 == 0){
			niska[i] = '/';
		} else if (i % 3 == 0){
			niska[i] = '$';
		} else if (i % 2 == 0){
			niska[i] = '-';
		} else if (i % 7 == 0){
			niska[i] = '+';
		}
	}
	cout << "Izmenjeni string: " << niska;
	
	
	return 0;
}
