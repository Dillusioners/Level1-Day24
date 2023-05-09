# include <iostream>

// returns whether the given string has only digits or not
bool onlyDigits(std::string str){
	// iterating through the string
	for(auto x : str){
		// checking if the ascii value of x is not of digits
		if(x < 48 || x > 57) return false;	
	}
	
	// returning true as no other character was found
	return true;	
}

// execution starts from here
int main(int argc, char** argv){
	// variable declaration
	std::string str;
	
	// asking for string from user
	std::cout << "Enter your string: ";
	std::cin >> str;
	
	// checking if the string only has digits
	if(onlyDigits(str)) std::cout << "String only has digits!";
	else std::cout << "String has characters other than digits!";	
	return 0;
}
