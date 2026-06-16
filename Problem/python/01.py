# attern Problems (Most Common in Exams)
# 1. Square Pattern
# Question

# Print a square of * of size n = 5.
# * * * * *
# * * * * *
# * * * * *
# * * * * *
# * * * * *

# n=5
# for i in range (n):
#     for j in range(n):
#         print('*',end='')
#     print('') 

# 2. Rectangle Pattern
# Question

# Print a rectangle of 4 rows and 6 columns.

# Output
# * * * * * *
# * * * * * *
# * * * * * *
# * * * * * *

# n = 4
# m=6

# for i in range (n):
#     for i in range(m):
#         print('*',end='')
#     print()



# 3. Pyramid Pattern
# Question

# Print a pyramid of height 5.

#     *
#    ***
#   *****
#  *******
# *********
# *
# ***
# *****
# *******
# *********

# n=5

# for i in range (1,n+1):
#     m=(i*2)-1
#     for k in range((9-m)//2):
#         print(" ",end  ='')
#     for j in range ((i*2)-1):
#         print("*",end  ='')
#     for l in range((9-m)//2):
#         print(" ",end  ='')
#     print()


# n = 5
# for i in range(n, 0, -1):
#     m=(i*2)-1
#     for k in range((9-m)//2):
#         print(" ",end  ='')
#     for j in range ((i*2)-1):
#         print("*",end  ='')
#     for l in range((9-m)//2):
#         print(" ",end  ='')
#     print()


# Floyd's Triangle
# 1
# 2 3
# 4 5 6
# 7 8 9 10


# n =4
# num=1
# for i in range (1,n+1):
#     for j in range (0,i):
#         print(num , end='')
#         num+=1
#     print()

# Number Pyramid
# 1
# 121
# 12321
# 1234321

# n= 4

# for i in range (1,n+1):
#     m=((i*2)-1)
#     for j in range (1,m+1):
#         if j<=i:
#             print(j, end='')
#         else:
#             k=(j-i)*2
#             print((j-k),end='')
#     print()


# Hollow Square
# *****
# *   *
# *   *
# *   *
# *****

