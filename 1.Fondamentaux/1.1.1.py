from random import randint

nombreAlea=randint(1,100)
nombreUser = int(input("Devinez un nombre entre 1 et 100: "))
while nombreUser != nombreAlea :
    if (nombreAlea-nombreUser) <0:
        #print ("trop grand")
        if abs((nombreAlea-nombreUser)) <=5:
            print ("C'est un tout petit peu moins")
        elif abs((nombreAlea-nombreUser)) >=6 and abs((nombreAlea-nombreUser)) <=10:
            print ("C'est un peu moins")
        else:
            print ("C'est beaucoup moins")
    elif (nombreAlea-nombreUser) >0:
        #print ("trop petit")
        if abs((nombreAlea-nombreUser)) <=5:
            print ("C'est un tout petit peu plus")
        elif abs((nombreAlea-nombreUser)) >=6 and abs((nombreAlea-nombreUser)) <=10:
            print ("C'est un peu plus")
        else:
            print ("C'est beaucoup plus")
    nombreUser = int(input("Devinez un nombre entre 1 et 100: "))
print ("Exact !")
