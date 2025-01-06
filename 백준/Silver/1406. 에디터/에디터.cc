# include <bits/stdc++.h>
using namespace std;

int main(void){
    ios::sync_with_stdio(0);
    cin.tie(0);

    string init;
    cin >> init;

    list<char> stl;
    for(int i = 0; i < init.length(); i++){
        stl.push_back(init[i]);
    }

    list<char>::iterator cursor = stl.end();

    int cnt;
    cin >> cnt;

    for(int i = 0; i < cnt; i++){
        char a;
        cin >> a;
        switch(a){
            case 'L':
            if(cursor != stl.begin()){
                cursor--;
            }
            break;
            case 'D':
            if(cursor != stl.end()){
                cursor++;
            }
            break;
            case 'B':
            if(cursor != stl.begin()){
                cursor--;
                cursor = stl.erase(cursor);
            }
            break;
            case 'P':
            char a;
            cin >> a;
            stl.insert(cursor, a);
            break;
        }
    }

    for(auto c: stl){
        cout << c;
    }
}