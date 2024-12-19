#1
celsius = float(input("Grados Celsius: "))
fahrenheit = celsius * 9/5 + 32
print(f"{celsius}°C = {fahrenheit}°F")
#2
cuenta = float(input("Total de la cuenta: "))
propina = cuenta * 0.15
total = cuenta + propina
print(f"Total a pagar: {total}")
#3
edad = int(input("Edad: "))
if edad >= 18:
    print("Mayor de edad")
else:
    print("Menor de edad")
#4
palabra = input("Ingresa una palabra: ").lower()
vocales = sum(1 for letra in palabra if letra in "aeiou")
print(f"Vocales: {vocales}")
#5
suma_pares = sum(i for i in range(1, 101) if i % 2 == 0)
print(f"Suma de números pares: {suma_pares}")
#6
palabra = input("Palabra: ").lower()
if palabra == palabra[::-1]:
    print("Es un palíndromo")
else:
    print("No es un palíndromo")
#7
Vocalesa, b = float(input("a: ")), float(input("b: "))
operacion = input("Operación (+, -, *, /): ")
if operacion == "+": print(a + b)
elif operacion == "-": print(a - b)
elif operacion == "*": print(a * b)
elif operacion == "/": print(a / b)
#8
peso = float(input("Peso (kg): "))
altura = float(input("Altura (m): "))
imc = peso / altura**2
print(f"IMC: {imc}")
#9
dolares = float(input("Dólares: "))
euros = dolares * 0.85
print(f"{dolares} USD = {euros} EUR")
#10
numero = int(input("Número (1-7): "))
dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
print(dias[numero - 1] if 1 <= numero <= 7 else "Número inválido")
#11
año_nacimiento = int(input("Año de nacimiento: "))
edad = 2024 - año_nacimiento
print(f"Tienes {edad} años")
#12
longitud = float(input("Longitud: "))
ancho = float(input("Ancho: "))
area = longitud * ancho
print(f"Área: {area}")
#13
n = int(input("Número: "))
if n > 1 and all(n % i != 0 for i in range(2, int(n**0.5) + 1)):
    print("Es primo")
else:
    print("No es primo")
#14
precio = float(input("Precio: "))
descuento = precio * 0.20
precio_final = precio - descuento
print(f"Precio final: {precio_final}")
#15
minutos = int(input("Minutos: "))
horas = minutos // 60
minutos_restantes = minutos % 60
print(f"{horas} horas y {minutos_restantes} minutos")
#16
numeros = list(map(int, input("Números separados por espacio: ").split()))
pares = sum(1 for n in numeros if n % 2 == 0)
impares = len(numeros) - pares
print(f"Pares: {pares}, Impares: {impares}")
#17
millas = float(input("Millas: "))
kilometros = millas * 1.60934
print(f"{millas} millas = {kilometros} km")
#18
oracion = input("Ingresa una oración: ")
palabras = len(oracion.split())
print(f"Palabras: {palabras}")
#19
año = int(input("Año: "))
if (año % 4 == 0 and año % 100 != 0) or (año % 400 == 0):
    print("Es bisiesto")
else:
    print("No es bisiesto")
#20
numeros = list(map(int, input("Números separados por espacio: ").split()))
suma = sum(numeros)
print(f"Suma: {suma}")

