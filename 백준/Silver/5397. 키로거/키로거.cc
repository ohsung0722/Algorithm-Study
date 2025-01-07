#include <bits/stdc++.h>
using namespace std;

int main(void){
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    int cnt;
    cin >> cnt;

    for(int i = 0; i < cnt; i++){
        string test;
        cin >> test;

        list<char> stl = {};
        list<char>::iterator cursor = stl.begin();
        
        for(auto c: test){
            if(c == '<'){
                if(cursor != stl.begin()){
                    cursor--;
                }
            }
            else if(c == '>'){
                if(cursor != stl.end()){
                    cursor++;
                }
            }
            else if(c == '-'){
                if(cursor != stl.begin()){
                    cursor--;
                    cursor = stl.erase(cursor);
                }
            }
            else{
                stl.insert(cursor, c);
            }
        }

        for(auto c: stl){
            cout << c;
        }
        cout << '\n';
    }
}