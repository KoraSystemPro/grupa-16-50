using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Uvod
{
    class Program
    {
        class Pravougaonik
        {
            // Svojstva / polja
            public float a;
            public float b;
            public String boja;

            // Kontruktor
            public Pravougaonik()
            {
                a = 10;
                b = 50;
                boja = "bela";
            }
            public Pravougaonik(String x)
            {
                a = 0;
                b = 0;
                boja = x;
            }

            public Pravougaonik(float prvaStranica, float drugaStranica, String bojaPravougaonika)
            {
                a = prvaStranica;
                b = drugaStranica;
                boja = bojaPravougaonika;
            }

            // Metode / funkcije
            public float povrsina()
            {
                float p = a * b;
                return p;
            }

            public float obim()
            {
                float o = 2 * (a + b);
                return o;
            }

            // n -> a+n, b+n
            public void uvecaj_za_n(float n)
            {
                a = a + n;
                b = b + n;
            }

        }

        
        static void Main(string[] args)
        {
            // cin --> Console.ReadLine()
            // cout --> Console.WriteLine()

            // Klasa - Opis, blueprint(shema), koji opisuje neka opsta svojstva i funkcije te klase
            // Objekat - Predstavlja jednu instancu (prikazivanje) neke klase.
            /*      Automobil->klasa
             *      svojstva:   boja, motor, kubikaza, snaga, tockove, model, marka, pogon....
             *      funkcije:   ubrzaj, promena brzine, uspori, upali brisace,...
             *      
             */
            // Automobil BMW_M5
            // BMW_M5 - objekat, odnosno on je jedan primer objekta iz klase Automobil
            // BMW_M5.marka = "BMW"
            // BMW_M5.model = "M5"
            // BMW_M5.boja = "crna"
            // BMW_M5.motor = "dizel"
            // BMW_M5.snaga = 365;

            //Pravougaonik p1;            // Rezervise ime p1 za Pravougaonik
            //p1 = new Pravougaonik();    // Ovo ovde dodeljuje p1 svojstva Pravougaonika
            Pravougaonik p1 = new Pravougaonik();
            
            // p2 -> a:15 b:30 boja:plavi
            
            p1.a = 5;
            p1.b = 10;
            p1.boja = "crveni";
            Console.WriteLine(p1.a + " " + p1.b + " " + p1.boja);

            Pravougaonik p3 = new Pravougaonik();
            Console.WriteLine(p3.a + " " + p3.b + " " + p3.boja);

            Pravougaonik p4 = new Pravougaonik("zelena");
            Console.WriteLine(p4.a + " " + p4.b + " " + p4.boja);

            Pravougaonik p5 = new Pravougaonik(100, 500, "crni");
            Console.WriteLine(p5.a + " " + p5.b + " " + p5.boja);

            Pravougaonik p6 = new Pravougaonik(10, 50, "beli");
            float pov = p6.povrsina();
            Console.WriteLine("Povrsina pravougaonika dim " + p6.a + " x " + p6.b + ": " + pov);
            p6.uvecaj_za_n(10);
            float obim = p6.obim();
            Console.WriteLine("Obim pravougaonika dim " + p6.a + " x " + p6.b + ": " + obim);


            Console.ReadKey();
        }
    }
}
