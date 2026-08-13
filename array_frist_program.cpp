#include<iostream>
using namespace std;

class employ
{
    char name[30];
    float age;
public:
    void getdata();
    void showdata();

};
void employ::getdata()
{
    cout<<"enter name"<<endl;
    cin>>name;
    cout<<"enter age"<<endl;
    cin>>age;
}

void employ::showdata()
{
    cout<<"name is"<<name<<endl;
    cout<<"age is"<<age<<endl;

}

const int size=3;
int main()
{
    employ manager[size];
    for(int i=0;i<size;i++)
    {
        cout<<"details of manager"<< i+1    <<endl;
        manager[i].getdata();
    }
    cout<<endl;
    for(int i=0;i<size;i++)
    {
        cout<<"manager"<<i+1<<endl;
        manager[i].showdata();

    }
}
