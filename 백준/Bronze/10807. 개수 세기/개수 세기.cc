#include <bits/stdc++.h>
using namespace std;

int main(void){
    ios::sync_with_stdio(0);
    cin.tie(0);

    int N;
    cin >> N;

    int a[101];
    for(int i = 0; i < N; i++){
        cin >> a[i];
    }

    int v;
    cin >> v;

    int cnt = 0;
    for(int i = 0; i < N; i++){
        if(v == a[i]){
            cnt++;
        }
    }

    cout << cnt;
}