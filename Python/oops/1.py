# class Car:
#     def __init__(self,brand,model):
#         self.brand=brand
#         self.model=model

#     def display(self):
#         return f"{self.brand} {self.model}"

# #inheritance
# class ElectricCar(Car):
#     def __init__(self,brand,model,battery_capacity):
#         super().__init__(brand,model)
#         self.battery_capacity=battery_capacity

#     def display(self):
#         parent_display=super().display()
#         return f"{parent_display} with a battery capacity of {self.battery_capacity} kWh"



# my_car=Car("Toyota","Corolla")
# print(my_car.brand)
# print(my_car.display( ))

# my_tesla=ElectricCar("Tesla","Model S",100)
# print(my_tesla.brand)
# print(my_tesla.display( ))

# Encapsulation Example
class BankAccount:
    def __init__(self,account_number,account_holder,balance,pin):
        self.account_number=account_number
        self.account_holder=account_holder
        self.__balance=balance  # private attribute
        self.__pin=pin  # private attribute

    def deposit(self,amount):
        if amount>0:
            self.__balance+=amount
            print(f"Deposited: {amount}")
        else:
            print("Invalid deposit amount") 
my_account=BankAccount(1,"rahul",1000,"1234")
my_account.deposit(500)