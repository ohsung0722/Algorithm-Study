#include <bits/stdc++.h>
using namespace std;

int a[100001];
int b[2000001] = {};

int main(void){
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n;
    cin >> n;

    for(int i = 0; i < n; i++){
        cin >> a[i];
    }

    int x;
    cin >> x;

    int count = 0;

    for(int i = 0; i < n; i++){
        if(x-a[i] > 0){
            if(b[x - a[i]] == 1){
                count++;
            }
        }
        
        b[a[i]] = 1;
    }

    cout << count;
}