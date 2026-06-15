def merge_sort(arr):
    if len(arr)<=1:
        return arr
    mid = len(arr)//2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return  merge(left , right )

def merge (left , right ):
    sorted=[]
    l=r=0
    while l<len(left) and r<len(right) :
        if left[l]<=right[r] :
            sorted.append(left[l])
            l+=1
        else:
            sorted.append(right[r])
            r+=1
    
    while l < len(left):
        sorted.append(left[l])
        l+=1

    while r < len(right):
        sorted.append(right[r])
        r+=1

    return sorted