arr=[5,3,6,8,9,1]


def bubble_shot(arr):
    for i in range(len(arr)-1):
        for j in range(len(arr)-i-1):
           if arr[j]>arr[j+1]:
            #    arr[j],arr[j+1]=arr[j+1],arr[j]
            # swaping
                n=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=n

        
                    
bubble_shot(arr)

print(arr)     

# coplexity = o(n//2)