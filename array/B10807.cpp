#include <bits/stdc++.h>
using namespace std;

int main(void){
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N, v, a[201] = {};
    cin >> N;

    int temp = N;
    while(temp > 0){
        int b;
        cin >> b;
        a[b + 100]++;
        temp--;
    }

    cin >> v;
    cout << a[v + 100];
}