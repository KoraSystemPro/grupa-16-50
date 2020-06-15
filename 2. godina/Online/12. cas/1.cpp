// 2. Za zadati string, uvecati svako prvo slovo na pocetku reci, pod pretpostavkom da su reci odvojene
//		jednim razmakom
#include <iostream>
#include <string>

using namespace std;

int main(){
	string poruka = "56 ovo je string kojem treba uvecati sva mala slova na pocetku reci.";
	cout << "Pocetni string: " << poruka  << endl;
	// o	v	o		j	e	p	o	r	u	k	a
	// 0	1	2	3	4	5	6	7	8	9	10	11
	for(int i = 0; i < poruka.length(); i++){
		// toupper(c)	c:  a -> A
		// tolower(c)	c: 	A -> a
		if(poruka[i-1] == ' '){
			poruka[i] = toupper(poruka[i]);
		} else if(i == 0){
			poruka[i] = toupper(poruka[i]);
		}
	}
	
	cout << "Promenjen string: " << poruka;
	
	return 0;
}
