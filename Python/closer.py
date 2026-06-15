def fun(n):
    def inner(x):
        return x ** n
    return inner

square = fun(2)
cube = fun(3)
print(square(4))  # Output: 16
print(cube(3))    # Output: 27