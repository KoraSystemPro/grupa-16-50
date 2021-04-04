def zameniChar(niska, c1, c2):
    rez = ""
    # i = 0
    # while i < len(niska):
    #     if niska[i] == c1:
    #         rez = rez + c2
    #     elif niska[i] == c2:
    #         rez = rez + c1
    #     else:
    #         rez = rez + niska[i]
    #     i += 1
    for karakter in niska:
        if karakter == c1:
            rez = rez + c2
        elif karakter == c2:
            rez = rez + c1
        else:
            rez = rez + karakter

    return rez
# niska:     
# a 2 2 2 t r $ $ 
# 0 1 2 3 4 5 6 7
# 2 $
# a$$$tr22
# rez = a$$$tr22
rec = input("Unesite nisku koji zelite da promenite: ")
k1 = input("Unesite prvi karakter: ")
k2 = input("Unesite drugi karakter: ")
print(zameniChar(rec, k1, k2))