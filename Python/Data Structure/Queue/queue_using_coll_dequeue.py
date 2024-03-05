from collections import deque

class Queue:
    def __init__(self, max_len=10) -> None:
        self._queue = deque(maxlen=max_len)

    def enqueue(self, item):
        return self._queue.append(item)

    def dequeue(self):
        return self._queue.pop()

    def empty(self):
        return len(self._queue) == 0

    def print(self):
        values = []

        for index in range(len(self._queue)):
            values.append(self._queue[index])

        return values


queue = Queue()

queue.enqueue("Olamide")
queue.enqueue("Joy")
queue.enqueue("Matt")
queue.enqueue("Pavel")
queue.enqueue("Samir")
queue.dequeue()

print(queue.print())

