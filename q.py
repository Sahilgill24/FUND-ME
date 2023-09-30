def calculate(p, q):
     
    mod = 1234567891
    expo = 0
    expo = mod - 2
    while (expo):
 
        
        if (expo & 1):
            p = (p * q) % mod
        q = (q * q) % mod
 
       
        expo >>= 1
 
    return p
 
# Driver code
if __name__ == '__main__':
     
    p = 2000000000
    q = 1732050807
 
    # Function call
    print(calculate(p, q))
 