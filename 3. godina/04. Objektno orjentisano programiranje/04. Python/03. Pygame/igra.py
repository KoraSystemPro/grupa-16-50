import pygame
# Importujemo moduo koji zna sve dugmice na tastaturi
from pygame.locals import *

pygame.init()

# Pravimo nas ekran
prozor = pygame.display.set_mode((800, 600))

# Glavna petlja
program_radi = True
while program_radi == True:
    # 1. Obradjujemo ulaz korisnika
    for event in pygame.event.get():
        # [w, LCTRL, d, QUIT]
        # Pritisnuto X dugme na prozoru
        if event.type == pygame.QUIT:
            program_radi = False
        if event.type == pygame.KEYDOWN:
            # Proveravamo da ali je pritisnut ESC
            if event.key == K_ESCAPE:
                program_radi = False
                
    # 2. Azuriramo stanja svih objekata
    # Prozor na koji crtamo
    prozor.fill(pygame.Color("black"))
    # Crtamo krug n nzem prozoru
    pygame.draw.circle(prozor, pygame.Color(0, 255, 0), (400, 300), 30, 5)

    # 3. Pustamo frejm
    pygame.display.flip()

pygame.quit()