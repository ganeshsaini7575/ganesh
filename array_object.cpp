#include<iostream>
using namespace std;

class employe
{
    char name[20];
    int age;

public:
    void getdata()
    {
        cout<<"enter name";
        cin>>name;

        cout<<"enter age";
        cin>>age;
    }

    void showdata()
    {
        cout<<"name="<<name<<endl;
        cout<<"age="<<age<<endl;
    }
};

int main()
{
    employe a[3];
    for(int i=0;i<3;i++)
    {
        cout<<"enter detail of employe"<<i+1<<endl;
        a[i].getdata();
    }

    cout<<"employe detail"<<endl;
    for(int i=0;i<3;i++)
    {
        a[i].showdata();
    }
    return 0;
}
