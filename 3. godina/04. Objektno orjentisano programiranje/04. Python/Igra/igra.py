# Importujemo i inicijalizujemo pygame biblioteku
import pygame
pygame.init()

# Surface - pravougaonik na kome mozemo da crtamo, ili mozemo da stavimo neku sliku
# Display - je Surface na kome se prikazuje sve sto ce krajnji korisnik videti

prozor = pygame.display.set_mode([500, 500])

# Glavna petlja
game_over = False
while not game_over == True:
    # 1. Dohvatamo input od korisnika
    # pygame.event.get() - vraca red dugmica koji su pritisnuti, po redu pritiskanja
    for klik in pygame.event.get():
        if klik.type == pygame.QUIT:
            game_over = True

    # 2. Azuriramo stanja objekata
    # Farbamo ekran u neku boju
    prozor.fill(pygame.Color(100, 20, 200))

    # 3. Prikazivanje frejma
    # Flipuje ekran (prikazujemo frejm koji smo napravili do ovog trenutka)
    pygame.display.flip()

# Cisti sve za sobom
pygame.quit()