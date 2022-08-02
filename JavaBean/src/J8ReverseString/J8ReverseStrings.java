package J8ReverseString;

/* Author: AnxDev
 * Date: 20/04/2022
 * Title: Invertendo o texto! :)
 * */

public abstract class J8ReverseStrings{
			
public static void main(String[] args) {
		
	ReverseInterface ref = (str) -> {
	String resultado = "";
		for(int i=str.length()-1;i>0;i--) {
			resultado += str.charAt(i); }
				return resultado;
};

System.out.println(ref.reverseString("\n \n Anx "));


 
  }

 }
