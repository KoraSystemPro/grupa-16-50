#include <iostream>

using namespace std;

/*
Napisati program koji za uneti pozitivan cetvorocifreni
broj:
(a) izracunava proizvod cifara
(b) izracunava razliku sume krajnjih i srednjih cifara
(c) izracunava sumu kvadrata cifara
(d) izracunava broj koji se dobija zapisom cifara u obrnutom poretku
(e) izracunava broj koji se dobija zamenom cifre jedinice i cifre stotine


1234  
(1 + 4)  -  (2 + 3)

Primer
--------
int br = 1234
1234
j = br % 10  	// 4
1234 / 10 = 123
d = br % 10  	// 3
123 / 10 = 12
s =  br % 10 	// 2
12 / 10 = 1
h = br			// 1
*/

int main(){
	int br;
	cout << "Unesite zeljeni cetvorocifreni broj: ";
	cin >> br;
	
	int j, d, s, h;
	j = br % 10;
	d = (br / 10) % 10;
	s = (br / 100) % 10;
	h = br / 1000;

	// (a) izracunava proizvod cifara
	cout << "Proizvod cifara je: " << j * d * s * h << endl;
	// (b) izracunava razliku sume krajnjih i srednjih cifara
	cout << "Razliku sume krajnjih i srednjih cifara: " << (j+h) - (s+d) << endl;
	// (c) izracunava sumu kvadrata cifara
	// P_kvadrata = a * a  >>  a^2
	cout << "Suma kvadrata cifara broja je: " << j*j + d*d + s*s + h*h << endl;
	// (d) izracunava broj koji se dobija zapisom cifara u obrnutom poretku
	// hsdj 
	// jdsh = j*1000 + d*100 + s*10 + h*1 
	// 3254 = 3000 + 200 + 50 + 4
	// 3*1000 + 2*100 + 5*10 + 4*1
	int novi_br1 = j*1000 + d*100 + s*10 + h*1;
	cout << "Broj zapisan u obrnutom smeru je: " << novi_br1 << endl;
	// (e) izracunava broj koji se dobija zamenom cifre jedinice i cifre stotine
	// hjds = h*1000 + j*100 + d*10 + s*1
	int novi_br2 = h*1000 + j*100 + d*10 + s*1;
	cout << "Broj sa zamenjenim ciframa jedinica i stotina je: " << novi_br2 << endl;
	
	
	return 0;
}
