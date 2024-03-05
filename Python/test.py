def reverse_str(str):
    i = 0
    j = len(str) - 1
    
    while i <= j:
        str[i], str[j] = str[j], str[i]
        
        i += 1
        j -= 1

    return str

print(reverse_str(["h", "e", "l", "l", '0']))
