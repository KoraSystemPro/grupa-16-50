// 2. Napisati program, koji za zadati string, poveceva prvo slovo svake reci
// ovo je neki string -> Ovo Je Neki String
#include <iostream>
#include <string>

using namespace std;

int main(){
	string poruka = "ovo je neki string";
	for(int i = 0; i < poruka.size(); i++){
		if(i == 0){
			poruka[i] = toupper(poruka[i]);
		} else if(poruka[i-1] == ' '){
			poruka[i] = toupper(poruka[i]);
		}
		
	}
	// toupper() - Uvelicava slovo
	// tolower() - Smanjuje slovo
	cout << "String sa uvelicanim slovima: " << poruka;
	
	return 0;
}
