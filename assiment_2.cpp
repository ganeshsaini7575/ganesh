#include<iostream>
using namespace std;

class car
{
    string brand;
    string model;
public:

    void getdata()
    {
        brand="maroti";
         model="omni";
    }

    void setdata()
    {
      cout<<"the car brand is "<<brand<<endl<<"the car model is "<<model;
    }
};

int main()
{
    car c;
    c.getdata();
    c.setdata();
    return 0;
}
