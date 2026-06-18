#prefix of A String 

s="abcabc"
pre=[]
for i in range(1,len(s)+1):
    pre.append(s[0:i])
print(pre)

print(len(pre[3]))  




# prefixes = [s[:i] for i in range(1, len(s)+1)]

