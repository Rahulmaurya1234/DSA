def selection_sort(arr):
    for i in range ( len(arr)-1):
        min_ind=i
        for j in range (i+1,len(arr)):
            if arr[min_ind]> arr[j]:
                min_ind = j
        arr[min_ind],arr[i] = arr[i],arr[min_ind]


arr=[36,47,83,73,40]
selection_sort(arr)
print(arr)