arr=[1,2,3,4,5]
print(arr)

target=3

def binary_search(arr,target):
    l=0
    r=len(arr)-1
    while l<=r:
        mid=(l+r)//2
        if arr[mid]==target:
            return mid
        elif arr[mid]<target:
            l=mid+1
        else:
            r=mid-1
    return -1


print(binary_search(arr,target))