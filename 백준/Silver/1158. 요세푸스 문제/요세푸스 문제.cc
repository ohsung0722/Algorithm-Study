#include <bits/stdc++.h>
using namespace std;

int main(void){
    ios::sync_with_stdio(0);
    cin.tie(0);

    int n, k;
    cin >> n >> k;

    vector<int> a = {};
    vector<int> b = {};

    for(int i  = 1; i < n + 1; i++){
        a.push_back(i);
    }

    for(int i = 0; b.size() < n; i++){
        if(i%k != k-1){
            a.push_back(a[i]);
        }
        else{
            b.push_back(a[i]);
        }
    }

    cout << "<";
    for(int i = 0; i < n; i++){
        if(i != n - 1){
            cout << b[i] << ", ";
        }
        else{
            cout << b[i];
        }
    }
    cout << ">";
}