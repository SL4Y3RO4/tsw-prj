#include <iostream>
#include <string.h>


int main(int argc, char *argv[]) {
	
	for(int i = 0; i < argc; i++) {
		
		char *s = argv[i];
	    
	    if(strncmp(s, "int", 3) == 0) {
	    	s = s + 3;
	    	int n = 0;
	    	
	    	while(*s == ' ') s++;
	    	
	    	if(*s == '=') {
	    		s++;
	    		while(*s != ';') {
	    			n += atoi(s);
	    			s++;
				}
			}
			std::cout << n;
		}
	}
	
}