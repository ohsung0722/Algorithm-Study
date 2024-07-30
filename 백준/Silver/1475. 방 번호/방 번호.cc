#include <bits/stdc++.h>
using namespace std;

int main(void){
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N;
    cin >> N;

    int arr[10];
    fill(arr, arr + 10, 0);

    while(N>0){
        arr[N%10]++;
        N/=10;
    }

    int temp = arr[6] + arr[9];
    if(temp % 2 == 0){
        temp /= 2;
    } else{
        temp = temp / 2 + 1;
    }

    arr[6] = temp;
    arr[9] = 0;

    int max = arr[0];
    for(int i = 1; i < 10; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    cout << max;
}