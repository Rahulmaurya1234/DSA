#include <iostream>
using namespace std;

class Patern
{
protected:
    int number;

public:
    Patern(int n)
    {
        number = n;
    }
    void line()
    {
        cout << "-----------" << endl;
    }
};


// right tringle
class Righttringle : public Patern
{
public:
    Righttringle(int n) : Patern(n)
    {
        cout << "print pattern that wants \n";
    }
    void print()
    {
        for (int i = 0; i < number; i++)
        {
            for (int j = 0; j <=i; j++)
            {
                cout << "*";
            }
            cout<< endl;
        }
    }
    };

    //left tringle

class Rightrevesetringle : public Patern
{
public:
    
     Rightrevesetringle(int n):Patern(n){
        cout << "print pattern that wants \n";
    }
// *
// **
// ***
// ****
// *****
    void print(){
        for (int i = 1; i <= number; i++){
            for(int j = number; j>=i; j--){
                cout << "*";
            }
            cout<<endl;
        }
    }
};


// left tringle
class Lefttringle : public Patern
{
public:
    Lefttringle(int n): Patern(n){
        cout<<"left star print \n";
    }
// *****
// ****
// ***
// **
// *   
    void print(){
        for (int i=1; i<=number;i++){
            for (int j=number; j>i ; j--)
            {
                cout<<" ";
            }
            for (int k=1;k<=i;k++){
                cout<<"*";
            }
            cout<<endl;
        }
    }

};

class mix : public Patern{
    public:
        mix(int n):Patern(n){
            cout<<"print mix patern \n";
        }
// *
// **
// ***
// ****
// *****
// *****
// ****
// ***
// **
// *
        void print(){
            for (int i =1 ; i<= number; i++){
                for(int j=1; j<=i ;j++){
                    cout<<"*";
                }
                cout<<endl;

            }
            for (int i =1 ; i<= number; i++){
                for(int j=number; j>=i ;j--){
                    cout<<"*";
                }
                cout<<endl;
            }
        }
};

int main()
    {
        Righttringle r(5);
        r.print();

        Rightrevesetringle l(5);
        l.print();

        Lefttringle a(5);
        a.print();

        mix m(5);
        m.print();
        return 0;
    }