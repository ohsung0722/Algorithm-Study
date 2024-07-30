#include <bits/stdc++.h>
using namespace std;

/*
주어진 길이 N의 int 배열 arr에서 
합이 100인 서로 다른 위치의 두 원소 존재하면 1
존재하지 않으면 0을 반환하는 함수 func2(int arr[], int N)작성하기
arr의 각 수는 0 이상 100 이하, N은 1000 이하
*/

int func2_first_solution(int arr[], int N){
    int count[101];
    fill(count, count + 101, 0);


    for(int i = 0; i < N; i++){
        if(count[arr[i]] == 1){
            return 1;
        }
        count[arr[i]] = 1;
        count[100 - arr[i]] = 1;
    }

    return 0;
}

//굳이 인덱스 2개의 값을 1로 바꿔야 할까?
//어차피 순서대로 가니까 100차이나는 값을 비교하고 
//현재 인덱스 값만 1로 바꾸어도 될듯?
int func2_fixed_solution(int arr[], int N){
    int count[101];
    fill(count, count + 101, 0);

    for(int i = 0; i < N; i++){
        if(count[100 - arr[i]] == 1){
            return 1;
        }
        count[arr[i]] = 1;
    }

    return 0;
}

int main(void){
    ios::sync_with_stdio(0);
    cin.tie(0);

    int arr[1000], N;
    cin >> N;

    for(int i = 0; i < N; i++){
        cin >> arr[i];
    }

    cout << func2_first_solution(arr, N);
}