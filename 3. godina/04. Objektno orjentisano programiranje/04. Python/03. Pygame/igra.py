import pygame
# Importujemo moduo koji zna sve dugmice na tastaturi
from pygame.locals import *

pygame.init()


# Globalne promenljive
EKRAN_SIRINA = 800
EKRAN_VISINA = 600

# Pravimo nas ekran
prozor = pygame.display.set_mode((EKRAN_SIRINA, EKRAN_VISINA))


class Igrac(pygame.sprite.Sprite):
    # Svojstva

    # Konstruktor
    def __init__(self):
        # Pre nego sto budemo napravili nas konstruktor, moramo pozvati konstruktor klasae Sprite
        pygame.sprite.Sprite.__init__(self)

        self.povrs = pygame.Surface((25, 50))
        self.povrs.fill(pygame.Color("white"))
        self.pravougaonik = self.povrs.get_rect() # x, y koordinate od kojih cemo crtati povrs + jos dosta drugih funkcionalnosti

    # Metode
    

igrac = Igrac()
# Glavna petlja
program_radi = True
while program_radi == True:
    # 1. Obradjujemo ulaz korisnika
    for dogadjaj in pygame.event.get():
        # [w, LCTRL, d, QUIT]
        # Pritisnuto X dugme na prozoru
        if dogadjaj.type == pygame.QUIT:
            program_radi = False
        if dogadjaj.type == pygame.KEYDOWN:
            # Proveravamo da ali je pritisnut ESC
            if dogadjaj.key == K_ESCAPE:
                program_radi = False
                
    # 2. Azuriramo stanja svih objekata
    # Prozor na koji crtamo
    prozor.fill(pygame.Color("black"))

    # povrs = pygame.Surface((100, 100))
    # povrs.fill((100, 50, 200))
    # # Block transfer
    # prozor.blit(povrs, (EKRAN_SIRINA/2 - povrs.get_width()/2, EKRAN_VISINA/2 - povrs.get_height()/2))
    # Crtamo krug n nzem prozoru
    # pygame.draw.circle(prozor, pygame.Color(0, 255, 0), (400, 300), 30, 5)

    # Pravim igraca i 'lepim' ga na nas prozor(ekran)
    prozor.blit(igrac.povrs, igrac.pravougaonik)

    # 3. Pustamo frejm
    pygame.display.flip()

pygame.quit()