using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace PapirKamenMakaze
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        int covek1 = 1;

        private void radioButton1_CheckedChanged(object sender, EventArgs e)
        {
            pictureBox1.Image = PapirKamenMakaze.Properties.Resources.paper;
            covek1 = 1;
        }

        private void radioButton2_CheckedChanged(object sender, EventArgs e)
        {
            pictureBox1.Image = PapirKamenMakaze.Properties.Resources.rock;
            covek1 = 2;
        }

        private void radioButton3_CheckedChanged(object sender, EventArgs e)
        {
            pictureBox1.Image = PapirKamenMakaze.Properties.Resources.scissors;
            covek1 = 3; 
        }

        
        private void button1_Click(object sender, EventArgs e)
        {
            // papir  - 1
            // kamen  - 2
            // makaze - 3
            // Napravimo objekat klase Random
            Random rnd = new Random();
            // Generisemo kompjuteru potez (broj od 1 do 3)
            int kompjuter = rnd.Next(1, 4);

            // Menjanje slika u zavisnosti od poteza kompjutera
            switch (kompjuter)
            {
                case 1:
                    pictureBox2.Image = PapirKamenMakaze.Properties.Resources.paper;
                    break;
                case 2:
                    pictureBox2.Image = PapirKamenMakaze.Properties.Resources.rock;
                    break;
                case 3:
                    pictureBox2.Image = PapirKamenMakaze.Properties.Resources.scissors;
                    break;
                default:
                    MessageBox.Show("Došlo je do greške!");
                    break;
            }
            //Prevedno u if naredbu
            //if (kompjuter == 1)
            //{
            //    pictureBox2.Image = PapirKamenMakaze.Properties.Resources.paper;
            //}
            //else if (kompjuter == 2)
            //{
            //    pictureBox2.Image = PapirKamenMakaze.Properties.Resources.rock;
            //}
            //else if (kompjuter == 3)
            //{
            //    pictureBox2.Image = PapirKamenMakaze.Properties.Resources.scissors;
            //}
            //else
            //{
            //    MessageBox.Show("Došlo je do greške!");
            //}

            // Pobedio je covek
            if ((covek1 == 1 && kompjuter == 2) || (covek1 == 2 && kompjuter == 3) || (covek1 == 3 && kompjuter == 1))
            {
                MessageBox.Show("Pobedio si!");
            }
            // Nereseno
            else if ((covek1 == 1 && kompjuter == 1) || (covek1 == 2 && kompjuter == 2) || (covek1 == 3 && kompjuter == 3))
            {
                MessageBox.Show("Igrali ste nerešeno!");
            }
            // Kompjuter pobedio (obuhvata else)
            else
            {
                MessageBox.Show("Pobedio je kompjuter!");
            }

        }
    }
}
