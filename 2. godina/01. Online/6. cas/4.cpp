/*
Napisati funkciju int zbir_delilaca(int n) koja izracunava zbir delilaca broja n. 
Napisati program koji ucitava ceo pozitivan broj k i ispisuje zbir delilaca svakog 
broja od 1 do k. U slucaju neispravnog unosa, ispisati odgovarajucu poruku o grešci.
*/

// 1: 1
// 2: 2 + 1 = 3
// 3: 3 + 1 = 4
// 4: 4 + 2 + 1 = 7
// ......

#include <iostream>

using namespace std;

int zbir_delilaca(int n){
	/* Inicijalizacija zbira na 0. */
	int zbir = 0;

 	/* Svaki broj i izmedju 1 i sqrt(x) koji deli broj x se dodaje
     zbiru. Ako je u pitanju broj za koji vazi da je i*i
     jednako x, onda se dodaje samo vrednost i. U suprotnom se 
     pored vrednosti i dodaje i x/i. 
     Na primer, za x=6, kada je i=2, dodaju se i 2 i 6/2 = 3, 
     a za x = 4, kada je i=2, dodaje se samo 2. */
	for(int i = 1; i*i <= n; i++){
		if(n % i == 0){
			zbir += i;
			if(i != n / i){
				zbir += n / i;
			}
		}
	}
	
	return zbir;
}

int main(){
	int k;
	cin >> k;
	
	/* Provera ispravnosti ulaznih podataka. */
	if (k <= 0){
		cout << "Greksa, netacan unos!";
		return -1;
	}
	
	for(int i = 1; i <= k; i++){
		cout << zbir_delilaca(i) << " ";
		
	}
	
	return 0;
}
