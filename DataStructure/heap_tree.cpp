#include<stdio.h>
#include<stdlib.h>
#define MAX_ELEMENT 200

typedef struct {
    int key;
} element;

typedef struct {
    element heap[MAX_ELEMENT];
    int heap_size;
} HeapType;

//생성 함수
HeapType* craete()
{ 
    return (HeapType *)malloc(sizeof(HeapType));
}

//초기화 함수
void init(HeapType * h)
{
    h->heap_size = 0;
}

//현재 요소의 개수가 heap_size 인 히프 h 에 item을 삽입한다.
//삽입 함수
void insert_max_heap(HeapType *h, element item) 
{
    int i;
    i = ++(h->heap_size);

    while( (i != 1) && (item.key > h->heap[i/2].key))
    {
        h->heap[i] = h->heap[i/2];
        i/=2;
    }
    h->heap[i] = item;
}

//삭제 함수
