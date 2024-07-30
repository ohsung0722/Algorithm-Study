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
    /**
     * @brief 
     * 홀수일 때 올림 값이 필요한 것이기 때문에
     * 위 과정 다 생략하고
     * (arr[6] + arr[9] + 1) / 2 하면 끝
     */

    arr[6] = temp;
    arr[9] = 0;

    int max = arr[0];
    for(int i = 1; i < 10; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    /**
     * @brief 
     * c++ std에는 max 함수가 존재
     * 그냥 num = max(num, arr[i]) 하면 됨
     */

    cout << max;
}

/**
 * @brief 
 * 최종 수정 코드
 * int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);
  
  int N, a[10] = {}, ans = 0;
  cin >> N;
  
  // 자리수 추출
  while(N){
    a[N%10]++;
    N /= 10;
  }

  for(int i = 0; i < 10; i++){
    if(i == 6 || i == 9) continue;
    ans = max(ans, a[i]);
  }
  // (a[6]+a[9])/2를 올림한 값이 6, 9에 대한 필요한 세트의 수이므로 (a[6]+a[9]+1)/2을 계산
  ans = max(ans, (a[6]+a[9]+1)/2);
  cout << ans;
}
 */