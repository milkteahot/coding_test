#include<stdio.h>
#include<memory.h>
#include<string.h>
#include<stdlib.h>

#define KEY_SIZE 10
#define TABLE_SIZE 13
#define equal(e1, e2) (!strcmp(e1.key, e2.key))

typedef struct element
{
    char key[KEY_SIZE];
} element;

typedef struct ListNode
{
    element item;
    element *link;
} ListNode;
ListNode *hash_table[TABLE_SIZE];

int transform(char *key) {
    int number = 0;
    while(*key)
        number += *key++;
    return number;
}

int hash_function(char *key) {
    return transform(key) % TABLE_SIZE;
}

void hash_chain_add(element item, ListNode *ht[])
{
    int hash_value = hash_function(item.key);
    ListNode *ptr;
    ListNode *node_before = NULL;
    ListNode *node = ht[hash_value];

    for(; node; node_before = node, node = node->link)
    {
        if(equal(node->item, item)) {
            printf(stderr, "Duplicate search key\n");
            return;
        }
    }
    ptr = (ListNode *)malloc(sizeof(ListNode));
    ptr->item = item;
    ptr->link = NULL;
    if(node_before)
        node_before->link = ptr;
    else
        ht[hash_value] = ptr;
}

void hash_chain_delete(element item, ListNode *ht[])
{
    int hash_value = hash_function(item.key);
    ListNode *ptr;
    ListNode *node_before = NULL;
    ListNode *node = ht[hash_value];
    
    if(ht[hash_value] == NULL) {
        return 0;
    }
    // if(ht[hash_value] == NULL) {
    //     ht[hash_value] == ptr;
    // }
    if(equal(node->item, item)) {
        ListNode *ptr = ht[hash_value];
        ht[hash_value] = ht[hash_value]->link;
        printf(stderr, "Delete search key\n");
        return;
    }
    else {
        ListNode * ptr = ht[hash_value]->link;
        ListNode * node_before = ht[hash_value];
        
        for(; node; node_before = node, node = node->link){ 
            node_before = ptr;
            ptr = ptr->link;
        }
    }
    
    if(ptr == NULL) return 0;
    node_before->link = ptr->link;
    free(ptr);
    return 1;
    ptr = (ListNode *)malloc(sizeof(ListNode));
    ptr->item = item;
    ptr->link = NULL;
    // if(node_before)
    //     node_before->link = NULL;
    // else
    //     ht[hash_value] = ptr;
    
}

void hash_chain_search(element item, ListNode *ht[])
{
    ListNode *node;
    int hash_value = hash_function(item.key);
    for(node = ht[hash_value]; node; node = node->link){
        if(equal(node->item, item)) {
            printf("Search Success\n");
            return;
        }
    }
    printf("Search failed\n");
}

void hash_chain_print(ListNode *ht[])
{
    ListNode *node;
    for(int i=0;i<TABLE_SIZE;i++){
        printf("[%d]", i);
        for(node = ht[i]; node; node=node->link)
            printf(" -> %s", node->item.key);
        printf("-> null\n");
    }
}

void init_table(ListNode *ht[])
{
    for(int i=0;i<TABLE_SIZE;i++)
        ht[i] = NULL;
}

void main()
{
    element tmp;
    int op;
    init_table(hash_table);
    while(1) {
        printf("Enter the operation to do (0: insert, 1:delete, 2: search, 3:termaination): ");
        scanf("%d", &op);
        if(op==2) break;
        printf("Enter the search key: ");
        scanf("%s", tmp.key, sizeof(tmp.key));
        if(op==0)
            hash_chain_add(tmp, hash_table);
        else if(op==1)
            hash_chain_delete(tmp, hash_table);    
        else if(op==2)
            hash_chain_search(tmp, hash_table);
        hash_chain_print(hash_table);
        printf("\n");

    }
}