# Leitura do valor de N
N = int(input("Informe um número: "))

# Loop de 1 até N
for i in range(1, N + 1):
    # Calcular i^2 e i^3
    quadrado = i ** 2
    cubo = i ** 3
    
    # Imprimir a primeira linha
    print(f"{i} {quadrado} {cubo}")
    
    # Imprimir a segunda linha com cubo + 1
    print(f"{i} {quadrado} {cubo + 1}")
