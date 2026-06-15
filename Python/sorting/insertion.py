def insertion_sort(arr):
    for i in range(1,len(arr)):
        key = arr[i]
        j=i-1

        while j>=0 and arr[j]>key :
            arr[j+1]=arr[j]
            j-=1
        arr[j+1]=key

arr=[738,4,0,33,55343,9,9,322,4,5,3,2,2,4,4,2,2]
insertion_sort(arr)
print(arr)


# // 50 20 30 ,10 ,40
# // key = 20 i = 1
# // j=i-1= 0
# // while j>=0 and arr [j]> key
# // shift arr[j+1]=arr[j]
# // j-=1
# // arr[j]