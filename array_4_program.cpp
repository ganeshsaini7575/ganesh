#include<iostream>
using namespace std;

class arraymax
{
private:
    int arr[4];

public:
    void setdata()
    {
        arr[0]=12;
        arr[1]=45;
        arr[2]=7;
        arr[3]=30;
    }

    void findmax()
    {
        int max=arr[0];

        if(arr[1]>max)max=arr[1];
        if(arr[2]>max)max=arr[2];
        if(arr[3]>max)max=arr[3];

        cout<<"maximum="<<max<<endl;
    }
};

int main ()
{
    arraymax a;
    a.setdata();
    a.findmax();
    return 0;

}
