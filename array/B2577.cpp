#include <bits/stdc++.h>
using namespace std;

int main(void){
    ios::sync_with_stdio(0);
    cin.tie(0);

    int A, B, C;
    cin >> A >> B >> C;

    int counter[10];
    fill(counter, counter + 10, 0);

    int temp = A * B * C;

    while(temp >= 1){
        counter[temp % 10] += 1;
        temp /= 10;
    }

    for(int i = 0; i < 10; i++){
        cout << counter[i] << '\n';
    }
}