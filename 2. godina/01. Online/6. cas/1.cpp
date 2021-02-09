#include <iostream>

using namespace std;


int main(){
	float a = 5;
	float b = 0;
	
	if(b == 0){
		cout << "Nedozvoljeno je deljenje sa 0!" << endl;
		return -1;
	}
	float rez = a / b;
	cout << rez;
	
	
	return 0;
}
