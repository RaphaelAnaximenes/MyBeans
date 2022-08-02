package J8ListaComLambda;

import java.util.ArrayList;

/* Author: AnxDev
 * Date: 20/04/2022
 * Title: Listagem simples com Lambda
 * */

public class J8ListagemLambda{
	
	public static void main(String[] args) {
		
		
		
		
		ArrayList<Integer> list = new ArrayList<>();
		list.add(10);
		list.add(20);
		list.add(30);
		list.add(40);
		
		
	
		list.forEach(
				(n) -> System.out.println(n));
		 
	}
	
	
	
}
