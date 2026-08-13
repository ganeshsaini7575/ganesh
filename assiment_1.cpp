#include<iostream>
using namespace std;

class student
{
    string name;
    int age;
public:

    void setdata()
    {


            cout<<"enter name of student"<<endl;
            cin>>name;
            cout<<"enter the age of student"<<endl;
            cin>>age;


    }

};
int main ()
{
    student s;
    s.setdata();
    s.setdata();
    s.setdata();
    s.setdata();

    return 0 ;
}
