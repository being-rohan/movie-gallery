# include<iostream.h>
# include<conio.h>

class sample 
{

static int a ;
int b ;
Public:
void getdata ( );
void putdata ( );
};
  
int sample : : a;

void sample : :getdata( )
{
cout<< " only value of b is entered=";
cin>>b;
}
void sample : : putdata( ) 
{
cout<<" value of a is="<< a <<endl;
cout<<" value of b is="<< b;
}

int main()
{
sample ob;
ob.getdata();
ob.putdata();
 getch();
return (0);
}