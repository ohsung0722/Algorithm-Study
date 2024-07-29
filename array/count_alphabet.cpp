#include <bits/stdc++.h>
using namespace std;

int main(void){
    ios::sync_with_stdio(0);
    cin.tie(0);

    int counter[26];

    string s;
    cin >> s;

    for(char a : s){
        counter[a - 'a']++;
    }

    for(int i = 0; i < 26; i++){
        cout << counter[i] << ' ';
    }

    return 0;
}

// 내 초기 풀이 -> 시간 낭비
// int main(void){
//     ios::sync_with_stdio(0);
//     cin.tie(0);

//     int counter[26];

//     string s;
//     cin >> s;

//     for(char a = 'a'; a <= 'z'; a++){
//         int count = 0;
//         for(auto b : s){
//             if(a == b){
//                 count++;
//             }
//         }

//         cout << count << ' ';
//     }

//     return 0;
// }