#include<iostream>
using namespace std;

class  largest
{
    int arr[5],max;
public:

    void getdata()
    {
        cout<<"enter 5 number "<<endl;
        for(int i=0;i<5;i++)
        {
            cin>>arr[i];
        }
    }
    void findmax()
    {
        for(int i=1;i<5;i++)
        {
            if(arr[i]>max)
            {
                max=arr[i];
            }
        }
  }

  void showdata ()
{
    cout<<"largest number ="<<max;

    }
};
int main()
{
    largest l;
    l. getdata();
    l.findmax();
    l.showdata();
    return 0;
}
