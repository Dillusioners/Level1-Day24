# define function to convert Celsius to Fahrenheit
def celsius_to_fahrenheit(celsius):
    """Converts Celsius to Fahrenheit"""
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

# define function to convert Fahrenheit to Celsius
def fahrenheit_to_celsius(fahrenheit):
    """Converts Fahrenheit to Celsius"""
    celsius = (fahrenheit - 32) * 5/9
    return celsius

try:
  # prompt user for temperature and unit
  temperature = float(input("Enter the temperature: "))
  unit = input("Enter the unit (C/F): ").upper()
  
  # check if unit is Celsius or Fahrenheit and convert accordingly
  if unit == "C":
      fahrenheit = celsius_to_fahrenheit(temperature)
      print(f"{temperature}°C is {fahrenheit}°F")
  elif unit == "F":
      celsius = fahrenheit_to_celsius(temperature)
      print(f"{temperature}°F is {celsius}°C")
  else:
      print("Invalid unit. Please enter either 'C' or 'F'.")
except:
  print("Enter a valid input next time.")
