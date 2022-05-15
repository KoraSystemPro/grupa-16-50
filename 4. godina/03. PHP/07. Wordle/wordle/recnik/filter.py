recnik = open("recnik.txt", "r")
linije = recnik.readlines()
recnik.close()

lista_reci = open("lista_reci.txt", "w")
for line in linije:
    if len(line) == 6:
        lista_reci.write(line.lower())
lista_reci.close()

