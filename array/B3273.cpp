#include <bits/stdc++.h>
using namespace std;

//여기서 주의할 점.
//배열의 크기가 클 때, 전역으로 설정하지 않으면 스택의 메모리 문제로 인해
//코드 자체가 실행이 안될 수 있음.
//따라서 전역으로 설정하여 데이터 영역에 할당되도록 해야함.
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