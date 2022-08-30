#include<stdio.h>
#include<stdlib.h>
#include "lists.h"
/* @check_cycle - checks if there is a cycle in the nodelists
 * @list : pointer to the beginning of the list
 * Return : 0 if there is a no cycle, 1 if there is.
 */
int check_cycle(listint_t *list)
{
	listint_t *slow = list;
	listint_t *fast = list;
	if(list == NULL)
		return (0);
	fast = fast->next;

	while (slow != NULL && fast !=NULL && fast->next != NULL)
	{
		if(fast == slow)
			return (1);
		fast = fast->next->next;
		slow = slow->next;
	}
	return (0);
}
