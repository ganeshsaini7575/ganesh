#include<iostream>
using namespace std;

class number
{
    int arr[5],sum=0;
public:
    void getdata()
    {
        cout<<"enter 5 number"<<endl;
        for(int i=0;i<5;i++)
        {
            cin>>arr[i];
        }
    }

    void calculate()
    {
        for(int i=0;i<5;i++)
        {
            sum=sum+arr[i];
        }
    }

    void showdata()
    {
        cout<<"sum="<<sum;
    }
};
int main()
{
    number m;
    m.getdata();
    m.calculate();
    m.showdata();

    return 0;
}
