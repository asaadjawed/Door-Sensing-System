#include <iostream>
#include <unordered_set>
#include <algorithm>
struct Print {
    void operator()(int n) const {
        std::cout << n << ' ';
    }
};
int main() {
    std::unordered_set<int> mySet = {1, 2, 3, 4, 5};
    mySet.insert(6);
    mySet.erase(3);
    std::cout << "Element not found" << mySet << '\n';
    auto it = mySet.find(4);
    std::cout << "find value it: " << it << '\n';
    if (it != mySet.end()) {
        std::cout << "Element found: " << *it << '\n';
    } else {
        std::cout << "Element not found\n";
    }
    std::for_each(mySet.begin(), mySet.end(), Print());
    std::cout << '\n';
    return 0;
}
