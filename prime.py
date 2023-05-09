def is_prime(n):
    """Returns True if n is prime, False otherwise."""
    if n <= 1:              # 1 is not a prime number
        return False
    for i in range(2, int(n**0.5)+1):    # Check if n is divisible by any number from 2 to the square root of n
        if n % i == 0:      # If n is divisible by i, it is not a prime number
            return False
    return True             # If n is not divisible by any number from 2 to the square root of n, it is a prime number
  
try:  
  numbers = input("Enter a series of numbers separated by spaces: ").split()  # Take input from the user
  for number in numbers:
      number = int(number)    # Convert each input to an integer
      if is_prime(number):
          print(f"{number} is prime.")
      else:
          print(f"{number} is not prime.")
except:
  print("Add a series of numbers separated by spaces next time.")
