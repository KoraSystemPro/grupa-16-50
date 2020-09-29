// 1. Napisati program koji za uneti proizvoljan niz celih brojeva dužine 10, ispisuje niz sa indeksima iznad tabele.
//ispis:
//	0    1    2    3    4    5    6    7    8    9
// 1|   8|  10|   7|   4| 112|  43| 144|  18|  11|

#include <iostream>

using namespace std;

int main(){
	int a[10] = {1, 8, 10, 7, 4, 112, 43, 144, 18, 11};
	for(int i = 0; i < 10; i++){
		cout << "\t" << i;
	}
	cout << endl;
	for(int i = 0; i < 10; i++){
		cout << "\t" << a[i] << "|";
	}
	
	return 0;
}
