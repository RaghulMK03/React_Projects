package threading_1;
class Hi extends Thread
{
	public void start()
	{
		for(int i=0;i<10;i++)
		{
			System.out.println("Hii..!");
			try {Thread.sleep(1000);} catch (InterruptedException e) {}
		}
	}
}
class Hello extends Thread
{
	public void start()
	{
		for(int i=0;i<10;i++)
		{
			System.out.println("Hello..!");
			try {Thread.sleep(1000);} catch (InterruptedException e) {}
		}
	}
	
}

public class Multithreading {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Hi obj1 = new Hi();
		Hello obj2 = new Hello();
		obj1.start();
		try {Thread.sleep(500);} catch (InterruptedException e) {}
		obj2.start();

	}

}
