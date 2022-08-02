package J8ConsumerString;

import java.util.ArrayList;
import java.util.function.Consumer;



/* Author: AnxDev
 * Date: 20/04/2022
 * Title: Utilização da classe Consumer do J8 e outras proposições
 * */

public class J8ConsumerEmStrings {
	public static void main(String [ ] args) {

ArrayList<String> list = new ArrayList<>();
list.add("Amor");
list.add("Texto 2");
list.add("Texto 3");

Consumer<String> consumer =(n) -> System.out.println(n);
list.forEach(consumer);

	}
}
