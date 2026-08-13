#include <iostream>
using namespace std;
class area{
    int a,b;
public:
    void tri(){
    float a,b;
        cout<<"Enter the base of triangle";
         cin >>a;

        cout<<"Enter the hieght of triangle";

   cin>>b;

   cout<<"The area of triangle is"<<a*b/2;
   }
    void ret(){
    float i,l;
    cout<<"The area of length and breath is";
    cin>>i>>l;
    cout<<"The area of triangle is"<<i+l*2;
    }

    void cir(){
    float r;
    cout<<"The area of radius is";
    cin>>r;
    cout<<"The area of triangle is"<<2*3.14*r;
    }

    void squ(){
    float L,B;
    cout<<"The area of length and breath is";
    cin>>L>>B;
    cout<<"The area of triangle is"<<L*B;
    }

    };


    int main(){
    area a;
    int cho;
    cout<<"area of ";
    cout<<"tri,rect,cir,squ";
    cin>>cho;
    if(1){
        a.tri();
    }
    else if(2){
        a.ret();
    }
    else if(3){
        a.cir();
    }
    else{
        a.squ();
    }
    }
