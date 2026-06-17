export const Ch7Content = () => {
    return (
        <div className="course-content">

            <p className="p-text">
                <span className="font-semibold">
                    Module VII: Searching.
                </span>
                Searching is one of the most fundamental operations in Computer Science.
                It is used to determine whether a particular element exists in a dataset
                and to locate its position if it is present. Efficient searching techniques
                help retrieve information quickly from large collections of data and are
                widely used in databases, search engines, operating systems, file systems,
                e-commerce platforms, and many other software applications.
            </p>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Introduction */}
            <section>

                <h3 className="section-heading">
                    Introduction to Searching
                </h3>

                <p className="p-text">
                    Searching is the process of finding whether a particular element exists
                    in a collection of data and determining its location if it is present.
                    It is one of the most fundamental operations performed on data
                    structures.
                </p>

                <p className="p-text">
                    Searching algorithms help retrieve information efficiently from a
                    dataset. They are widely used in databases, search engines, operating
                    systems, file systems, and software applications.
                </p>

                <p className="p-text">
                    The choice of a searching algorithm depends on factors such as data
                    organization, dataset size, and performance requirements.
                </p>

                <ul className="section-list">
                    <li>Used to locate specific elements in a dataset</li>
                    <li>Helps retrieve information quickly</li>
                    <li>Improves application performance</li>
                    <li>Can be applied to various data structures</li>
                    <li>Forms the basis of many advanced algorithms</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Need for Searching */}
            <section>

                <h3 className="section-heading">
                    Need for Searching
                </h3>

                <p className="p-text">
                    As the amount of stored data increases, locating a specific element
                    manually becomes difficult and time-consuming. Searching algorithms
                    provide systematic methods for finding information quickly and
                    accurately.
                </p>

                <p className="p-text">
                    Efficient searching helps reduce processing time, improves user
                    experience, and enhances the overall performance of applications that
                    handle large datasets.
                </p>

                <ul className="section-list">
                    <li>Finding student records in a database</li>
                    <li>Searching contacts in a mobile phone</li>
                    <li>Locating files in a file system</li>
                    <li>Searching products in an online store</li>
                    <li>Retrieving information from search engines</li>
                    <li>Verifying the existence of data before processing</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Characteristics of Searching */}
            <section>

                <h3 className="section-heading">
                    Characteristics of Searching
                </h3>

                <p className="p-text">
                    Searching algorithms are designed to locate specific elements within a
                    dataset efficiently. Different searching techniques provide different
                    levels of performance depending on the organization of data and the
                    algorithm being used.
                </p>

                <ul className="section-list">
                    <li>Used to determine whether an element exists in a dataset</li>
                    <li>May return the position of the element if found</li>
                    <li>Can be performed on sorted or unsorted data</li>
                    <li>Different algorithms provide different efficiencies</li>
                    <li>Performance is measured using time and space complexity</li>
                    <li>Widely used in databases and software applications</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Linear Search */}
            <section>

                <h3 className="section-heading">
                    Linear Search
                </h3>

                <p className="p-text">
                    Linear Search is the simplest searching technique in which elements are
                    checked one by one from the beginning of the dataset until the required
                    element is found or the end of the dataset is reached.
                </p>

                <p className="p-text">
                    It can be used on both sorted and unsorted data. Since every element
                    may need to be examined, Linear Search is less efficient for large
                    datasets when compared to Binary Search.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Working of Linear Search
                </h4>

                <ul className="section-list">
                    <li>Start from the first element</li>
                    <li>Compare the current element with the target value</li>
                    <li>If a match is found, return its position</li>
                    <li>If not, move to the next element</li>
                    <li>Repeat until the element is found or the array ends</li>
                </ul>

                <h4 className="font-semibold text-lg mt-6">
                    Example
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Array:

10 20 30 40 50

Search Element: 40

Step 1:
10 ≠ 40

Step 2:
20 ≠ 40

Step 3:
30 ≠ 40

Step 4:
40 = 40

Element Found`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Algorithm
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Step 1: Start

Step 2: Read array and target value

Step 3: Compare each element
        with the target

Step 4: If element matches,
        return position

Step 5: Otherwise continue

Step 6: If end of array is reached,
        element is not present

Step 7: Stop`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    C Program
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`#include<stdio.h>

int linearSearch(
    int arr[],
    int n,
    int key){

    for(int i=0;
        i<n;
        i++){

        if(arr[i]==key)
            return i;
    }

    return -1;
}

int main(){

    int arr[]=
    {10,20,30,40,50};

    int n=
    sizeof(arr)/
    sizeof(arr[0]);

    int key=40;

    int result=
    linearSearch(
    arr,n,key);

    if(result!=-1)

        printf(
        "Element found at index %d",
        result);

    else

        printf(
        "Element not found");

    return 0;
}`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Complexity Analysis
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Case              Time Complexity

Best Case              O(1)

Average Case           O(n)

Worst Case             O(n)

Space Complexity       O(1)`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Advantages
                </h4>

                <ul className="section-list">
                    <li>Simple and easy to implement</li>
                    <li>Works on both sorted and unsorted data</li>
                    <li>Does not require additional memory</li>
                    <li>Suitable for small datasets</li>
                </ul>

                <h4 className="font-semibold text-lg mt-6">
                    Disadvantages
                </h4>

                <ul className="section-list">
                    <li>Inefficient for large datasets</li>
                    <li>May require checking every element</li>
                    <li>Slower than Binary Search for sorted data</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Sentinel Linear Search */}
            <section>

                <h3 className="section-heading">
                    Sentinel Linear Search
                </h3>

                <p className="p-text">
                    Sentinel Linear Search is an improved version of Linear Search that
                    reduces the number of comparisons performed during searching. It works
                    by placing the target element temporarily at the end of the array,
                    known as the Sentinel.
                </p>

                <p className="p-text">
                    By using a Sentinel, the algorithm avoids checking whether the current
                    index has reached the end of the array during every iteration,
                    resulting in a slightly more efficient implementation.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Working of Sentinel Linear Search
                </h4>

                <ul className="section-list">
                    <li>Store the last element of the array</li>
                    <li>Place the target element at the last position</li>
                    <li>Start searching from the beginning of the array</li>
                    <li>Stop when the target element is encountered</li>
                    <li>Restore the original last element</li>
                    <li>Determine whether the element was originally present</li>
                </ul>

                <h4 className="font-semibold text-lg mt-6">
                    Example
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Array:

10 20 30 40 50

Search Element: 40

Store Last Element = 50

Place Sentinel:

10 20 30 40 40

Search Starts

10 ≠ 40

20 ≠ 40

30 ≠ 40

40 = 40

Element Found`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    C Program
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`#include<stdio.h>

int sentinelSearch(
    int arr[],
    int n,
    int key){

    int last=
    arr[n-1];

    arr[n-1]=key;

    int i=0;

    while(arr[i]!=key)
        i++;

    arr[n-1]=last;

    if(i<n-1 ||
       arr[n-1]==key)

        return i;

    return -1;
}

int main(){

    int arr[]=
    {10,20,30,40,50};

    int n=
    sizeof(arr)/
    sizeof(arr[0]);

    int key=40;

    int result=
    sentinelSearch(
    arr,n,key);

    if(result!=-1)

        printf(
        "Element found at index %d",
        result);

    else

        printf(
        "Element not found");

    return 0;
}`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Complexity Analysis
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Case              Time Complexity

Best Case              O(1)

Average Case           O(n)

Worst Case             O(n)

Space Complexity       O(1)`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Advantages
                </h4>

                <ul className="section-list">
                    <li>Reduces the number of comparisons</li>
                    <li>Slightly more efficient than Linear Search</li>
                    <li>Easy to implement</li>
                    <li>Works on unsorted data</li>
                </ul>

                <h4 className="font-semibold text-lg mt-6">
                    Disadvantages
                </h4>

                <ul className="section-list">
                    <li>Temporarily modifies the array</li>
                    <li>Still has linear time complexity</li>
                    <li>Less commonly used in practical applications</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Binary Search */}
            <section>

                <h3 className="section-heading">
                    Binary Search
                </h3>

                <p className="p-text">
                    Binary Search is an efficient searching algorithm used to find an
                    element in a sorted array. Instead of checking every element one by
                    one, Binary Search repeatedly divides the search space into two halves
                    until the required element is found.
                </p>

                <p className="p-text">
                    Since Binary Search eliminates half of the remaining elements during
                    each comparison, it performs much faster than Linear Search for large
                    sorted datasets.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Prerequisite
                </h4>

                <p className="p-text">
                    Binary Search works only on sorted data. If the array is not sorted,
                    the algorithm may produce incorrect results.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Sorted Array:

10 20 30 40 50 60 70`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Working of Binary Search
                </h4>

                <ul className="section-list">
                    <li>Find the middle element of the array</li>
                    <li>Compare the middle element with the target value</li>
                    <li>If both are equal, the element is found</li>
                    <li>If the target is smaller, search the left half</li>
                    <li>If the target is larger, search the right half</li>
                    <li>Repeat until the element is found or the search space becomes empty</li>
                </ul>

                <h4 className="font-semibold text-lg mt-6">
                    Example
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Array:

10 20 30 40 50 60 70

Search Element: 60

Step 1:

Middle = 40

60 > 40

Move Right


Step 2:

50 60 70

Middle = 60

Element Found`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Algorithm
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Step 1: Start

Step 2: Initialize
        low = 0
        high = n - 1

Step 3: Find middle element

Step 4: Compare middle
        with target value

Step 5: If equal,
        element found

Step 6: If target is smaller,
        search left half

Step 7: If target is larger,
        search right half

Step 8: Repeat until
        low > high

Step 9: Stop`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    C Program
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`#include<stdio.h>

int binarySearch(
    int arr[],
    int n,
    int key){

    int low=0;
    int high=n-1;

    while(low<=high){

        int mid=
        low +
        (high-low)/2;

        if(arr[mid]==key)
            return mid;

        if(key<arr[mid])

            high=mid-1;

        else

            low=mid+1;
    }

    return -1;
}

int main(){

    int arr[]=
    {10,20,30,40,50,60,70};

    int n=
    sizeof(arr)/
    sizeof(arr[0]);

    int key=60;

    int result=
    binarySearch(
    arr,n,key);

    if(result!=-1)

        printf(
        "Element found at index %d",
        result);

    else

        printf(
        "Element not found");

    return 0;
}`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Complexity Analysis
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Case              Time Complexity

Best Case              O(1)

Average Case           O(log n)

Worst Case             O(log n)

Space Complexity       O(1)`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Advantages
                </h4>

                <ul className="section-list">
                    <li>Much faster than Linear Search for large datasets</li>
                    <li>Efficient due to logarithmic time complexity</li>
                    <li>Requires no extra memory in iterative implementation</li>
                    <li>Widely used in searching applications</li>
                </ul>

                <h4 className="font-semibold text-lg mt-6">
                    Disadvantages
                </h4>

                <ul className="section-list">
                    <li>Works only on sorted data</li>
                    <li>Sorting may require additional processing time</li>
                    <li>Less suitable for linked lists due to lack of direct indexing</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Recursive Binary Search */}
            <section>

                <h3 className="section-heading">
                    Recursive Binary Search
                </h3>

                <p className="p-text">
                    Recursive Binary Search is a variation of Binary Search that uses
                    recursion to repeatedly divide the search space into smaller halves.
                    Instead of using loops, the function calls itself until the element is
                    found or the search range becomes empty.
                </p>

                <p className="p-text">
                    The algorithm follows the same logic as Binary Search. The only
                    difference is that recursion is used to process the left or right half
                    of the array.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Working of Recursive Binary Search
                </h4>

                <ul className="section-list">
                    <li>Find the middle element of the current search range</li>
                    <li>If the middle element matches the target, return its position</li>
                    <li>If the target is smaller, recursively search the left half</li>
                    <li>If the target is larger, recursively search the right half</li>
                    <li>Stop when the element is found or the search range becomes empty</li>
                </ul>

                <h4 className="font-semibold text-lg mt-6">
                    Example
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Array:

10 20 30 40 50 60 70

Search Element: 20

Step 1:

Middle = 40

20 < 40

Search Left Half


Step 2:

10 20 30

Middle = 20

Element Found`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    C Program
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`#include<stdio.h>

int recursiveBinarySearch(
    int arr[],
    int low,
    int high,
    int key){

    if(low>high)
        return -1;

    int mid=
    low +
    (high-low)/2;

    if(arr[mid]==key)
        return mid;

    if(key<arr[mid])

        return
        recursiveBinarySearch(
        arr,
        low,
        mid-1,
        key);

    return
    recursiveBinarySearch(
    arr,
    mid+1,
    high,
    key);
}

int main(){

    int arr[]=
    {10,20,30,40,50,60,70};

    int n=
    sizeof(arr)/
    sizeof(arr[0]);

    int key=20;

    int result=
    recursiveBinarySearch(
    arr,
    0,
    n-1,
    key);

    if(result!=-1)

        printf(
        "Element found at index %d",
        result);

    else

        printf(
        "Element not found");

    return 0;
}`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Complexity Analysis
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Case              Time Complexity

Best Case              O(1)

Average Case           O(log n)

Worst Case             O(log n)

Space Complexity       O(log n)`}
                    </pre>

                </div>

                <p className="p-text">
                    The space complexity is O(log n) because recursive function calls are
                    stored in the system call stack.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    Advantages
                </h4>

                <ul className="section-list">
                    <li>Simple and elegant implementation</li>
                    <li>Easy to understand divide-and-conquer approach</li>
                    <li>Efficient for large sorted datasets</li>
                </ul>

                <h4 className="font-semibold text-lg mt-6">
                    Disadvantages
                </h4>

                <ul className="section-list">
                    <li>Works only on sorted data</li>
                    <li>Uses additional stack memory</li>
                    <li>Slightly slower than iterative Binary Search due to function calls</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Comparison of Searching Techniques */}
            <section>

                <h3 className="section-heading">
                    Comparison of Searching Techniques
                </h3>

                <p className="p-text">
                    Different searching algorithms offer different levels of performance.
                    The choice of a searching technique depends on factors such as whether
                    the data is sorted, dataset size, and efficiency requirements.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Feature              Linear      Sentinel     Binary

Sorted Data
Required             No          No           Yes

Best Case            O(1)        O(1)         O(1)

Average Case         O(n)        O(n)         O(log n)

Worst Case           O(n)        O(n)         O(log n)

Space
Complexity           O(1)        O(1)         O(1)

Implementation
Difficulty           Easy        Easy         Moderate

Suitable For
Large Datasets       No          No           Yes`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Linear Search
                </h4>

                <ul className="section-list">
                    <li>Works on both sorted and unsorted data</li>
                    <li>Simple to implement</li>
                    <li>Suitable for small datasets</li>
                    <li>May require checking every element</li>
                </ul>

                <h4 className="font-semibold text-lg mt-6">
                    Sentinel Linear Search
                </h4>

                <ul className="section-list">
                    <li>Improves Linear Search by reducing comparisons</li>
                    <li>Works on unsorted data</li>
                    <li>Still requires linear time in the worst case</li>
                    <li>Less commonly used in real-world applications</li>
                </ul>

                <h4 className="font-semibold text-lg mt-6">
                    Binary Search
                </h4>

                <ul className="section-list">
                    <li>Requires sorted data</li>
                    <li>Highly efficient for large datasets</li>
                    <li>Uses divide-and-conquer strategy</li>
                    <li>Provides logarithmic search performance</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Complexity Analysis of Searching Techniques */}
            <section>

                <h3 className="section-heading">
                    Complexity Analysis of Searching Techniques
                </h3>

                <p className="p-text">
                    Complexity Analysis helps evaluate the efficiency of searching
                    algorithms by measuring the amount of time and memory required to
                    perform a search operation.
                </p>

                <p className="p-text">
                    Time Complexity indicates how the execution time grows as the size of
                    the dataset increases, while Space Complexity represents the amount of
                    additional memory used by the algorithm.
                </p>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Algorithm                Best       Average      Worst

Linear Search          O(1)        O(n)        O(n)

Binary Search          O(1)      O(log n)    O(log n)

Recursive
Binary Search          O(1)      O(log n)    O(log n)

Sentinel Search        O(1)        O(n)        O(n)`}
                    </pre>

                </div>

                <h4 className="font-semibold text-lg mt-6">
                    Space Complexity Comparison
                </h4>

                <div className="example-box p-4 rounded-lg bg-[#f3e7c2] border border-[#c7a669]">

                    <pre className="code-block">
                        {`Algorithm                Space Complexity

Linear Search               O(1)

Binary Search               O(1)

Recursive
Binary Search             O(log n)

Sentinel Search             O(1)`}
                    </pre>

                </div>

                <p className="p-text">
                    Binary Search provides significantly better performance than Linear
                    Search for large datasets because it repeatedly reduces the search
                    space by half. However, Binary Search requires the data to be sorted
                    before searching can be performed.
                </p>

                <p className="p-text">
                    Recursive Binary Search has the same time complexity as Iterative
                    Binary Search but requires additional stack memory for recursive
                    function calls.
                </p>

                <p className="p-text">
                    Sentinel Search slightly reduces the number of comparisons compared to
                    Linear Search but still has linear time complexity in the average and
                    worst cases.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Applications of Searching */}
            <section>

                <h3 className="section-heading">
                    Applications of Searching
                </h3>

                <p className="p-text">
                    Searching algorithms are widely used in computer systems to locate,
                    retrieve, and manage information efficiently. Almost every software
                    application relies on searching operations to provide quick access to
                    data.
                </p>

                <p className="p-text">
                    Efficient searching reduces response time and improves the overall
                    performance of applications handling large amounts of data.
                </p>

                <ul className="section-list">
                    <li>Database record retrieval</li>
                    <li>Search engines</li>
                    <li>Contact management systems</li>
                    <li>Library management systems</li>
                    <li>File and folder searching</li>
                    <li>E-commerce product search</li>
                    <li>Student information systems</li>
                    <li>Operating systems</li>
                    <li>Dictionary and spell-check applications</li>
                    <li>Online reservation systems</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Advantages of Searching Algorithms */}
            <section>

                <h3 className="section-heading">
                    Advantages of Searching Algorithms
                </h3>

                <ul className="section-list">
                    <li>Provides quick access to information</li>
                    <li>Reduces manual effort in locating data</li>
                    <li>Improves software performance</li>
                    <li>Supports efficient data management</li>
                    <li>Enables fast retrieval from large datasets</li>
                    <li>Forms the basis of many advanced algorithms</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Limitations of Searching Algorithms */}
            <section>

                <h3 className="section-heading">
                    Limitations of Searching Algorithms
                </h3>

                <ul className="section-list">
                    <li>Some algorithms require sorted data</li>
                    <li>Performance may decrease for very large unsorted datasets</li>
                    <li>Sorting data may introduce additional overhead</li>
                    <li>Efficiency depends on the organization of data</li>
                    <li>Different applications require different searching techniques</li>
                </ul>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Summary */}
            <section>

                <h3 className="section-heading">
                    Summary
                </h3>

                <p className="p-text">
                    Searching is the process of locating a specific element within a
                    dataset. It is one of the most frequently performed operations in
                    computer systems and plays a vital role in data retrieval and
                    information management.
                </p>

                <p className="p-text">
                    Linear Search examines elements sequentially and can be applied to both
                    sorted and unsorted data. Binary Search improves efficiency by
                    repeatedly dividing a sorted dataset into smaller halves. Recursive
                    Binary Search applies the same divide-and-conquer strategy using
                    recursion, while Sentinel Search optimizes Linear Search by reducing
                    unnecessary comparisons.
                </p>

                <p className="p-text">
                    The choice of a searching algorithm depends on the structure and size
                    of the dataset. For large sorted datasets, Binary Search provides
                    significantly better performance than Linear Search due to its
                    logarithmic time complexity.
                </p>

            </section>

            <hr className="my-6 border-[#c7a669] opacity-40" />

            {/* Interview Questions */}
            <section>

                <h3 className="section-heading">
                    Interview Questions
                </h3>

                <h4 className="font-semibold text-lg mt-6">
                    1. What is Searching?
                </h4>

                <p className="p-text">
                    Searching is the process of finding whether a particular element exists
                    in a dataset and determining its location.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    2. What is Linear Search?
                </h4>

                <p className="p-text">
                    Linear Search is a searching technique that checks elements one by one
                    until the target element is found or the dataset ends.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    3. What is Binary Search?
                </h4>

                <p className="p-text">
                    Binary Search is an efficient searching algorithm that repeatedly
                    divides a sorted dataset into two halves until the target element is
                    found.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    4. Why does Binary Search require sorted data?
                </h4>

                <p className="p-text">
                    Binary Search relies on the ordering of elements to determine whether
                    to search the left half or the right half of the dataset.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    5. What is the best-case time complexity of Linear Search?
                </h4>

                <p className="p-text">
                    O(1), when the target element is found at the first position.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    6. What is the worst-case time complexity of Linear Search?
                </h4>

                <p className="p-text">
                    O(n), when the element is located at the last position or is not
                    present in the dataset.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    7. What is the average-case time complexity of Binary Search?
                </h4>

                <p className="p-text">
                    O(log n).
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    8. What is Sentinel Linear Search?
                </h4>

                <p className="p-text">
                    Sentinel Linear Search is a variation of Linear Search that places the
                    target element temporarily at the end of the array to reduce the number
                    of comparisons.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    9. What is the space complexity of Iterative Binary Search?
                </h4>

                <p className="p-text">
                    O(1).
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    10. What is the space complexity of Recursive Binary Search?
                </h4>

                <p className="p-text">
                    O(log n) due to recursive function calls stored in the call stack.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    11. Which searching algorithm is best for large sorted datasets?
                </h4>

                <p className="p-text">
                    Binary Search.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    12. Can Binary Search be used on unsorted arrays?
                </h4>

                <p className="p-text">
                    No. Binary Search requires the data to be sorted.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    13. Which searching algorithm can be used on unsorted data?
                </h4>

                <p className="p-text">
                    Linear Search and Sentinel Linear Search.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    14. What is the main advantage of Binary Search over Linear Search?
                </h4>

                <p className="p-text">
                    Binary Search has O(log n) time complexity, making it significantly
                    faster for large sorted datasets.
                </p>

                <h4 className="font-semibold text-lg mt-6">
                    15. Give two real-world applications of Searching.
                </h4>

                <p className="p-text">
                    Database record retrieval and search engines.
                </p>

            </section>

        </div>
    );
};
