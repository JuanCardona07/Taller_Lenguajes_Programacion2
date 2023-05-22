#Ejercicio 1
print("Hola mundo")

#Ejericio 2
if 5>2:
    print("Cinco es mayor que dos")

#Ejercicio 3
#Esto es un comentario

#Ejercicio 4
'''
Esto es un comentario
escrito en 
mas de una linea
'''

#Ejercicio 5
carname = "Volvo"
print(carname)

#Ejercicio 6
x = 50
print(x)

#Ejercicio 7
x = 5
y = 10
print(x+y)

#Ejercicio 8
x = 5
y = 10
z = x+y
print(z)

#Ejercicio 9
#2my-first_name = "John"
my_first_name = "Juan"
print(my_first_name)

#Ejercicio 10
x=y=z = "Naranja"
print(x)
print(y)
print(z)

#Ejercicio 11
def myfunc():
    global x
    x = "fantastic"
myfunc()

#Ejercicio 12
x = 5
print(type(x))

#Ejercicio 13
x = "Hola mundo"
print(type(x))

#Ejercicio 14
x = 20.5
print(type(x))

#Ejercicio 15
x = ["manzana","banana","cereza"]
print(type(x))

#Ejercicio 16
x = ("Manzana","banana","cereza")
print(type(x))

#Ejercicio 17
x = {"name":"juan",
     "age":"22"
     }
print(type(x))

#Ejercicio 18
x = True
print(type(x))

#Ejercicio 19
x = 5
x = float(x)
print(x)

#Ejercicio 20
x = 5.5
x = int(x)
print(x)

#Ejercicio 21
x = 5
x = complex(x)
print(x)

#Ejercicio 22
x = "Hola mundo"
print(len(x))

#Ejercicio 23
txt = "Hola mundo"
x = (txt[0])
print(x)

#Ejercicio 24
txt = "Hola Mundo"
x = txt[2:5]
print(x)

#Ejercicio 25
txt = "Hola mundo"
x = txt.strip()
print(x)

#Ejercicio 26
txt = "Hola mundo"
txt = txt.upper()
print(txt)

#Ejercicio 27
txt = "Hola mundo"
txt = txt.lower()
print(txt)

#Ejercicio 28
txt = "Hola mundo"
txt = txt.replace("H","J")
print(txt)

#Ejercicio 29
age = 22
txt = f"My name is Juan, and I am {age}"
print(txt.format(age))

#Ejercicio 30
print(10 > 9)

#Ejercicio 31
print(10 == 9)

#Ejercicio 32
print(10 < 9)

#Ejercicio 33
print(bool("abc"))

#Ejercicio 34
print(bool(0))

#Ejercicio 35
print(10 * 5)

#Ejercicio 36
print(10 / 2)

#Ejercicio 37
frutas = ["manzana","banana"]
if "manzana" in frutas:
    print("Si, manzana es una fruta!")

#Ejercicio 38
if 5 != 10:
    print("5 y 10 no son iguales")

#Ejercicio 39
if 5 == 10 or 4 == 4:
    print("Almenos una de las afirmaciones es verdadera")

#Ejercicio 40
frutas = ["manzana","banana","cereza"]
print(frutas[1])

#Ejercicio 41
frutas = ['manzana','banana','cereza']
frutas[0]='kiwi'
print(frutas)

#Ejercicio 42
frutas = ['manzana','banana','cereza']
frutas.append("orange")
print(frutas)

#Ejercicio 43
frutas = ['manzana','banana','cereza']
frutas.insert(1,"lemon")
print(frutas)

#Ejercicio 44
frutas = ['manzana','banana','cereza']
frutas.remove("banana")
print(frutas)

#Ejercicio 45
frutas = ['manzana','banana','cereza']
print(frutas[-1])

#Ejercicio 46
frutas = ['manzana','banana','cereza','naranja','kiwi','melon','mango']
print(frutas[2:5])

#Ejercicio 47
frutas = ['manzana','banana','cereza']
print(len(frutas))

#Ejercicio 48
frutas = ('manzana','banana','cereza')
print(frutas[0])

#Ejercicio 49
frutas = ('manzana','banana','cereza')
print(len(frutas))

#Ejercicio 50
frutas = ('manzana','banana','cereza')
print(frutas[-1])

#Ejercicio 51
frutas = ('manzana','banana','cereza','naranja','kiwi''melon','mango')
print(frutas[2:5])

#Ejercicio 52
frutas = ('manzana','banana','cereza')
if 'manzana' in frutas:
    print("Si, manzana es una fruta!")

#Ejercicio 53
frutas = {'manzana','banana','cereza'}
frutas.add("naranja")
print(frutas)

#Ejercicio 54
frutas = {'manzana','banana','cereza'}
mas_frutas = ['naranja','mango','uvas']
frutas.update(mas_frutas)
print(frutas)

#Ejercicio 55
frutas = {'manzana','banana','cereza'}
frutas.remove("banana")
print(frutas)

#Ejercicio 56
frutas = {'manzana','banana','cereza'}
frutas.discard("banana")
print(frutas)

#Ejercicio 57
car = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
}
print(car.get("model"))

#Ejercicio 58
car = {
    'brand':'Ford',
    'model':'Mustang',
    'year':1964
}
car['year']=2020
print(car)

#Ejercicio 59
car = {
    'brand':'Ford',
    'model':'Mustang',
    'year':1964
}
car['color']='red'
print(car)

#Ejercicio 60
car = {
    'brand':'Ford',
    'model':'Mustang',
    'year':1964,
}
car.pop('model')
print(car)

#Ejercicio 61
car = {
    'brand':'Ford',
    'model':'Mustang',
    'year':1964
}
car.clear()
print("El diccionario se vació correctamente")

#Ejercicio 62
a = 50
b = 10
if a > b:
    print("Hola Mundo")

#Ejercicio 63
a = 50
b = 10
if a != b:
    print("Hola mundo")

#Ejercicio 64
a = 50
b = 10
if a == b:
    print("Si")
else:
    print("No")

#Ejercicio 65
a = 50
b = 10
if a == b:
    print(1)
elif a > b:
    print("2")
else:
    print('3')

#Ejercicio 66
a = 7
b = 7
c = 7
d = 7
if a == b and c == d:
    print("Hola")

#Ejercicio 67
a = 7
b = 7
c = 7
d = 7
if a == b or c == d:
    print("Hola")

#Ejercicio 68
if 5 > 2:
    print("Cinco es mayor que dos")

#Ejercicio 69
if 5 > 2: print("Cinco es mayor que dos")

#Ejercicio 70
print("Si") if 5 > 2 else print("No")

#Ejercicio 71
i = 1
while i < 6:
    print(i)
    i += 1

#Ejercicio 72
i = 1
while i < 6:
    if i == 3:
        break
    i += 1

#Ejercicio 73
i = 0
while i < 6:
    i += 1
    if i == 3:
        continue
    print(i)

#Ejercicio 74
i = 1
while i < 6:
    print(i)
    i += 1
else:
    print("i ya no es menor a 6")

#Ejercicio 75
frutas = ['manzana','banana','cereza']
for x in frutas:
    print(x)
