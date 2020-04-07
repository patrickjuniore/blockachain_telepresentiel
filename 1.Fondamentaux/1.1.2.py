from random import randint
nombreUser = int(input("rechercheParOrdi : "))

while nombreUser > 100 or nombreUser < 0 :
    if nombreUser > 100:
        nombreUser = int(input("Le nombre proposé est trop grand, il doit être compris entre 1 et 100: "))
    else:
        nombreUser = int(input("Le nombre proposé est trop petit, il doit être compris entre 1 et 100: "))

nombreOrdi =int(randint(1,100))
debut = 0
fin = 100
m = int( (debut+fin)/2)

while (nombreOrdi != nombreUser) :    
    print ("Ma proposition est",nombreOrdi)    
    if nombreOrdi > nombreUser:
        fin = m
        m = int( (debut+fin)/2)
    else :
        debut = m
    nombreOrdi = fin-debut
print ("Exact !")
