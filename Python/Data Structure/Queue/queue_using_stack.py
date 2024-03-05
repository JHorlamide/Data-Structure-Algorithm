class MyQueue(object):
    def __init__(self):
        self.stack = []

    def push(self, x):
        """
        :type x: int
        :rtype: None
        """
        new_stack = []

        while len(self.stack) > 0:
            new_stack.append(self.stack.pop())

        new_stack.append(x)

        while len(new_stack) > 0:
            self.stack.append(new_stack.pop())

    def pop(self):
        """
        :rtype: int
        """
        if self.empty():
            return None

        return self.stack.pop()

    def peek(self):
        """
        :rtype: int
        """
        if self.empty():
            return None

        return self.stack[len(self.stack) - 1]

    def empty(self):
        """
        :rtype: bool
        """

        return len(self.stack) == 0


my_queue = MyQueue()

my_queue.push("Olamide")
my_queue.push("Joy")
my_queue.push("Matt")
my_queue.push("Pavel")
my_queue.push("Samir")

print(my_queue.peek())
print(my_queue.pop())
print(my_queue.empty())
print(my_queue.stack)
